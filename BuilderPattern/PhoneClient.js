var PhoneEngineer = require('./PhoneEngineer');
var Phone  = require("./Phone");
function run(){
    
    let phone = new Phone();
    let phoneEng = new PhoneEngineer(phone);
    phoneEng.createPhone(4,5.5,'qualcomm',3000,'andriod');
    let andriodPhone = phoneEng.getPhone();
    console.log(andriodPhone.toString());
    
    phoneEng.createPhone(6,5,'snapagradon',3500,'IOS');
    let applePhone = phoneEng.getPhone();
    console.log(applePhone.toString());
}

run();