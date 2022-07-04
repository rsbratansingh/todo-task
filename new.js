let emailId = document.getElementById("email");
let password = document.getElementById("pass");
let login = document.getElementById("login");
let visible = document.getElementById("visible");
let hide = document.getElementById("hide1");
hide.style.display = "none";
let hide2 = document.getElementById("hide2");
hide2.style.display = "none";
let hideall = document.getElementsByClassName("container");
let page = document.getElementById("page");
let emailvalue = ["ratanrsb2002@gmail.com", "abc123@gmail.com", "rahul123@gmail.com"];
let passvalue = ["123456", "2", "3"];
login.addEventListener("click", function (event) {
    event.preventDefault();
    emailvalue.forEach((value1, index1) => {
        passvalue.forEach((value2, index2) => {
            if (emailId.value == emailvalue[`${index1}`] && password.value == passvalue[`${index2}`]) {
                // console.log('Very Good');
                let a = index1;
                emailId.value = ""; password.value = "";
                visible.style.display = "none";
                hide.style.display = "block";
                hide2.style.display = "block";
                showTask(a);
            }
            else {
                console.log('Please enter correct Email and Password');
            }
        });
    });
});
let addtaskInput = document.getElementById("task");
let addtaskbtn = document.getElementById("add");
// window.onload = load;
// function load() {
//     showTask();
// }
// addtaskbtn.addEventListener("click", function(){return addtask(a)});

// addtaskbtn.addEventListener("click", addtask(a));
// addtaskbtn.addEventListener("click", addtask(index));
// function addtask(a) {
//     if (addtaskInput.value == "") { alert("Please Enter some task...") }
//     else {
//         var userArr = `user${a}`;
//         let addtaskInputVal = addtaskInput.value;
//         addtaskInput.value = "";
//         let webtask = localStorage.getItem(userArr);
//         if (webtask == null) {
//             taskobj = [];
//         }
//         else {
//             taskobj = JSON.parse(webtask);
//         }
//         taskobj.push(addtaskInputVal);
//         localStorage.setItem(userArr, JSON.stringify(taskobj));
//         showTask(a);
//     }
// }
// addtaskbtn.addEventListener("click", (index) => {
// console.log('hello');

// }

// });
// window.location.reload(); // it will reload/refresh the page
function showTask(index) {
    var userArr = `user${index}`;
    var a = index;
    let webtask = localStorage.getItem(userArr);
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
    }
    let addtaskInput = document.getElementById("task");
    let addtaskbtn = document.getElementById("add");
    addtaskbtn.addEventListener("click", (event) => {
        // addtaskbtn.addEventListener("click", function () { addtask(a); });
        event.preventDefault();
        if (addtaskInput.value == "") {
            // alert("Please Enter some task...") 
            let addtaskInputVal = addtaskInput.value;
            taskobj.pop(addtaskInputVal);
            localStorage.setItem(userArr, JSON.stringify(taskobj));
        }
        else {
            var userArr = `user${a}`;
            let addtaskInputVal = addtaskInput.value;
            let webtask = localStorage.getItem(userArr);
            if (webtask == null) {
                taskobj = [];
            }
            else {
                taskobj = JSON.parse(webtask);
            }
            taskobj.push(addtaskInputVal);
            localStorage.setItem(userArr, JSON.stringify(taskobj));
            showTask(a);
            addtaskInput.value = "";
        }
    });
    let element = document.getElementById("new-list");
    element.innerHTML = "";
    taskobj.forEach(function (value, ind) {
        let contain = document.createElement("form");
        contain.classList.add("formcls");
        contain.index = `${ind + 1}`;
        const newItm = document.createElement("input");
        let btn = document.createElement("button");
        let btn2 = document.createElement("button");
        newItm.classList.add("newItem");
        newItm.value = `${value}`;
        newItm.setAttribute("readonly", "readonly");
        btn.classList.add("del");
        btn.textContent = "DELETE";
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            // let userArr = `user${index}`;
            let webtask = localStorage.getItem(userArr);
            let taskobj = JSON.parse(webtask);
            taskobj.splice(ind, 1);
            localStorage.setItem(userArr, JSON.stringify(taskobj));
            element.removeChild(contain);
        });
        btn2.textContent = "EDIT";
        btn2.classList.add("edit");
        btn2.addEventListener("click", (event) => {
            event.preventDefault();
            if (btn2.innerText == "EDIT") {
                let webtask = localStorage.getItem(userArr);
                let taskobj = JSON.parse(webtask);
                newItm.value = taskobj[ind];
                btn2.style.color = "green";
                newItm.removeAttribute("readonly");
                newItm.focus();
                btn2.innerText = "SAVE";
            }
            else {
                btn2.innerText = "EDIT";
                btn2.style.color = "#364cec";
                taskobj[ind] = newItm.value;
                localStorage.setItem(userArr, JSON.stringify(taskobj));
                newItm.setAttribute("readonly", "readonly");
            }
        });
        contain.appendChild(newItm);
        contain.appendChild(btn2);
        contain.appendChild(btn);
        element.appendChild(contain);
        let deleteAll = document.getElementById("clr");
        deleteAll.addEventListener("click", (event) => {
            event.preventDefault();
            // let userArr = `user${index}`;
            let webtask = localStorage.getItem(userArr);
            let taskobj = JSON.parse(webtask);
            while (ind >= 0) {
                element.removeChild(contain);
                ind--;
            }
            taskobj = [];
            localStorage.setItem(userArr, JSON.stringify(taskobj));
        });
    });
}
