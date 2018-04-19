const http = require("http");

function f(){
    this.p = 0;
}
f.prototype = {
    asyncFun(url){
        return new Promise((res,rej)=>{
            let body = "";
            http.get(url, resp => {
                resp.on("data", data => {
                    body += data;
                  });
                resp.on("end", () => {
                    //console.log(body);
                    res(body);
                })
            }).on("error", error => {
                rej(error.message);
            })
        });
    },
    getSomeData(){
        let urls = ["http://www.mocky.io/v2/5185415ba171ea3a00704eed",
                    "http://www.mocky.io/v2/5ac6612c4a00005b007e076c",
                    "http://www.mocky.io/v2/5ac661384a000011007e076d"
                    ];
        let promiseArr = [];
        urls.forEach(url => {
            promiseArr.push(this.asyncFun(url));
        });
        return Promise.all(promiseArr).then(dataArr => {
            return dataArr;
        }).catch(err => {
            console.log(err);
        })
    },
    add(x,y){
        return x + y;
    },
    sub(x,y){
        return x - y;
    },
    mul(x,y){
        return x * y;
    },
    div(x,y){
        return (x/y);
    }
}

// let obj = new f();
// obj.getSomeData().then(results => {
//     console.log(results);
// });
module.exports = f.prototype;