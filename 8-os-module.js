const os = require("node:os");
// to get info about current user
const user = os.userInfo();
console.log(user);
// method return the system up-time in seconds
console.log(`System up-time is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
