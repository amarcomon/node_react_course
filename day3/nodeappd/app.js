const exec = require("child_process").exec;

exec("./test.sh", (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stdout);
});
