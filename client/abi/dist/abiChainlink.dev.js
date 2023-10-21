"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// 0x04416deF594036f26c169782621194B65B690E23
var AbiChainlink = function AbiChainlink(props) {
  return [{
    "inputs": [{
      "internalType": "uint64",
      "name": "subscriptionId",
      "type": "uint64"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "have",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "want",
      "type": "address"
    }],
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "randomWords",
      "type": "uint256[]"
    }],
    "name": "RequestFulfilled",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint32",
      "name": "numWords",
      "type": "uint32"
    }],
    "name": "RequestSent",
    "type": "event"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_requestId",
      "type": "uint256"
    }],
    "name": "closeRandom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_partner",
      "type": "address"
    }],
    "name": "deletePartner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_requestId",
      "type": "uint256"
    }],
    "name": "existOrNot",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_requestId",
      "type": "uint256"
    }],
    "name": "getCurrentRandom",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_requestId",
      "type": "uint256"
    }],
    "name": "getFulfillStatus",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getLastRequestId",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_requestId",
      "type": "uint256"
    }],
    "name": "getRequestStatus",
    "outputs": [{
      "internalType": "bool",
      "name": "fulfilled",
      "type": "bool"
    }, {
      "internalType": "uint256[]",
      "name": "randomWords",
      "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "lastRequestId",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "partner",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }, {
      "internalType": "uint256[]",
      "name": "randomWords",
      "type": "uint256[]"
    }],
    "name": "rawFulfillRandomWords",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "requestIds",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "requestRandomWords",
    "outputs": [{
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "s_requests",
    "outputs": [{
      "internalType": "bool",
      "name": "fulfilled",
      "type": "bool"
    }, {
      "internalType": "bool",
      "name": "exists",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_partner",
      "type": "address"
    }],
    "name": "setPartner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }];
};

var _default = AbiChainlink;
exports["default"] = _default;