// SPDX-License-Identifier: MIT

import "./InterfaceMainLP.sol";
import "./IVRFv2Consumer.sol";

pragma solidity ^0.8.0;

    contract StoneGame {
        address public owner;
        uint public userBet;
        uint public userChoice;
        address public addressPlayer;
        uint public degree = 1000000000000000000; // 10**18
        uint public minDepo = 1000000000000000000; // 1 Matic 
        uint public minBet = 100000000000000000; // 0.1 Matic
        uint public botChoice;
        uint public rate;
        bool public nextUser;

        IVRFv2Consumer random_contract;   // interaction with Chainlink
        InterfaceMainLP main_contract;    // interaction with main pool
        address public main_payable;

    constructor(address _random_contract, address _main_contract) {
        owner = msg.sender;
        random_contract = IVRFv2Consumer(_random_contract);
        main_contract = InterfaceMainLP(_main_contract);
        main_payable = _main_contract;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only an owner");
        _;
    }

    function setRate(uint _rate) public onlyOwner {
       rate = _rate;
    }

    function setRandomContract(IVRFv2Consumer _random_contract) public onlyOwner {
        random_contract = _random_contract;
    }

    function setMainContract(InterfaceMainLP _main_contract, address _main_repeat_contract) public onlyOwner {
        main_contract = _main_contract;
        main_payable = _main_repeat_contract;
    }

    event Rewarding(address receiver, uint howManyRewards);
    event RewardTokens(address receiver);
    event Draw(string);
    event PartnerWithdrawal(address owner, uint howMuch);

  // start game: tx contains userChoice and bet
    function startRequestRandom(uint256 _userChoice) public payable {
        require(!nextUser, "Wait in line");
        require(msg.sender != owner, "You are Owner!");
        require(msg.value >= minBet, "Need more 0.01");
        uint bankroll = main_contract.getBankroll();

        require(msg.value < bankroll, "Not enouth funds in game!");
        random_contract.requestRandomWords();
        address payable toPay = payable(main_payable);
        toPay.transfer(msg.value);
        userBet = msg.value;
        addressPlayer = payable(msg.sender);
        userChoice = _userChoice;
        nextUser = !nextUser;
    }
   // summing up the results
    function getGameStatus(uint256 _requestId) public {
        require(nextUser, "Wait next play!");
        require(msg.sender == addressPlayer || msg.sender == owner, "You aren't player. Wait in line!");
        require(random_contract.existOrNot(_requestId), "request not found");
        require(random_contract.getFulfillStatus(_requestId), "Wait random!");
        random_contract.closeRandom(_requestId);

        uint currentRandomWord = random_contract.getCurrentRandom(_requestId);
        uint randomNumber = currentRandomWord % rate;
        uint roundWinner;

           if(randomNumber <= 2) {
            botChoice = randomNumber;
            roundWinner = checkWinner(userChoice, botChoice);
           } else {
            roundWinner = 0;
           }

        playGame(roundWinner);
        nextUser = !nextUser;
    }

    function checkWinner(uint256 _userChoice, uint256 _botChoice) private pure returns(uint){

          if(_userChoice == _botChoice){
              return 2;
            }
          if(_userChoice == 0 && _botChoice == 1 || _userChoice == 1 && _botChoice == 2 || _userChoice == 2 && _botChoice == 0 ){
            return 1;
            }
          return 0;
          }
          
   // results 0-lost; 1-win; 2-draw
    function playGame(uint _result) private {

        uint rewardPlayer = userBet * 2;

        if(_result == 1) {
            main_contract.payRewardWin(addressPlayer, rewardPlayer);

            emit Rewarding(addressPlayer, rewardPlayer);
        } else if(_result == 0) {
            main_contract.gameplay(addressPlayer, userBet);

            emit RewardTokens(addressPlayer);
        } else if(_result == 2) {
            main_contract.payRewardDraw(addressPlayer, userBet);
            
            emit Draw("Draw");
        }
    }

//////// providing liquidity to the pool
    function depo() public payable {
        require(msg.sender != owner, "You are an Owner!");
        require(msg.value >= minDepo, "Incorrect sum!"); // 1 Matic
    
        main_contract.depo{value: msg.value}(msg.sender);
    }
//////// change tokens to Matic
    function rewardTokenUsers(uint _withdrawTokens) public {
        main_contract.rewardTokenHolders(msg.sender, _withdrawTokens);
    }
////////  Partner's withdrawal
    function getPartnerWithdrawal() public onlyOwner {
        uint reward = address(this).balance;
        (bool success, ) = owner.call{value: reward}("");
        require(success, "failed");
        
        emit PartnerWithdrawal(owner, reward);
    }
    fallback() external payable {
    }

    receive() external payable {
    }
}