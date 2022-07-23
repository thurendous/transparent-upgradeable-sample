const { ethers, upgrades } = require("hardhat")

async function main() {
    const BoxV2 = await ethers.getContractFactory('BoxV2')
    let box = await upgrades.upgradeProxy('0x1760E38286453E2C2839d3De5d846aD81092AA97', BoxV2)
    console.log('Your upgraded proxy is done! ')
}




main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })

