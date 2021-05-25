/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
    	toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

/*===== CHANGE BACKGROUND HEADER=====*/

function scrollHeader(){
	const nav=document.getElementById('header');

	if (this.scrollY>=200) 
		nav.classList.add('scroll-header')
	else
		nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);




/*===== SCROLL TO TOP=====*/

function scrollTop(){
	const scrollTop=document.getElementById('scroll-top');

	if (this.scrollY>=560) 
		scrollTop.classList.add('show-scroll')
	else
		scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop);


/*================================DARK LIGHT THEME===============================*/

const themeButton=document.getElementById('theme-button');
const darkTheme='dark-theme';
const iconTheme='bx-sun'


//previously selected topic(if user selected)

const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon=localStorage.getItem('selected-icon');

//get the current theme

const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light';

const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'bx-moon':'bx-sun';

//we validate if user choose theme

if (selectedTheme) {
	//we want to know if we aactivated or deactivated the dark theme
	document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
	themeButton.classList[selectedIcon==='bx-moon'?'add':'remove'](iconTheme)

}

/*==========================ACTIVATE/DEACTIVATE THE THEME MANUALLY==========================*/

themeButton.addEventListener('click', (e)=>{
	//add or remove icon dark button
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	//we save the theme user currently choose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==========================SCROLL REVEALL ANIMATION==========================*/

const sr=ScrollReveal({

	origin:'top',
	distance:'30px',
	duration:200,
	reset:true,

});

sr.reveal(`.home__data, .home__img,
	.about__data, 
	.about__img, .services__content,
	.menu__content, 
	.app__data, .app__img, .contact__data,
	.contact__button, .footer__content`,{

		interval:300
	})