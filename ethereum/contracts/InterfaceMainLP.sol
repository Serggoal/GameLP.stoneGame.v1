// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface InterfaceMainLP {

    function getBankroll() external view returns(uint);

    function getBalance() external;

    function mint(address _player, uint amount) external;

    function rewardTokenHolders(address _tokenHolder, uint _withdrawTokens) external;

    function depo(address _player) external payable;

    function gameplay(address _player, uint _userBet) external payable;

    function getPartnerFee(uint _partnerFee, address owner) external;

    function payReward(address _player, uint _reward) external;

}