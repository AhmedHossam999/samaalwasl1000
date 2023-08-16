
//  navigation menu bar
const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
window.onscroll = () => {
    menubtn.classList.remove("active");
    navigation.classList.remove('active');
}
document.onclick = function (e) {
    if (!menu - btn.contains(e.target) && !navigation.contains(e.target)) {
        menubtn.classList.remove("active");
        navigation.classList.remove('active');
    }
}

// navigation bar effects on scroll

window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



// let arabic = document.getElementById("arabic");

// let english = document.getElementById("english");
// let nav = document.getElementById("nav");
// arabic.onclick = () => {
//     setlanugage("arabic");
// };

// english.onclick = () => {
//     setlanugage("english");
// };

// function setlanugage(getlanugage) {
//     if (getlanugage === "arabic") {
//         nav.innerHTML = "الرئيسه";
//     } else if (getlanugage === "english") {
//         nav.innerHTML = "home";
//     }

// }