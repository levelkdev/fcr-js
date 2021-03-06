module.exports = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "market",
        "type": "address"
      },
      {
        "name": "outcomeTokenAmounts",
        "type": "int256[]"
      }
    ],
    "name": "calcNetCost",
    "outputs": [
      {
        "name": "netCost",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "market",
        "type": "address"
      },
      {
        "name": "outcomeTokenIndex",
        "type": "uint8"
      }
    ],
    "name": "calcMarginalPrice",
    "outputs": [
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
