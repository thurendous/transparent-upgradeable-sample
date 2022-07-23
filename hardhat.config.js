// require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config()

const RINKEBY_RPC_URL = process.env.ALCHEMY_KEY_RINKEBY
const PRIVATE_KII = process.env.PRIVATE_KII

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: 'rinkeby',
    networks: {
      hardhat: {},
        rinkeby: { 
          url: RINKEBY_RPC_URL,
          accounts: [`${PRIVATE_KII}`],
        },
      },
    solidity: '0.7.0',
};
