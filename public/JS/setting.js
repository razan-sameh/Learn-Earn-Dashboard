//start account
let accinput = document.querySelectorAll(".account .container input");
let accbtn = document.querySelector(".account .container button");
let f_name = document.querySelector(".account .f-name input");
let l_name = document.querySelector(".account .l-name input");
let email = document.querySelector(".account .email input");
accbtn.onclick = function () {
    accbtn.classList.toggle("active");
    if (accbtn.classList.contains("active")) {
        accbtn.innerHTML = "Save";
        accinput.forEach(input => {
            input.removeAttribute("disabled");
        });
    }
    else {
        accbtn.innerHTML = "Change";
        accinput.forEach(input => {
        input.setAttribute("disabled","");
        });
        window.localStorage.firstname = f_name.value;
        window.localStorage.lastname = l_name.value;
        window.localStorage.email = email.value;
    }
}
f_name.value = window.localStorage.getItem("firstname");
l_name.value = window.localStorage.getItem("lastname");
email.value = window.localStorage.getItem("email");
//end account
//start password
let passbtn = document.querySelector(".security .password button");
let passchange = document.querySelector(".security .password .change");
let savedate = document.querySelector(".security .password .savedate");
passbtn.onclick = function () {
    passbtn.classList.toggle("active");
    if (passbtn.classList.contains("active")) {
        passbtn.innerHTML = "Save";
        passchange.style.display = "block";
        let thesavedate = new Date().toLocaleDateString("es-CL")
        savedate.innerHTML = thesavedate;
        window.localStorage.savedate = savedate.innerHTML;
    }
    else{
        passbtn.innerHTML = "Change";
        passchange.style.display = "none";
    }
}
savedate.innerHTML = window.localStorage.getItem("savedate"); 
//end password
// start verify
let verifybox = document.querySelector(".security .Verify .Check");
let verifybtn = document.querySelector(".security .Verify i");
let statu = document.querySelector(".security .Verify .statu");
verifybtn.onclick = function () {
    verifybtn.classList.toggle("active");
    verifybox.classList.toggle("active");
    if (verifybtn.classList.contains("active")) {
        statu.innerHTML = "On";
    }
    else{
        statu.innerHTML = "Off";
    }
    window.localStorage.verifyStatu = statu.innerHTML;
}
if (window.localStorage.getItem("verifyStatu") === "On") {
    verifybtn.classList.add("active");
    verifybox.classList.add("active");
    statu.innerHTML = window.localStorage.getItem("verifyStatu");
}
else{
    verifybtn.classList.remove("active");
    verifybox.classList.remove("active");
    statu.innerHTML = window.localStorage.getItem("verifyStatu");
}
// end verify
// start controls
let srchinput = document.querySelector(".control .srch input");
let srchlabel = document.querySelector(".control .srch label");
let Uploadinput = document.querySelector(".control .Up input");
let Uploadlabel = document.querySelector(".control .Up label");
let Assinput = document.querySelector(".control .ass input");
let Asslabel = document.querySelector(".control .ass label");
function inputchecks(input , label) {
    input.setAttribute("checked","");
    input.onclick = function() {
        if (!(input.hasAttribute("checked"))) {
            input.setAttribute("checked","");
        }
        else{
            input.removeAttribute("checked");
        }
        if (input.hasAttribute("checked")) {
            window.localStorage.setItem(label.innerHTML,"Yes");
        }
        else{
            window.localStorage.setItem(label.innerHTML,"No");
        }
    }
}
inputchecks(srchinput, srchlabel);
inputchecks(Uploadinput, Uploadlabel);
inputchecks(Assinput, Asslabel);
function isinputchecked(input , label) {
        if (window.localStorage.getItem(label.innerHTML) === "Yes") {
            input.setAttribute("checked","");
        }
        else{
            input.removeAttribute("checked");
        }
}
isinputchecked(srchinput, srchlabel);
isinputchecked(Uploadinput, Uploadlabel);
isinputchecked(Assinput, Asslabel);
// end controls