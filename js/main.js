document.addEventListener('DOMContentLoaded', function(){
	// Nav toggle for small screens
	const navToggle = document.getElementById('nav-toggle');
	const siteNav = document.getElementById('site-nav');
	navToggle && navToggle.addEventListener('click', function(){
		if(!siteNav) return;
		const visible = siteNav.style.display === 'block';
		siteNav.style.display = visible ? '' : 'block';
	});

	// Set current year in footer
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const href = this.getAttribute('href');
			if(href === '#') return;
			const target = document.querySelector(href);
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth',block:'start'});
				// close nav on mobile
				if(window.innerWidth <= 720 && siteNav) siteNav.style.display = '';
			}
		});
	});
});

