// get current date
const days = ["Sun", "Mon","Tue","Wed","Thu","Fri"];
let todaydate = document.querySelector(".hello .date span");
let thecurrentdate = new Date().toLocaleDateString("es-CL")
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
currday = date.getDay();
for (let i = 0; i < days.length; i++) {
        if (i == currday) {
                todaydate.innerHTML = `${days[i]} ${thecurrentdate}`
        }
}
// start course-progress
let progs = document.querySelectorAll(".course-progress span");
let precs = document.querySelectorAll(".prec .num");
let index = 0;
progs.forEach(prog => {
        prog.style.width = prog.dataset.width;
        precs[index].innerHTML = prog.dataset.width
        index++;
});
// end course-progress

//start dynamic calender
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";
        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
                liTag += `<td class="inactive">${lastDateofLastMonth - i + 1}</td>`;
        }
        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isEvent = (i === 28 || i === 30 || i === 20) ? "active" : "";
        liTag += `<td class="${isEvent}">${i}</td>`;
        }
        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<td class="inactive">${i - lastDayofMonth + 1}</td>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
        // Start dynamic schedule
        let schedule = document.querySelector(".schedule");
        let allschedule = document.querySelector(".all-schedule");
        let nodata = document.querySelector(".schedule .no-data");
        let Alldays = document.querySelectorAll(".days td");
        function Schesulemonth() {
                Alldays.forEach(element => {
                        if (element.classList.contains("active")) {
                                nodata.style.display="none";
                                let container = document.createElement("div");
                                container.setAttribute("class","container")
                                allschedule.appendChild(container);
                                if (element.innerHTML < date.getDate()) {
                                        let overlay = document.createElement("div");
                                        overlay.setAttribute("class","overlay")
                                        container.appendChild(overlay);
                                }
                                let icon = document.createElement("i");
                                icon.setAttribute("class","fa-solid fa-hourglass-half")
                                container.appendChild(icon);
                                let content = document.createElement("div");
                                content.setAttribute("class","sched-contant")
                                container.appendChild(content);
                                let eventname = document.createElement("p");
                                eventname.innerHTML = "Assignment Digital course";
                                content.appendChild(eventname);
                                let eventdate = document.createElement("p");
                                eventdate.setAttribute("class","date")
                                content.appendChild(eventdate);
                                eventdate.innerHTML = `${element.innerHTML} / ${currMonth+1} / ${currYear}`
                        }
                });
        }
        Schesulemonth();
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth);
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
        } else {
                date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
        });
});
//end dynamic calender

//start courses
let coursesdiv = document.querySelector(".courses");
let coursescats = ["enroll","watchlater","view","recommend","enroll","enroll"];
let imgcourses = ["enroll1.jpg","enroll2.jpg","enroll3.jpg","enroll4.jpg","enroll5.jpg","enroll6.jpg"];
for (let i = 0; i < imgcourses.length; i++) {
        let container = document.createElement("div");
        container.setAttribute("class","container d-flex");
        coursesdiv.appendChild(container);
        
        let boxleft = document.createElement("div");
        boxleft.setAttribute("class","box-left d-flex");
        container.appendChild(boxleft);
        
        let imgcourse = document.createElement("img");
        imgcourse.setAttribute("src",`images/${imgcourses[i]}`)
        boxleft.appendChild(imgcourse);

        let coursecontant = document.createElement("div");
        coursecontant.setAttribute("class","course-contant")
        boxleft.appendChild(coursecontant);

        let Coursename = document.createElement("p");
        Coursename.innerHTML = "Course name";
        coursecontant.appendChild(Coursename);

        let Coursecat = document.createElement("p");
        Coursecat.innerHTML = "Course Category";
        coursecontant.appendChild(Coursecat);
        
        let boxright = document.createElement("div");
        boxright.setAttribute("class","box-right d-flex");
        container.appendChild(boxright);    

        let divstar = document.createElement("div");
        divstar.setAttribute("class","star d-flex");
        boxright.appendChild(divstar);    

        let staricon = document.createElement("i");
        staricon.setAttribute("class","fa-solid fa-star");
        divstar.appendChild(staricon); 

        let starnum = document.createElement("p");
        starnum.innerHTML = "4.3";
        divstar.appendChild(starnum);    
        
        let buttonview = document.createElement("button");
        buttonview.innerHTML = "View Course";
        buttonview.setAttribute("type","button");
        boxright.appendChild(buttonview);  
}
let coursecontainer = document.querySelectorAll(".courses .container");
let j = 0;
coursecontainer.forEach(element => {
        element.setAttribute("id",coursescats[j]);
        j++;
});

let coursescat = document.querySelectorAll(".courses-categories ul li");
coursescat.forEach(licat => { // getting prev and next icons
        licat.addEventListener("click", () => { // adding click event on both icons
                coursescat.forEach(element => {
                        element.classList.remove("active");
                });
                licat.classList.add("active");
                coursecontainer.forEach(element => {
                        if (licat.id == "All"){
                                element.style.display = "flex";
                        }
                        else if (licat.id !== element.getAttribute("id")) {
                                element.style.display = "none";
                        }
                        else{
                                element.style.display = "flex";
                        }
                });
        // licat.id === "enroll" ? currMonth - 1 : currMonth + 1;
        });
});
//end courses

// start menu
let menubtn = document.querySelector(".courses-categories i");
let menulinks = document.querySelector(".courses-categories ul");
menubtn.onclick = function () {
        menulinks.classList.toggle("open");
        menubtn.classList.toggle("up")
}
document.addEventListener("click", function (e) {
    //incase i clicked anywhere excpt the menu or the links close the menu.
        if (e.target !== menubtn && e.target !== menulinks) {
        if (menulinks.classList.contains("open")) {
                menulinks.classList.toggle("open");
                menubtn.classList.toggle("up")
        }
        // menulinks.classList.remove("open");
        // menubtn.classList.remove("up");
        }
});
menulinks.onclick = function (e) {
    //prevents the first child element inside ul from doing click event.
        e.stopPropagation();
}
// end menu
// start controls
let lastbox = document.querySelectorAll(".last-container .container")
let boxnames = document.querySelectorAll(".last-container .container h3")
function displaycontrols(boxnames) {
        boxnames.forEach(boxname => {
                if (window.localStorage.getItem(boxname.innerHTML) === "Yes") {
                        boxname.parentElement.parentElement.style.display = "block";
                }
                else{
                        boxname.parentElement.parentElement.style.display = "none";
                }
        });

}
displaycontrols(boxnames) ;
// end controls