// require('@nomicfoundation/hardhat-toolbox');
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")
require("hardhat-contract-sizer")
require("@nomiclabs/hardhat-etherscan")
const {
    TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
} = require("hardhat/builtin-tasks/task-names")
const path = require("path")
require("dotenv").config()

const RINKEBY_RPC_URL = process.env.ALCHEMY_KEY_RINKEBY || ""
const PRIVATE_KII = process.env.PRIVATE_KII || ""
const ETHERSCAN_RINKEBY_API = process.env.ETHERSCAN_RINKEBY_API || ""


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {},
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [`${PRIVATE_KII}`],
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.7.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.9",
            },
        ],
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: ETHERSCAN_RINKEBY_API,
    },
}
