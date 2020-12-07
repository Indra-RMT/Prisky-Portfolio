import {
  portfolioData,
  dataStudyCase,
  dataMobile,
  dataWeb
} from '../data/portfolioData.js';

const resetActiveCategory = () => {
  document.querySelectorAll('.show-category li')
		.forEach((elm) => {
			elm.classList.remove('active');
		});
}

const selectCategory = (category) => {
  resetActiveCategory();
  const selectedCategory = document.querySelector(`#${category}`);
  selectedCategory.classList.add("active");
}

const setPortfolioList = (portfolioList) => {
  const listWrapper = document.querySelector('#homeContent');
  const htmlList = portfolioList.map(list => {
    return `<img src="../../public/img/${list.image}">`
  }).join('');
  listWrapper.innerHTML = htmlList;
}

const categoryAllClickedHandler = () => {
  selectCategory('categoryAll');
  setPortfolioList(portfolioData);
}

const categoryStudyCaseClickedHandler = () => {
  selectCategory('categoryStudyCase');
  const portfolioList = dataStudyCase(portfolioData);
  setPortfolioList(portfolioList);
}

const categoryMobileClickedHandler = () => {
  selectCategory('categoryMobile');
  const portfolioList = dataMobile(portfolioData);
  setPortfolioList(portfolioList);
}

const categoryWebClickedHandler = () => {
  selectCategory('categoryWeb');
  const portfolioList = dataWeb(portfolioData);
  setPortfolioList(portfolioList);
}

export const initHomePage = () => {
  setPortfolioList(portfolioData);
}

window.clickedCategoryAll = categoryAllClickedHandler;
window.clickedCategoryStudyCase = categoryStudyCaseClickedHandler;
window.clickedCategoryMobile = categoryMobileClickedHandler;
window.clickedCategoryWeb = categoryWebClickedHandler;

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('main')
// })