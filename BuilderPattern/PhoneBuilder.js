//import Phone from 'Phone';
class PhoneBuilder{
    
    constructor(phone){
        this._phone = phone;
    }
    
    createRam(ram){
        this._phone.ram = ram; 
    }
    
    createScreen(screen){
        this._phone.screen = screen;
    }
    
    createProcessor(processor){
        this._phone.processor = processor;
    }
    
    createBattery(battery){
        this._phone.battery = battery;
    }
    
    createOS(os){
        this._phone.os = os;
    }
    
    getPhone(){
        return this._phone;
    }
}

module.exports = PhoneBuilder;