import {portfolioData, getDataPortfolioBySlug} from '../data/portfolioData.js';

export const initDetailPage = (slug) => {
  const portfolioDetail = getDataPortfolioBySlug(portfolioData, slug);
  console.log(portfolioDetail);

  const mainWrapper = document.querySelector('#main');
  let htmlDetail = '';
  const htmlImage = `<img src="../../public/img/${portfolioDetail.image}" alt="${portfolioDetail.name}"/>`;
  const htmlTitle = `<div class="detail-title">
    <h3>${portfolioDetail.name}</h3>
  </div>`;
  const htmlText = `<div class="detail-text">
    <p>${portfolioDetail.text}</p>
  </div>`

  htmlDetail = htmlImage + htmlTitle + htmlText;

  mainWrapper.innerHTML = htmlDetail;
}