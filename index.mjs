#!/usr/bin/env node
import { execSync } from "child_process";

const runCommand = (command) => {
    try {
      execSync(`${command}`, { stdio: "inherit" });
  
      return true;
    } catch (err) {
      console.log(`Failed to run ${command}`);
      console.log(err);
  
      return false;
    }
  };


  runCommand('npx ts-node src/main.ts')