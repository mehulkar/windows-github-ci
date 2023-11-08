import os from "os";

// Get the number of CPU cores
const numCores = os.cpus().length;

console.log(`Number of CPU cores: ${numCores}`);
