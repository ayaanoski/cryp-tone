// deploy.ts

import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {
  const AnonAadhaarVerifier = await ethers.deployContract("AnonAadhaar");
  await AnonAadhaarVerifier.waitForDeployment();

  const _anonAadhaarVerifierAddress = AnonAadhaarVerifier.getAddress();

  const vote = await ethers.deployContract("Vote", [
    "Do you like this app?",
    ["0", "1", "2", "3", "4", "5"],
    _anonAadhaarVerifierAddress,
  ]);

  await vote.waitForDeployment();

  console.log(`Vote contract deployed to ${await vote.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});