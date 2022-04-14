require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wVR9dVoDCi5LcUrz0IPnkXXz1geNX_-t',
      accounts: ['631a83fb17487d18642dfd25bce738b4c2c29b737da6d7527050bc2f4177c649']
    }
  }
};
// https://eth-ropsten.alchemyapi.io/v2/wVR9dVoDCi5LcUrz0IPnkXXz1geNX_-t