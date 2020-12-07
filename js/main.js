import {initHomePage} from './pages/home.js';
import {initDetailPage} from './pages/detail.js';

document.addEventListener('DOMContentLoaded', () => {
	const setNavItemActive = (active) => {
		document.querySelectorAll('nav li')
			.forEach((elm) => {
				elm.classList.remove('active');
			});

		const currentPage = `.nav-${active.replace(/\//g, '')}`;
		const selectedNavItem = document.querySelector(currentPage);
		if (selectedNavItem) selectedNavItem.classList.add("active");
	}

	const initPageHandler = (currentPage) => {
		if (currentPage === '/home' || currentPage === 'home') {
			initHomePage();
		}
		if (currentPage === '/detail' || currentPage === 'detail') {
			const detail = location.hash.substr(1).replace(/^\/|\/$/g, '').split("/");
			initDetailPage(detail[1]);
		}
	} 

	const loadPage = (page) => {
		const content = document.querySelector("#main");
		content.innerHTML = 'Loading...';
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4){
				if(this.status == 200) {
					content.innerHTML = xhttp.responseText;
					initPageHandler(page)
				} else if(this.status == 404) {
					content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
				} else {
					content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
				}
			}
		};
		xhttp.open("GET", 'pages/'+page+'.html', true);
		xhttp.send();
		setNavItemActive(page);
	}

	window.onpopstate = () => {
		let url = location.hash.substr(1).replace(/^\/|\/$/g, '').split("/");
		if (url === '' || url === '/') url = 'home';
		loadPage(url[0]);
	};

	let currentPage = location.hash.substr(1).replace(/^\/|\/$/g, '').split("/");
	if(currentPage[0] === '') currentPage[0] = 'home';
	loadPage(currentPage[0]);
});
