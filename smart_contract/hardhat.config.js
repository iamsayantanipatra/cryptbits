require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Wo9LIsiMR0C7RqtFX8UisMlTu9y_I5LQ",
      accounts: ['edd500fa3823cb1c98d3d8c7018549397f36a9f13559bb698bf9d8f1728e6ab4']
    },
  },
};
