"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require("hardhat"),
    ethers = _require.ethers; //const hre = require("hardhat");


function main() {
  var _ref, _ref2, deployer, MainLP, mainLP;

  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ethers.getSigners());

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          deployer = _ref2[0];
          console.log("Deploying contracts with the address: ", deployer.address); //console.log("Account balance:", (await deployer.getBalance()).toString());
          // const stopSupply1 = '2000';
          // const stopSupply = ethers.utils.parseEther(stopSupply1);

          _context.next = 8;
          return regeneratorRuntime.awrap(ethers.getContractFactory("MainLP"));

        case 8:
          MainLP = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(MainLP.deploy());

        case 11:
          mainLP = _context.sent;
          console.log("MainLP deployed to:", mainLP.address);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

main().then(function () {
  return process.exit(0);
})["catch"](function (error) {
  console.error(error);
  process.exit(1);
});