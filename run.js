/**
 * Created by admin on 15/12/4.
 */

var fs = require("fs");

var result = fs.readFileSync("captcha.jpg");

console.log(result);
console.log("打印result长度 js－－》"+result.length);

var Method = require('./build/Debug/reader');

console.log("验证码识别--->"+Method(result));