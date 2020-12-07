export const portfolioData = [
  {
    slug: 'angel',
    name: 'ui/ux',
    image: 'angel.png',
    category: 'study case'
  },
  {
    slug: 'workout',
    name: 'workout',
    image: 'workout.jpg',
    category: 'mobile'
  },
  {
    slug: 'stereo',
    name: 'stereo',
    image: 'stereo.jpg',
    category: 'mobile'
  },
  {
    slug: 'league',
    name: 'league',
    image: 'league.jpg',
    category: 'mobile'
  },
  {
    slug: 'course',
    name: 'course',
    image: 'course.jpg',
    category: 'mobile'
  },
  {
    slug: 'cinemax',
    name: 'cinemax',
    image: 'cinemax.jpg',
    category: 'mobile'
  },
  {
    slug: 'botanica',
    name: 'botanica',
    image: 'botanica.jpg',
    category: 'web'
  },
]

export const dataStudyCase = (portfolioData) => {
  return portfolioData.filter(function (el) {
    return el.category === 'study case';
  });
}

export const dataMobile = (portfolioData) => {
  return portfolioData.filter(function (el) {
    return el.category === 'mobile';
  });
}

export const dataWeb = (portfolioData) => {
  return portfolioData.filter(function (el) {
    return el.category === 'web';
  });
}

export const getDataPortfolioBySlug = (portfolioData, slug) => {
  return portfolioData.filter(function (el) {
    return el.slug === slug;
  })[0];
}