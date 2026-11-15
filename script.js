// MOBILE NAVIGATION

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("bx-x");

});


// CLOSE MENU WHEN A LINK IS CLICKED

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

    });

});


// CONTACT FORM

const contactForm = document.querySelector("#contact-form");

contactForm.addEv    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

    });

});


// CONTACT FORM

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Thank you for contacting Sa'adatu!");

    contactForm.reset();

});