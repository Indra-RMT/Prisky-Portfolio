document.addEventListener('DOMContentLoaded', function(){

	// const loadHeader = () => {
	// 	var xhttp = new XMLHttpRequest();
	// 	xhttp.onreadystatechange = function() {
	// 		if (this.readyState == 4){
	// 			var content = document.querySelector("#header");
	// 			if(this.status == 200) {
	// 				content.innerHTML = xhttp.responseText;
	// 			}
	// 		}
	// 	};
	// 	xhttp.open("GET", 'header.html', true);
	// 	xhttp.send();
	// }

	const setNavItemActive = (active) => {
		document.querySelectorAll('nav li')
			.forEach((elm) => {
				elm.classList.remove('active');
			});

		const currentPage = `.nav-${active.replace(/\//g, '')}`;
		const selectedNavItem = document.querySelector(currentPage);
		if (selectedNavItem) selectedNavItem.classList.add("active");
	}

	const loadPage = (page) => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4){
				var content = document.querySelector("#main");
				if(this.status == 200) {
					content.innerHTML = xhttp.responseText;
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
	
	// Load page content
	let currentPage = window.location.hash.substr(1);
	if(currentPage == '') currentPage = 'home';
	loadPage(currentPage);
	// loadHeader()

	document.querySelectorAll('nav a')
	.forEach((elm) => {
		elm.addEventListener('click', (event) => {
			const selectedPage = event.target.getAttribute('href').substr(1);
			loadPage(selectedPage);
		});
	});
});
