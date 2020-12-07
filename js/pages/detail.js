import {portfolioData, getDataPortfolioBySlug} from '../data/portfolioData.js';

export const initDetailPage = (slug) => {
  const portfolioDetail = getDataPortfolioBySlug(portfolioData, slug);
  console.log(portfolioDetail);

  let htmlDetail = '';
  
}