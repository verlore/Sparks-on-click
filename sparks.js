var intervalCountId = 1;

function random1(){
    let randomNumber = Math.floor(Math.random() * 20) + 3;
    return randomNumber;
}

function random2(){
    let randomNumber = Math.floor(Math.random() * 20) - 10;
    return randomNumber;
}

function startInterval(sparks, ici){
    var interval = setInterval(sparksMoving, 50, sparks, ici);
}

async function sparks(e, ici){
    let rand = random1();
    let individualSpark = []
    for(let i = 0; i < rand;i++){
        let life = random1();
        let elem = document.createElement("div");
        let xr = random1();
        let yr = random1();
        let x = (e.x+xr).toString();
        let y = (e.y+yr).toString();
        // add props
        elem.classList.add("spark") 
        elem.style.left = x+"px";
        elem.style.top = y+"px";
        // append to page
        document.body.append(elem)
        individualSpark.push([elem, life])
    }   
    startInterval(individualSpark, ici)
}

async function sparksMoving(array, ici){
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++){
            if(array[i][1] <= 0){
                array[i][0].remove()
                array.splice(i, 1)
            } else{
                //y
                let memy = parseInt(array[i][0].style.top);
                memy = (memy + 3);
                memy = (memy.toString()) + "px"
                array[i][0].style.top = memy;
                //x
                let memx = parseInt(array[i][0].style.left);
                memx = memx + random2();
                memx = (memx.toString()) + "px"
                array[i][0].style.left = memx;
                //life
                array[i][1] -= 1;
            }
        }
    } else {
        clearInterval(ici);
        //console.log("here if something breaks from the intervals")
    }
}


document.addEventListener("click", (e)=>{
    sparks(e, intervalCountId)
    intervalCountId+=1;
})