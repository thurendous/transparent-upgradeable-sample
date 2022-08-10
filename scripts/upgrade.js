const { ethers, upgrades } = require("hardhat")

async function main() {
    const BoxV2 = await ethers.getContractFactory('BoxV2')
    let box = await upgrades.upgradeProxy('0x159d4F488d3cBb6AC64d3E0C17b0C181ccC394Ef', BoxV2)
    console.log('Your upgraded proxy is done! ')
}




main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })

