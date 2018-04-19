var mathObj = require('./MathApi');

describe("MathApi test",()=>{
    let resdata = {"aa":"asasassa"};
    beforeEach(()=>{
        //mathObj = jasmine.createSpyObj(Math, ['asyncFun']);
        spyOn(mathObj,"asyncFun").and.returnValue({
            "aa":"asasassa"
        });
    });
    it("add method test",()=>{
        expect(mathObj.add(2,3)).toEqual(5);
    });
    it("sub method test",()=>{
        expect(mathObj.sub(10,3)).toEqual(7);
    });
    it("async function call",()=>{
        expect(mathObj.asyncFun()).toEqual(resdata);
    });

    it("Promise all test getSomeData", (done)=>{
        mathObj.getSomeData().then(results => {
            //console.log(results);
            results.forEach(result => {
                expect(result).toEqual(resdata)
            })
            expect(results.length).toEqual(3);
            done();
        })
    })
})