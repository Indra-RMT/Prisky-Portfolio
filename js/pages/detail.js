import {portfolioData, getDataPortfolioBySlug} from '../data/portfolioData.js';

export const initDetailPage = (slug) => {
  const portfolioDetail = getDataPortfolioBySlug(portfolioData, slug);

  const mainWrapper = document.querySelector('#main');
  let htmlDetail = '';
  let htmlImage = `<img src="../../public/img/${portfolioDetail.image}" alt="${portfolioDetail.name}"/>`;
  const htmlTitle = `<div class="detail-title">
    <h3>${portfolioDetail.name}</h3>
  </div>`;
  const htmlText = `<div class="detail-text">
    <p>${portfolioDetail.text}</p>
  </div>`

  if (slug === 'angel-skin-clinic') htmlImage = ''

  htmlDetail = htmlImage + htmlTitle + htmlText;

  mainWrapper.innerHTML = htmlDetail;
}