require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require('hardhat-gas-reporter')
require('solidity-coverage')
require('hardhat-deploy')

const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL || 'https://eth-rinkeby/example'
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0x756c10f614795972a3d269eefdea3ee32d557065297f08bd6d0a7f30db04eebd'
const COINMKTCAP_API_KEY = process.env.COINMKTCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'key'

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    // rinkeby: {
    //   url: RINKEBY_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    //   chainId: 4,
    //   blockConfirmations: 6,
    // },
  },
  solidity: {
    compilers: [{ version: '0.8.8' }, { version: '0.6.6' }],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
    outputFile: 'gas-report.txt',
    noColors: true,
    coinmarketcap: COINMKTCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
}
