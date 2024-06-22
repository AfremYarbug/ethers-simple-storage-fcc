<h3 align="center">Ethers-Simple-Storage</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#Notes">Notes</a>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
- ...

## Notes

### ([05:30:42](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=19842s)) Lesson 5: Ethers.js Simple

### ([05:30:46](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=19846s)): Effective Debugging Stratetgies & Getting Help

### ([05:41:53](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=20513s)): How to Debug Anything

### ([05:53:47](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=21227s)): Installation & Setup - Moving to local development

Format your solidity code with:
```json
    "[solidity]": {
        "editor.defaultFormatter": "NomicFoundation.hardhat-solidity"
    },
    "[javascript]":{
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
```

### ([06:02:39](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=21759s)): Windows Install

### ([06:12:49](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=22369s)): Working with Gitpod

### ([06:17:00](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=22620s)): Local Development Introduction

### ([06:34:06](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=23646s)): Tiny Javascript Refresher

### ([06:38:07](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=23887s)): Asynchronous programming in Javascript

Synchronous
1. Put popcorn in microwave -> Promise
2. Wait for popcorn to finish
3. Pour drinks for everyone

Asynchronous
Asynchronous programming allows a program to initiate tasks and move on to other tasks before the first ones are completed
1. Put popcorn in microwave
2. Pour drinks for everyone
3. Wait for popcorn to finish

A promise can be 
... in Pending state
... Fulfilled state
... Rejected   

Example: Setup Movie Night

Cook popcorn
Pour Drinks
Start Movie

```js
async function setupMovieNight() {
    // Promise to wait unitl popcorn and drink function is fulfilled
    // if a function is async we have access to the await keyword
    await cookPopcorn() // wait until promise based function is fulfilled or rejected
    await pourDrinks()
    startMovie()
}
```

### ([06:46:16](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=24376s)): Compiling our Solidity

To compile a contract that imports other contracts
https://github.com/ethereum/solc-js 
- Install Yarn Package Manager
- Install sol-js: ```yarn add solc``` /or ```yarn add solc@0.8.7-fixed```
- All commands solc allows: ```yarn solcjs help```
- Compile: ```yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol```
- Short Compile Command:

```json
"scripts": {
    "compile": "solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol"
  }
```
Know we can run: ```yarn compile```


### ([06:55:12](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=24912s)): Ganache & Networks

Deploy to a fake blockchain

Networks
- RPC URL - connection to a blockchain node

### ([07:00:10](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=25210s)): Introduction to Ethers.js

- etherjs & web3js same thing
- install: ```yarn add ethers``` to connect to blockchain
- install ```yarn add fs-extra``` to read from abi and bin

### ([07:08:39](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=25719s)): A note on the await keyword

### ([07:10:24](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=25824s)): Adding Transaction Overrides

### ([07:12:18](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=25938s)): Transaction Receipts

### ([07:14:56](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=26096s)): Sending a "raw transaction in ethersjs

### ([07:24:57](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=26697s)): Interacting with Contracts in Ethersjs

### ([07:34:09](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=27249s)): Environment Variables

### ([07:54:00](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=28440s)): Optional Prettier Formatting

### ([07:57:52](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=28672s)): Deploying to a Testnet or a Mainnet

### ([08:04:28](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=29068s)): Verifying on Block Explorers (From the UI)

### ([08:14:19](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=29659s)): Lesson 5 Recap

### ([08:17:08](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=29828s)): Optional: Typescript