const { exec } = require("child_process");

exec("ollama run llama3", { stdio: "inherit" }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
});
