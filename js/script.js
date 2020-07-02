window.onload = function(){
	//mobileMenu
	const headerMenu = document.getElementById('header-menu');
	const headerNav = document.getElementById('nav');
	const navItem = document.getElementsByClassName('navigation__item')
	headerMenu.onclick = function(){
		headerNav.classList.toggle('nav-active');
	};
	for (let i = 0; i < navItem.length; i++){
		navItem[i].onclick = function(){
			headerNav.classList.toggle('nav-active');
		};
	};
	//popup
	const popupBtn = document.getElementsByClassName('popup-btn');
	const popupOverlay = document.getElementById('overlay');
	const popupClose = document.getElementById('popup-close');
	for	(let i = 0; i < popupBtn.length; i++){
		popupBtn[i].onclick = function popupDelay(){
			popupOverlay.style.display = 'block';
			setTimeout(function(){popupOverlay.style.opacity='1'},50);
		};
	};
	popupClose.onclick = function(){
		popupOverlay.style.display = 'none';
		popupOverlay.style.opacity='0';
	};
};
