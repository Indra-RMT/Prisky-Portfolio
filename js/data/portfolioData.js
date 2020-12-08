export const portfolioData = [
  {
    slug: 'angel',
    name: 'ui/ux',
    image: 'angel.png',
    category: 'study case',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    slug: 'onboarding',
    name: 'Onboarding',
    image: 'workout.jpg',
    category: 'mobile',
    text: `
    <p>I'm trying to build a landing page for a sports app. I made this landing page with 3 screens. Then I added the illustration from the freepik which I modified the color and added a little effect to make it look more attractive. The section below the illustration provides information about the sport application. I chose a purplish blue color to make it look cleaner and smoother.</p>

    <p>Tools:<br />
    - Adobe XD</p>`
  },
  {
    slug: 'stereo',
    name: 'Music App (STEREO)',
    image: 'stereo.jpg',
    category: 'mobile',
    text: `
    <p>This is a music application, users can listen to music according to their needs. In this application, there are song recommendations according to the interests of the user. In addition, there are also categories that can help users choose songs according to what the user feels at that time.</p>

    <p>When listening to music, the user can also see the song lyrics to make it easier for users if they want to know the lyrics and sing along.</p>
    
    <p>I give this application the name 'STEREO'. I did a little research to find out what music is synonymous with. Then I discovered the flow of musical beats, and I used it as inspiration for making logos.</p>
    
    <p>Dark black combined with purple was chosen because I was inspired by synthwave. Although it is usually synonymous with pink and looks striking, I prefer purple to make it look more compatible with black.</p>
    
    <p>I chose to perform the song 'Never Gonna Change My Love' sung by Westlife. This is a legend song> <</p>
    
    <p>Tools:<br />
    - Adobe XD</p>
    
    <p>Image:<br />
    - Unsplash</p>`
  },
  {
    slug: 'leaderboard',
    name: 'Leaderboard',
    image: 'league.jpg',
    category: 'mobile',
    text: `
    <p>This is a game application called "Quidditich League". I was inspired by the Harry Potter film where the film featured a quidditich match. If the quidditich match can be used as a game application it looks like it will be interesting.</p>

    <p>Before making this design I did a little research so I could better understand what a quidditich is and some of its rules. Then I tried to find out what the game was synonymous with. I find that the golden snitch is very important in this competition. for that I made a logo similar to the golden snitch shape. the yellow color was also chosen to match the logo and the original golden snitch color then combined the dark blue color for balance.</p>
    
    <p>Then I started making logos for each team with the names Phoenix, Carberus, Dragon, Unicorn, Manticore. The names are also inspired by the film harry potter. I then tried to make each team logo by customizing its name, then I started making it in simple details so that it was easy to remember.</p>
    
    <p>Tools:<br />
    - Adobe XD</p>`
  },
  {
    slug: 'learning-app',
    name: 'Learning App',
    image: 'course.jpg',
    category: 'mobile',
    text: `
    <p>I create an online learning application design. Here the user can select the desired material. I put the learning path on the homepage to make it easier for users to learn.</p>

    <p>In this application, there is syllabus information so that the user can see whether the subject is in accordance with what the user needs. I chose blue because its compatible with technology. I tried to make each icon simple to make it look neater.</p>
    
    <p>Tools:<br />
    - Adobe XD</p>`
  },
  {
    slug: 'cinemax',
    name: 'Movie App (CINEMAX)',
    image: 'cinemax.jpg',
    category: 'mobile',
    text: `
    <p>I'm trying to make a Movie App design. Users could watch movies by streaming.</p>
    <p>I created the CINEMAX logo and then applied it to the icon in the navigation bar.</p>
    <p>I chose black and red because these colors are identical to the cinema room. I hope this color selection will make users feel the experience when watching in the cinema.</p>
    
    <p>Tools:<br />
    - Adobe XD</p>`
  },
  {
    slug: 'botanica',
    name: 'Botanica',
    image: 'botanica.jpg',
    category: 'web',
    text: `
    <p>This landing page was inspired by a friend of mine who created a plant ordering shop I tried to build with customized features.</p>
    
    <p>Tools:<br />
    - Adobe XD<br />
    - Adobe Illustrator</p>
    
    <p>Image:<br />
    - Unsplash</p>`
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