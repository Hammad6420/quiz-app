


var count = 0;
var qs;
var option;
var optionList='';

function ques(count){
    // empty html for new qs 
    optionList='';
    // make new qs
qs = document.getElementById('quiz-qs');
qs = qs.innerHTML = questions[count].q;
// options
option = document.getElementById('quiz-opt');
optionLength =  questions[count].options.length;
for (let index = 0; index < optionLength; index++) {  
  optionList  += `
    <div class="opt" ><input    onclick='check(this)'  type="radio" name="${index}" id="${index}"><label  for="${index}" class="opt">${questions[count].options[index]}</label></div>
    `  
    option.innerHTML =  optionList;
}
}








var oldCheck=0;
function check(e){
    // assign
    newCheck = e;
    // remove old check
if (oldCheck != newCheck) {
    if (oldCheck.checked == true) {
        oldCheck.checked = false;    
    }
}
    

    // save old
    oldCheck = newCheck;
}










var result = 0;
function resultCalc(){
     // result calc
     if (oldCheck == '' ) {
  alert('SELECT ATLEAST ONE OPTION') 
       }
     if (oldCheck.nextSibling.innerText == questions[count].correct ) {
    result=1+result;
    window.localStorage.setItem('Result',result)  
    count = count + 1; 
}else if (oldCheck.nextSibling.innerText != questions[count].correct) {
    result = result + 0;
    count = count + 1;    
}

// new qs
if (count<questions.length) {
    ques(count)
}

// renew
oldCheck = '';

// change button
if (count > questions.length-2) {
    document.getElementById('next').innerHTML = 'SUBMIT'
}

// end
if (count == questions.length-1) {
    resultPage =  `
    <a href="submit.html"><button id="next" onclick="resultCalc()" class="next">SUBMIT</button></a>
    `
    resultPage = document.getElementById('btn').innerHTML = resultPage;
    console.log('done')
            }

}

function marks(){
    document.getElementById('marks').innerHTML += localStorage.Result; 
}
sec=60;min=4;
function timer(){
sec=sec-1;
if (sec == 0) {
    min=min-1;
    sec=60;
}
if (min==0) {
    window.location.href = 'submit.html'
}
document.getElementById('time').innerHTML = 'TIME LEFT : ' + min + ' min ' + sec + ' sec';
}

setInterval(timer,1000)