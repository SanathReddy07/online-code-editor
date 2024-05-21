const { exec } = require('child_process');

const executeCode = (language, code, callback) => {
    const filename = `temp.${language}`;
    const fs = require('fs');
    fs.writeFileSync(filename, code);

    let command;
    switch (language) {
        case 'js':
            command = `node ${filename}`;
            break;
        case 'py':
            command = `python ${filename}`;
            break;
        // Add more languages here
        default:
            return callback(new Error('Unsupported language'));
    }

    exec(command, (error, stdout, stderr) => {
        fs.unlinkSync(filename); // Clean up the file after execution
        if (error) {
            return callback(stderr);
        }
        callback(null, stdout);
    });
};

module.exports = executeCode;
