//we can do it in two way

// lets select the items

const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

//we can do it in if else condition

// toggleBtn.addEventListener("click", function () {
//     if (links.classList.contains("show-links")) {
//         links.classList.remove("show-links");
//     }

//     else {
//         links.classList.add("show-links")
//     }


// });

// and we can do it easyly with toggle 

toggleBtn.addEventListener("click", function () {
    links.classList.toggle("show-links");
});