k*=e
// 3-hour timer
const totalTime = 3 * 60 * 60; // 3 hours in seconds
let timeLeft = totalTime;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    const fill = document.getElementById("timerFill");
    const text = document.getElementById("timerText");

    const timerInterval = setInterval(() => {
        timeLeft--;
        const percent = (timeLeft / totalTime) * 100;
        fill.style.width = `${percent}%`;
        text.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            text.textContent = "Time's up!";
            document.getElementById("submit").click(); // Auto-submit
        }
    }, 1000);
}


const quizzes=[
    {
        topic:'Test 1',
        images:["Data types/picture 7.png","Data types/picture 6.png","Data types/picture 5.png","Data types/picture 4.png","Data types/picture 3.png","Data types/picture 2.png","Data types/picture 1.png","Data types/picture 0.png"],
        questions:["1.Enter answer - All LOWER CASE [6 marks]","2.What is the output? [2 marks]","3.What is the output? [2 marks]","4.Is this code going to run?(yes or no) [2 marks]","5.What is the output of this ?(none/Hello world) [2 marks]","6.Enter output. [2 marks]","7.What should be the data type of v? [2 Marks]","8.Enter output. [2 Marks]"],
        answers:["1.bool,2.modulus,3.int,4.2","Sure","Sharp","no","none","1","string","Alright cool"]
    },
]

var track=0;
var trak;
let marks=0;
document.getElementById(`topic1`).onclick=function(){
    document.getElementById("topics").classList.add("hide");
    document.getElementById("quizContent").classList.remove('hide');
    startTimer();
    let topic=document.getElementById(`topic1`).innerHTML;
    document.getElementById("title").textContent=topic;
    for(var j=0;j<quizzes.length;j++){
        if(quizzes[j].topic==topic){
            //quiz must start now
            trak=j;
            document.getElementById("image").src=quizzes[j].images[track];
            document.getElementById("questions").textContent=quizzes[j].questions[track];
            break;
        }

    }
}

document.getElementById("next").onclick=function(){
    if(quizzes[trak].answers[track]===document.getElementById("userInput").value){
        if(track===0){
            marks+=6;
        }
        else{
             marks+=2;
        }
        console.log('Correct!');
    }
    else{
        
        console.log('Wrong !!');
    }
    track+=1;
    if(track==quizzes[trak].images.length-1){
        document.getElementById("next").classList.add("hide");
        document.getElementById("submit").classList.remove("hide");
    }
    document.getElementById("image").src=quizzes[trak].images[track];
    document.getElementById("questions").textContent=quizzes[trak].questions[track];
    document.getElementById("userInput").value='';
}
document.getElementById("submit").onclick=function(){
    if(quizzes[trak].answers[track]==document.getElementById("userInput").value){
        marks+=2;
        console.log('Correct!');
    }
    else{
        
        console.log('Wrong !!');
    }
    document.getElementById("submit").classList.add("hide");
    document.getElementById("quizContent").classList.add('hide');
    document.getElementById("marks").textContent=`You got ${marks}/20`;
    if(marks>=16){
        document.getElementById("marksDiv").classList.add("distinction");
    }
    if(marks>=10 && marks<16){
        document.getElementById("marksDiv").classList.add("justPass");
    }
    if(marks<10){
        document.getElementById("marksDiv").classList.add("fail");
    }
    document.getElementById("marksDiv").classList.remove("hide");
    document.getElementById("continue").classList.remove("hide");
}
function Continue(){
    document.getElementById("marksDiv").classList.add("hide");
    document.getElementById("continue").classList.add("hide");
    document.getElementById("secA").textContent=`Section A : ${marks} marks obtained`;
    document.getElementById("secA").classList.remove("hide");
    document.getElementById("sectionBpdf").classList.remove("hide");
    document.getElementById("secBhead").classList.remove("hide");
}
