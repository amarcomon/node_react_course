console.log(`The architecture of machine is: ${process.arch}`);
console.log(`The process id of machine is: ${process.pid}`);
console.log(`The platform of machine is: ${process.platform}`);
console.log(`The version of the process is: ${process.version}`);
console.log(`${process.uptime()}`);
console.log(`${process.cwd()}`);
console.log(`${JSON.stringify(process.memoryUsage())}`);
