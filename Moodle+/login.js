console.log("Moodle+ successfully loaded!");

const login_element = document.getElementById("login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;
let questio = login_text.split(" "); // Use split and array operations on the login_text string to extract the question
let ans = 0;
let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
let lt1 = (questio.length);
let question = [''];
//console.log(questio);
for (let i=0;i<lt1;i++){
    if (questio[i]=='='){
        question.push(questio[i]);
        break;
    }
    else{
        question.push(questio[i]);
    }
}
//console.log(question);
let lt = question.length;

if (question.indexOf("add")!=-1){
    let n1 = Number(question[lt-2]);
    let n2 = Number(question[lt-4]);
    ans = n1 + n2;
}
else{
    if (question.indexOf("subtract")!=-1){
        let n1 = Number(question[lt-2]);
        let n2 = Number(question[lt-4]);
        ans = n2 - n1;
    }
    else{
        if (question.indexOf("second")!=-1){
            ans = Number(question[lt-2]);
        }
        else{
            ans = Number(question[lt-4]);
        }
    }
}
answer = ans.toString();

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
const user = document.querySelector("#username");
const pass = document.querySelector("#password");
user.value = "XXXXX";
pass.value = "XXXXXX";
captcha_input_element.value = answer;
document.querySelector("#loginbtn").click();    


