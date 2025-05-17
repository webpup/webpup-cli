import fs from "fs";
import archiver from 'archiver';



const archive = archiver('zip');

const exclude = ['node_modules/**', 'vendor/**', 'build/**', 'out/**', 'tmp/**', 'cache/**', 'logs/**', '.git/**', '.svn/**', '.hg/**', '.idea/**', '.vscode/**', '.DS_Store', 'Thumbs.db', 'desktop.ini', '*.log', '*.tmp', '*.cache', '*.bak', '*.swp', '*.swo', '*.orig', '*.rej', '*.class', '*.jar', '*.war', '*.ear', '*.zip', '*.tar.gz', '*.tgz', '*.tar.bz2', '*.tbz2', '*.tar.xz', '*.txz'];

// console.log(packageJson.name);



export function wpTheme(rootPath, themeName) {

    const inputPath = rootPath; // Replace with your input folder path
    const outputPath = rootPath + '/' + themeName + '.zip'; // Replace with your desired output zip file path

    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    archive.glob('**/*', {
        cwd: inputPath,
        ignore: exclude
    });

    archive.finalize();

    output.on('close', function () {
        console.log('Zip file created successfully: ' + outputPath);
    });


}