const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

// save private key encrypted

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJsonKey = await wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD, process.env.PRIVATE_KEY);

    // save encryptedJsonKey into a new file
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })