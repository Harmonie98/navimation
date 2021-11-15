const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });


}

navSlide();


function ywk() {
    document.getElementById("nyk").style.display = "block";
}


function changeHeading(){
	var heading = document.getElementById('heading');
	heading.innerHTML = "Heading Changed";

}

function changeBgc(){
	var body = document.querySelector('body');
	body.style.background = "grey";
};

function normalBgc(){
	var body = document.querySelector('body');
	body.style.background = "";
};

