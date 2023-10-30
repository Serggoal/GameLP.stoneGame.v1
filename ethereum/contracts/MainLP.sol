// SPDX-License-Identifier: MIT

import "./IERC20.sol";

pragma solidity ^0.8.0;

contract MainLP is IERC20 {
    address public owner;
    bool private locked;
    uint public totalTokens;
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowances;
    address[] public partner;
    mapping(address => uint) public partnersRate;
    string public name = "GameLP Token";
    string public symbol = "GAMELP";
    uint public contractBalance; 
    uint public rateBankFee = 2;
    uint public bankroll;  // the biggest bet: contractBalance / bankroll
    uint public degree = 1000000000000000000; // 10**18
    uint public rateGame = 5; // minting tokens's rate for player


        constructor() {
        owner = msg.sender;
    }
        modifier reentrancyGuard() {
            require(!locked, "denied");
            locked = true;
            _;
            locked = false;
    }

        modifier enoughTokens(address _from, uint _amount) {
        require(balanceOf(_from) >= _amount, "Not enough tokens!");
        _;
    }

        modifier onlyOwner() {
        require(msg.sender == owner, "Only an owner");
        _;
    }
    // only verified contracts can interact with the pool
        modifier whiteList(address _partner) {
        require(checkWhiteList(_partner), "Not a partner!");
        _;
    }
    
    event DepoMintTokens(address _player, uint userTokens); 
    event PlaygameMintTokens(address _player, uint userTokens);
    event RewardPlayer(address _player, uint _reward);
    event Rewarding(address receiver, uint rewardForPlayer);
    
    function setBankroll(uint _bankroll) public onlyOwner {
       bankroll = _bankroll;
    }
    function getBankroll() public view returns(uint) {
       return contractBalance / bankroll;
    }

    function setPartner(address _partner) public onlyOwner {
       partner.push(_partner);
    }

    function checkWhiteList(address _partner) private view returns(bool) {
        bool truePartner;
        uint lenght = partner.length;
        for (uint i = 0; i < lenght; i++) {
            if(partner[i] == _partner) {
              truePartner = true;
            }
        }
        return truePartner;
    }

    function deletePartner(address _partner) public onlyOwner {
        uint lenght = partner.length;
        for (uint i = 0; i < lenght; i++) {
            if(partner[i] == _partner) {
              partner[i] = 0x0000000000000000000000000000000000000000;
            }
        }
    }
    // need first depo to start, just one transaction
    function firstDepo() public payable {
        uint firstPrice = 1000000000000000; // 10**15
        require(totalTokens == 0, "Pool already started");
        uint tokensForDepo = msg.value / firstPrice * degree;
        uint userBankFee = msg.value / 100 * rateBankFee;
     
          mint(msg.sender, tokensForDepo);
          (bool success, ) = owner.call{value: userBankFee}("");
          require(success, "failed");
        
        emit DepoMintTokens(msg.sender, tokensForDepo);
    }

    // set Partner rate for liquidity providing
    function setPartnerRate(address _partner, uint _rate) public onlyOwner whiteList(_partner) {
       partnersRate[_partner] = _rate;
    }
    function getPartnerRate(address _partner) public view returns(uint) {
       return partnersRate[_partner];
    }

    // set main Bank fee
    function setRateBankFee(uint _rateBankFee) public onlyOwner {
      rateBankFee = _rateBankFee;
    }

    function setRateGame(uint _rateGame) public onlyOwner {
      rateGame = _rateGame;
    }

    function getBalance() public {
       contractBalance = address(this).balance;
   }

    function decimals() public override pure returns(uint) {
        return 18; 
    }

    function totalSupply() public override view returns(uint) {
        return totalTokens;
    }

    function balanceOf(address account) public override view returns(uint) {
        return balances[account];
    }

    function transfer(address to, uint amount) external override enoughTokens(msg.sender, amount) {
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
    }

    function allowance(address holder, address spender) external override view returns(uint) {
        return allowances[holder][spender];
    }

    function approve(address spender, uint amount) external override {
        allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
    }

    function transferFrom(address sender, address recipient, uint amount) external override enoughTokens(sender, amount) {
        allowances[sender][recipient] -= amount;
        balances[sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }

      // mint tokens for users   
    function mint(address _player, uint amount) private {

        balances[_player] += amount;
        totalTokens += amount;
        getBalance();
      
        emit Transfer(address(0), _player, amount);
    }

    // manually withdrawal 
    
    function rewardTokenHolders(address _tokenHolder, uint _withdrawTokens) public {
        require(checkWhiteList(msg.sender) || msg.sender == _tokenHolder, "Only holders");
        require((_withdrawTokens / 10000) * 10000 >= 1, "too small");
        uint balanceUserTokens = balances[_tokenHolder];
        require(balanceUserTokens != 0, "You haven't tokens!");
        require(_withdrawTokens <= balanceUserTokens, "You have less tokens!");

        uint payoutUser = _withdrawTokens * contractBalance / totalTokens;
        balances[_tokenHolder] -= _withdrawTokens;
        totalTokens -= _withdrawTokens;

        (bool success, ) = _tokenHolder.call{value: payoutUser}("");
        require(success, "failed");
        getBalance(); 

        emit Rewarding(_tokenHolder, payoutUser);
        emit Transfer(_tokenHolder, address(0), _withdrawTokens);
    }

    // get Token price
    function getTokenPrice() public view returns(uint256) {
        return  contractBalance * degree / totalTokens; 
    }

    // the process of providing liquidity to the game. In return for liquidity, it receives tokens
    // only through Partner possible providing liquidity

    function depo(address _player) public payable whiteList(msg.sender) {
        uint currentPrice = getTokenPrice();
        uint tokensForDepo = msg.value / currentPrice * degree;
        uint ratePartnerFee = partnersRate[msg.sender];
        uint userBankFee = msg.value / 100 * rateBankFee;
        uint userPartnerFee = msg.value / 100 * ratePartnerFee;

        (bool success, ) = owner.call{value: userBankFee}("");
        require(success, "failed");
        (bool success2, ) = msg.sender.call{value: userPartnerFee}("");
        require(success2, "failed2");
     
          mint(_player, tokensForDepo);
        
        emit DepoMintTokens(_player, tokensForDepo);
    }

    // the process of the game. The player receives the tokens

    function gameplay(address _player, uint _userBet) external payable whiteList(msg.sender) {
        uint currentGamePrice = getTokenPrice();
        uint tokensToGame = _userBet * degree / currentGamePrice * degree / rateGame / degree;

        uint ratePartnerFee = partnersRate[msg.sender];
        uint userBankFee = _userBet / 100 * rateBankFee;
        uint userPartnerFee = _userBet / 100 * ratePartnerFee;
      
        (bool success, ) = owner.call{value: userBankFee}("");
        require(success, "failed");
        (bool success2, ) = msg.sender.call{value: userPartnerFee}("");
        require(success2, "failed2");
     
        mint(_player, tokensToGame);
        
        emit PlaygameMintTokens(_player, tokensToGame);
    }

    // payments in game for Win
    function payRewardWin(address _player, uint _reward) external whiteList(msg.sender) reentrancyGuard {
        uint ratePartnerFee = partnersRate[msg.sender];
        uint userBankFee = _reward / 100 * rateBankFee;
        uint userPartnerFee = _reward / 100 * ratePartnerFee;

        (bool success, ) = owner.call{value: userBankFee}("");
        require(success, "failed");
        (bool success2, ) = msg.sender.call{value: userPartnerFee}("");
        require(success2, "failed2");

        getBalance();
        emit RewardPlayer(_player, _reward);
    }

    // payments in game for Draw
    function payRewardDraw(address _player, uint _reward) external whiteList(msg.sender) reentrancyGuard {
        (bool success, ) = _player.call{value: _reward}("");
        require(success, "failed");
        getBalance();
        emit RewardPlayer(_player, _reward);
    }

    fallback() external payable {
    }

    receive() external payable {
    }
}