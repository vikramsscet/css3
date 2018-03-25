let PhoneBuilder = require('./PhoneBuilder');

class PhoneEngineer{
    
    //let phone = new Phone();
    constructor(phone){
       this.phone = phone;    
    }
    createPhone(ram, screen, processor, battery, os){
        let phoneBuilder = new PhoneBuilder(this.phone);
        phoneBuilder.createRam(ram);
        phoneBuilder.createScreen(screen);
        phoneBuilder.createProcessor(processor);
        phoneBuilder.createBattery(battery);
        phoneBuilder.createOS(os);
    }
    
    getPhone(){
        return this.phone;
    }
}

module.exports = PhoneEngineer;