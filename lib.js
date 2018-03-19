let singltonObj = ()=>{
    let flag=true;
    let timeObj;
    let createToolTip = ()=>{
        let template = document.createElement('template');
        template.innerHTML = "<div class='tooltip'></div>";
        return template.content.firstChild;    
    }
    let tooltipEl = createToolTip();
    let mouseMoveEvent = (e)=>{
        document.body.removeChild(tooltipEl);
        tooltipEl.style.left = 10+e.x+"px";
        tooltipEl.style.top = 10+e.y+"px";
        tooltipEl.innerHTML = "x: "+e.x+" y: "+e.y;
        document.body.appendChild(tooltipEl);
    }
    
    let init = ()=>{
        //console.log(getElementCoordinates("body"));
        document.body.appendChild(tooltipEl);
        document.onmousemove = mouseMoveEvent;
        let logoEl = document.getElementsByClassName("logo")[0];
        logoEl.onclick = randomSimulation;
    }
    
    let randomSimulation = ()=>{
        
        let circleEl = document.getElementsByClassName("circle")[0];
        if(flag){
            let rangeCoord = getElementCoordinates("body");
            flag=false;
            showRandom(rangeCoord, circleEl);
            console.log("*****starting*****");
        }else{
            flag = true;
            circleEl.style.display = "none";
            clearInterval(timeObj);
            console.log("----stopping-----");
        }
    }
    
    let getRandomBtw = (range)=>{
        console.log("x range : ",range.x);
        console.log("y range : ",range.y);
        return {
            x : (Math.random() * (range.x.max - range.x.min) + range.x.min),
            y : (Math.random() * (range.y.max - range.y.min) + range.y.min)
        };
    }
    
    let showRandom = (rangeCoord, el)=>{
        
        
        timeObj = setInterval(()=>{
            el.style.display = "block";
            let randomCoord = getRandomBtw(rangeCoord); 
            console.log("randomCoord : ",randomCoord);
            el.style.top = randomCoord.x+"px";
            el.style.left = randomCoord.y+"px";
            
        },5000);
    }
    let getElementCoordinates = (className)=>{
        let el = document.getElementsByClassName(className)[0];
        return {
            x : {
                min : el.offsetLeft,
                max : el.offsetLeft + el.offsetWidth
            },
            y : {
                min : el.offsetHeight,
                max : el.offsetTop
            }
        }
    }
    
    return {
        init
    }
}