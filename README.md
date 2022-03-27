# loop
Loop is a social platform for music Artists to connect with their fans.

<img src="./loop2.png"/>

## Problem:

It is increasingly difficult to link Artists with their loyal fans.

## Our solution

We decided to build a dApp for bringing Artists and their followers together using Lens Protocol. Our dApp has two types of users.
Artists for creating their own Lens Profile NFTs. They also upload their profile images into IPFS. Fans follow their artists by using follow module.

## How It's Made

Architecture:

- LensHub smart contract deployed at Polygon testnet 0xd7B3481De00995046C7850bCe9a5196B7605c367
- User.sol for distinguishing the type of users (Artists, Fans, Unenrolled)
- Next based NFT Dapp to mint Lens Profile NFTs, Follow NFT

Technologies

- UI - React, HTML/CSS
- IPFS: We store all NFT generated images on IPFS.
- API - Lens Protocol
- Smart Contract - Solidity, LensHub
- Backend - web3.js, Node.js
- Art Design - Adobe PhotoShop, Adobe Illustrator
- Testnet - Mumbai Polygon , Opensea
- Tools - Truffle, Remix, Metamask


# How to setup and run Loop
* yarn install
* yarn build
* yarn start

## Developers
Kaushik (kaushik.mrl@gmail.com)
Ram Vittal (ramvittal@gmail.com)
Sajith Mohideen (sajith.wanderer@gmail.com)
Sayan Mohideen (sayan.wander@gmail.com)


