import { ethers } from 'ethers';
import * as React from "react";

//Workaround for using window.ethereum
//declare let window: any;
// This code will assume you are using MetaMask.
// It will also assume that you have already done all the connecting to metamask
// this is purely here to show you how the public API hooks together
export const ethersProvider = new ethers.providers.Web3Provider((window as any).ethereum.request);

export const getAddress = async() => {
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

export const signText = (text) => {
  const signer = ethersProvider.getSigner();
  return signer.signMessage(text);
}