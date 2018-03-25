class Phone {
    constructor(ram, screen, processor, battery, os){
        this._ram = ram;
        this._battery = battery;
        this._screen = screen;
        this._processor = processor;
        this._os = os;
    }
    get ram(){
        return this._ram;
    }
    set ram(ram){
        this._ram = ram;
    }
    get battery(){
        return this._battery;
    }
    set battery(battery){
        this._battery = battery
    }
    get screen(){
        return this._screen;
    }
    set screen(screen){
        this._screen = screen;
    }
    get processor(){
        return this._processor;
    }
    set processor(processor){
        this._processor = processor;
    }
    get os(){
        return this._os;
    }
    set os(os){
        this._os = os;
    }
    toString(){
        return `OS : ${this._os}
        Processor : ${this._processor}
        Screen : ${this._screen}
        Battery : ${this._battery}
        Ram : ${this._ram}`;
    }
}

module.exports = Phone;