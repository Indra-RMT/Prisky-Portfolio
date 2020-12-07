export const portfolioData = [
  {
    id: 1,
    name: 'ui/ux',
    image: 'angel.png',
    category: 'study case'
  },
  {
    id: 2,
    name: 'workout',
    image: 'workout.jpg',
    category: 'mobile'
  },
  {
    id: 3,
    name: 'stereo',
    image: 'stereo.jpg',
    category: 'mobile'
  },
  {
    id: 4,
    name: 'league',
    image: 'league.jpg',
    category: 'mobile'
  },
  {
    id: 5,
    name: 'course',
    image: 'course.jpg',
    category: 'mobile'
  },
  {
    id: 6,
    name: 'cinemax',
    image: 'cinemax.jpg',
    category: 'mobile'
  },
  {
    id: 5,
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