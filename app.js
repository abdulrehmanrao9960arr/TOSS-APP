// dom 
var atts = document.querySelector("#scorestt")
var score1 = document.querySelector("#score")
var count1 = document.querySelector("#count")
let btns1 =document.querySelector("#btn1")
let btns2 = document.querySelector("#btn2")
let head = document.querySelector("h1")
let pic = document.querySelector("img")
let reesult = document.querySelector("#result")
let resnum = document.querySelector("#resnum")
let button = document.querySelector("#buttton")
let your = document.querySelector("#choose")
// dom 
pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpODrmhtW_xGWJObem1yJp9_X_pS7VRfZByQ&s"
reesult.innerHTML = "RESULT"
resnum.innerHTML = "NUMBER COMPUTER CHOOSES"
score = 0
count = 0
// chnd 
function chand() {
   let chaand = Math.ceil(Math.random()*2) 
if (chaand===1) {
resnum.innerHTML = chaand
    reesult.innerHTML = "YOU WIN"
console.log(chaand);
pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tw4hcmRWSf0AqckqAr5MGn_zSvPaiS5PWPUo1VBPIyv9mO_vWqXRzIRDgR1L4WEvon0&usqp=CAU"
         count++
         score++
         count1.innerHTML=`Attempt Count : ${count}`
         score1.innerHTML=`Score : ${score}`
}else {
    resnum.innerHTML = chaand
    console.log(chaand);
    reesult.innerHTML = "YOU LOOSE"
    pic.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
    count++
    count1.innerHTML=`Attempt Count : ${count}`
     score1.innerHTML=`Score : ${score}`
}

}
// chnd 
// masj 
function masjid() {
let maasjid = Math.ceil(Math.random()*2)
    if (maasjid===2) {
          resnum.innerHTML = maasjid
          reesult.innerHTML = "YOU WIN"
         console.log(maasjid);
        pic.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
        count++
        score++
        count1.innerHTML=`Attempt Count : ${count}`
        score1.innerHTML=`Score : ${score}`
    } else {
          resnum.innerHTML = maasjid
          reesult.innerHTML = "YOU LOOSE"
         console.log(maasjid);
        pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tw4hcmRWSf0AqckqAr5MGn_zSvPaiS5PWPUo1VBPIyv9mO_vWqXRzIRDgR1L4WEvon0&usqp=CAU"
        count++
        count1.innerHTML=`Attempt Count : ${count}`
         score1.innerHTML=`Score : ${score}`
    }
}
// masj 
// style

// num style
resnum.style.textAlign= "center";
resnum.style.color = "blueviolet";
resnum.style.backgroundColor= "aqua";
paddingTop = resnum.style.paddingTop = "5px";
paddingRight = resnum.style.paddingRight = "5px";
paddingBottom = resnum.style.paddingBottom = "5px";
paddingLeft = resnum.style.paddingLeft = "5px";
// num style

// image style 
pic.style.display = 'block';
pic.style.margin = 'auto';

// Image style 


// rees style
paddingTop = reesult.style.paddingTop = "5px";
paddingRight = reesult.style.paddingRight = "5px";
paddingBottom = reesult.style.paddingBottom = "5px";
paddingLeft = reesult.style.paddingLeft = "5px";
reesult.style.textAlign = "center";
reesult.style.color = "blueviolet";
reesult.style.backgroundColor = "aqua";
// ree style 


// head style 
your.style.color = "white"
your.style.backgroundColor ="#000"
paddingTop = head.style.paddingTop = "5px";
paddingRight = head.style.paddingRight = "5px";
paddingBottom = head.style.paddingBottom = "5px";
paddingLeft = head.style.paddingLeft = "5px";
head.style.textAlign = "center";
head.style.backgroundColor = "#000";
head.style.color = "white";
// // head style

// btn style 
btns1.style.transform = 'scale(1.5)'; // increase size by 50%
btns1.style.backgroundColor = "#000";
btns1.style.color = "white";

// btn2
btns2.style.backgroundColor = "#000";
btns2.style.color = "white";
btns2.style.transform = 'scale(1.5)'; // increase size by 50%
// btns style 
// attscore 
let div = document.getElementById('scores');
div.style.border = '5px solid #000'; /* add a 1px solid black border */
div.style.padding = '10px'; /* add 10px padding to the div */
div.style.backgroundColor = "#000";
div.style.color = "white";
div.style.fontSize = '24px'; /* increase font size to 24px */

// attscore 