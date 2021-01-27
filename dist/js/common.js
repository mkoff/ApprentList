var missionElement = document.querySelectorAll('.mission ul li'),
menuNav = document.getElementById('nav'),
menuButton = document.getElementById('showNav'),
findAnApprenticeship = document.getElementById('findAnApprenticeship'),
findTalent = document.getElementById('findTalent'),
finalTouches = document.getElementById('finalTouches'),
selectApprentType = document.getElementById('selectApprentType');

var textForFinalTouches = {
	apprenticeship: 'Hello! We are thrilled that you want to join our tech apprenticeships. Currently apprenticeship slots are full. We have a wait-list for the next intake soon. If you’d like to be added to the wait-list to join our next intake, just add your email above, we will send you a reminder',
	talent: 'Hello, We are putting final touches to start matching our partners  with the brightest emerging diverse tech talent.  We have a wait-list for partners, If you want to be notified when the matching is open,  just add your email above, we will send you a reminder.'
}

findAnApprenticeship.addEventListener('click', function(){
	finalTouches.textContent = textForFinalTouches.apprenticeship;
	finalTouches.style.border = '1px solid #009ac0';
});

findTalent.addEventListener('click', function(){
	finalTouches.textContent = textForFinalTouches.talent;
	finalTouches.style.border = '1px solid #009ac0';
	selectApprentType.value = 'find-talent';
});


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