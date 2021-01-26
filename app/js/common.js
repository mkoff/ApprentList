var missionElement = document.querySelectorAll('.mission ul li');
var menuNav = document.getElementById('nav');
var menuButton = document.getElementById('showNav');

function getOpacity(value, time){
	setTimeout(function (){
		missionElement[value].style.opacity = "1";
	},time);
}

var toggleMenu = true;
menuButton.addEventListener('click', function(){
	toggleMenu ? menuNav.style.display = "block" 
				: menuNav.style.display = "none";
	toggleMenu = !toggleMenu;
});

getOpacity(0,500);
getOpacity(2,1500);
getOpacity(1,2500);
getOpacity(3,3500);