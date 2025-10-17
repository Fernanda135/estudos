const { exec } = require('child_process');

for (let i = 0; i < 10; i++) {
    exec(`cp round6.png ${i}.png}`)
}