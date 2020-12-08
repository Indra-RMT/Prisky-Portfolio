export const portfolioData = [
  {
    slug: 'angel-skin-clinic',
    name: 'Angel Skin Clinic',
    image: 'angel.png',
    category: 'study case',
    text: `
    <p><b>Platform:</b></p>
    <p>Android</p>
    
    <p><b>Role:</b></p>
    <p>UX Designer</p>
    
    <p>&nbsp;</p>
    <p>Angel Skin Clinic adalah case study pertama saya. Case study ini terinspirasi dari pengalaman saya melakukan konsultasi dokter di salah satu klinik kecantikan. Dari situlah saya mulai mencari tahu kira-kira apa masalah yang saya alami ketika melakukan konsultasi.</p>
    
    <h4>Step 1: Emphatize</h4>
    <p><b>Saya sebagai pasien</b></p>
    <p>Sebagai pasien saya mulai menjabarkan kesulitan-kesulitan yang saya alami, hal yang membuat saya frustasi, dan hal yang mengganggu atau bahkan menghambat saya. Pada tahap ini saya mencoba untuk berada pada posisi pasien, bukan menjadi seorang desainer.</p>
    <p>Dan ini adalah beberapa poin initial hipotesis yang saya temukan:</p>
    <p>- Pasien yang ke klinik kecantikan adalah orang yang mengalami masalah kulit dan berharap dapat menyelesaikan masalah kulit dengan berkonsultasi kepada dokter.</p>
    <p>- Pasien yang datang ke klinik kecantikan adalah orang yang merawat penampilan agar memiliki kulit yang sehat dan terawat.</p>
    <p>- Pelayanan masih dilakukan secara manual sehingga kurang efisien apalagi untuk pasien yang tidak bisa datang langsung ke klinik karena alasan tertentu.</p>
    
    <p><b>User needs</b></p>
    <p>Kemudian saya mencoba untuk mencari tahu apakah pasien lain mengalami hal serupa. Untuk itu saya melakukan research dengan mencari pengalaman pasien di klinik kecantikan di blog, tanggapan atau comment pada blog, forum, google review, maupun pada media sosial.</p>
    <p>Ini adalah beberapa yang saya temukan:</p>
    <p><i>“antriannya lama banget tapi tetap tunggu loh”</i>- blog</p>
    <p><i>“sistemnya by phone tapi susah nyambungnya karena sibuk terus”- google review</i></p>
    <p><i>“ngga boleh booking untuk 2 minggu atau lebih”</i>- google review</p>
    
    <p><b>User Interview</b></p>
    <p>Meskipun saya telah mendapat banyak referensi dari review melalui internet, saya memutuskan untuk melakukan interview agar mendapat informasi lebih detail.</p>
    
    <h4>Step 2: Define</h4>
    <p>Setelah melakukan research dan mendapatkan berbagai informasi, saya mulai menyusun data yang saya peroleh. Selanjutnya saya mengelompokkan data tersebut sesuai jenis permasalahan yang dialami pasien.</p>
    
    <img src="../../public/img/detail-ui-ux-1.png" alt="define">
    
    <p>Aku mengelompokkan apa yang menjadi kesulitan-kesulitan dan permasalahan yang mereka alami dengan membaginya menjadi 3 bagian, sebelum konsultasi, saat konsultasi, dan setelah konsultasi.</p>
    
    <p><b>Personas</b></p>
    <p>Setelah mendapatkan referensi dari pasien dan belajar tentang apa yang menjadi masalah mereka, selanjutnya saya mencoba membuat persona untuk merepresentasikan pasien.</p>

    <img class="width-80" src="../../public/img/detail-ui-ux-2.png" alt="personas 1">
    <img class="width-80" src="../../public/img/detail-ui-ux-3.png" alt="personas 2">
    
    <p>Clara merepresentasikan pasien yang datang ke klinik karena memiliki masalah kulit dan ingin menyembuhkan permasalahan kulitnya. Sedangkan Karina adalah pasien yang datang ke klinik untuk tujuan estetik, agar kulit sehat dan terawat.</p>

    <p><b>Define the Problem</b></p>
    <p>Setelah mendapatkan pemahaman yang clear tentang ‘Siapa’ yang akan saya bantu untuk menyelesaikan masalah, saya mulai beralih untuk mencari tahu apa yang mereka butuhkan. Saya mulai membuat user need statement.</p>

    <p>User need statement:</p>
    <p><i>“saya ingin pergi ke klinik, tapi antrian yang panjang membuat saya malas dan enggan pergi.”</i></p>
    <p><i>“saya ingin melakukan konsultasi dengan dokter, tapi saya tidak bisa mengetahui jadwal praktek dokter secara pasti.”</i></p>
    <p><i>“saya ingin konsultasi dengan dokter, tapi proses administrasi yang lama membuat saya harus menghabiskan banyak waktu. ”</i></p>
    <p><i>“saya hanya ingin melakukan pembelian produk yang telah habis tanpa konsultasi, tapi saya harus datang langsung ke klinik padahal saya tidak memiliki banyak waktu.”</i></p>
    <p>Kemudian dari user need statement diatas , saya mencoba untuk membuat POV untuk case study ini:</p>
    <p><i>“Bagaimana jika saya membuat aplikasi secara online untuk membantu pasien melakukan konsultasi dengan mudah dan efisien.”</i></p>
    <p>Pasien akan dengan mudah melakukan konsultasi dengan dokter tanpa harus bertatap muka secara langsung. Pasien dapat melakukan pembuatan janji dengan dokter sesuai dengan preferensi waktu tertentu. Pasien dapat melakukan pembelian produk dengan mudah dan akan dikirim langsung ke rumah pasien tanpa harus datang ke klinik.</p>
    

    <h4>Step 3: Ideate</h4>
    <p>Selanjutnya saya mulai mencari tahu apa masalah terbesar dan urgent untuk diselesaikan terlebih dahulu.</p>
    <p><b>Sketch</b></p>
    <p>Tahap selanjutnya adalah menuliskan langkah-langkah yang dilakukan user ketika menggunakan aplikasi. Dibawah ini adalah flow ketika user melakukan pembuatan janji untuk melakukan konsultasi:</p>

    <img class="width-80" src="../../public/img/detail-ui-ux-4.png" alt="user flow pembuatan janji">

    <p>Selanjutnya adalah membuat Architecture Information untuk aplikasi:</p>

    <img class="width-80" src="../../public/img/detail-ui-ux-5.png" alt="architecture information aplikasi">


    <h4>Step 4: Prototype</h4>
    <p><b>Paper prototype</b></p>
    <p>Selanjutnya membuat prototype berdasarkan user flow yang telah di buat sebelumnya. Pembuatan prototype menggunakan kertas dan pulpen.</p>

    <p><b>Digital Prototype - Low Fidelity</b></p>
    <p>Setelah dirasa flow telah sesuai, kemudian beralih dengan membuat digital prototype.
    Kemudian membuat interaksi ketika user menggunakan aplikasi.</p>

    <img src="../../public/img/detail-ui-ux-6.png" alt="Digital Prototype - Low Fidelity">

    <p><b>Branding</b></p>
    <p>Pada tahap ini dilakukan pembuatan logo, pemilihan warna, typography, dan iconography.</p>`
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