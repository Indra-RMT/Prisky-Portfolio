const resetActiveCategory = () => {
  document.querySelectorAll('.show-category li')
			.forEach((elm) => {
				elm.classList.remove('active');
			});
}

const categoryAllClickedHandler = () => {
  resetActiveCategory();
  const selectedCategory = document.querySelector('#categoryAll');
  selectedCategory.classList.add("active");
}

const categoryStudyCaseClickedHandler = () => {
  resetActiveCategory();
  const selectedCategory = document.querySelector('#categoryStudyCase');
  selectedCategory.classList.add("active");
}

const categoryMobileClickedHandler = () => {
  resetActiveCategory();
  const selectedCategory = document.querySelector('#categoryMobile');
  selectedCategory.classList.add("active");
}

const categoryWebClickedHandler = () => {
  resetActiveCategory();
  const selectedCategory = document.querySelector('#categoryWeb');
  selectedCategory.classList.add("active");
}


window.clickedCategoryAll = categoryAllClickedHandler;
window.clickedCategoryStudyCase = categoryStudyCaseClickedHandler;
window.clickedCategoryMobile = categoryMobileClickedHandler;
window.clickedCategoryWeb = categoryWebClickedHandler;