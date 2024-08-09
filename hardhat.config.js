// hardhat.config.ts

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-dependency-compiler";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  dependencyCompiler: {
    paths: ["@anon-aadhaar/contracts"],
  },
};

export default config;