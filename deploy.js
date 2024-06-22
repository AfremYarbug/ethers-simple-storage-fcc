const ethers = require("ethers"); 
const fs = require("fs-extra");

async function main() {
    // script to connect to the blockchain
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");

    // Get Wallet with Private Key & Provider
    // Ganache Private Key
    const wallet = new ethers.Wallet("0xc55422cbc7cba818400f16b3920e096f6208fe32a1bc6cd0d08bf1ab2c674c31", provider);

    // read abi
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    // read bin
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");

    // Contractfactory is a object to deploy contracts
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");

    // deploy contract with ethers
    const contract = await contractFactory.deploy(); // Wait to deploy
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

