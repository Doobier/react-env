const request = require("request");
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
// import AdmZip from 'adm-zip';

function zipFolder(distFolder, targetPath) {
    const zip = new AdmZip();
    zip.addLocalFolder(distFolder);
    zip.writeZip(targetPath);
}

function upload(url, appPath, source) {
    const req = request.post(url, (err, resp, body) => {
        if(err){
            console.log('Error', err);
        }else{
            console.log('URL:', body);
        }
    });
    const form = req.form();
    form.append('file', fs.createReadStream(source));
    form.append('app_path', appPath);
}

function getDistFolder() {
    return path.resolve(process.cwd(), 'dist');
}

function getTempFolder() {
    return path.resolve(process.cwd(), '.tmp');
}

function getPackageJsonPath() {
    return path.resolve(process.cwd(), 'package.json');
}

const pathInfo = {
    dist: getDistFolder(),
    temp: getTempFolder(),
    packageJson: getPackageJsonPath()
};

const deploy = env => {
    const targetIP = env === 'test' ? "http://30.4.66.186" : "http://30.16.94.136";
    const url = `${targetIP}/testcli/file_upload`;
    const pkgJson = JSON.parse(fs.readFileSync(pathInfo.packageJson));
    const appPath = `/wls/wls81/${pkgJson.name}`;
    const tmpZipPath = path.resolve(pathInfo.temp, `${pkgJson.name}.zip`);
    console.info('正在压缩安装包。。。');
    zipFolder(pathInfo.dist, tmpZipPath);
    console.info('正在上传文件。。。');
    upload(url, appPath, tmpZipPath);
    console.info('移除临时文件。。。');
    fs.unlinkSync(tmpZipPath);
    console.info('更新完毕！');
}

deploy('prod');
