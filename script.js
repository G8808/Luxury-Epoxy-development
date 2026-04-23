const { createApp } = Vue;

createApp({
  // Data / State
  data() {
    return {
      services: [
        {
          img: 'IMG_20260410_094712.jpg',
          title: 'Garage Flooring',
          description: 'Transform your garage with our premium Epoxy flooring solutions and professional installation. Our durable coatings protect against stains, cracks, and heavy traffic, making it ideal for everyday use and vehicle storage. Experience a showroom-quality finish with a modern appearance that enhances your entire garage space.'
        },
        {
          img: 'unnamed1.jpg',
          title: 'Basements',
          description: 'Enhance your basement with our durable and attractive epoxy flooring options built with premium quality materials. Create a moisture-resistant surface that transforms your space into a functional room perfect for recreation or storage. Our expert team ensures a perfect finish every time, with solutions designed to withstand humidity and temperature fluctuations.'
        },
        {
          img: '1000014307.jpg',
          title: 'Countertops',
          description: 'Create stunning countertops with our custom epoxy solutions that are both beautiful and incredibly durable. Choose from premium finishes and unique designs that enhance any kitchen or bathroom design. Our countertops resist heat, stains, and scratches while providing lasting elegance and easy maintenance for years to come.'
        }
      ],
      team: [
        {
          name: 'About us',
          description: 'Luxury Epoxy NJ delivers high-quality epoxy flooring with speed, precision, and professionalism. We proudly service all of New Jersey, along with parts of Pennsylvania and New York.',
          
          alt: 'About us'
        },
          {
          name: 'What We Do',
          description: 'We handle both residential and commercial projects, including:',
          
          alt: 'About us'
        },
        {
          name: 'Why choose us',
          description: 'Choose Luxury Epoxy NJ for expert installation, premium materials, and service built for every project.',
          
          alt: 'Why choose us'
        },
      
      ],
      form: {
        name: '',
        service: '',
        email: '',
        message: ''
      }
    }
  },

  // Functions / Methods
  methods: {
    submitForm() {
      // Handle form submission with Vue
      console.log('Form submitted:', this.form);
      // You can add validation or AJAX here
    }
  },

  // Runs when the app starts
  mounted() {
    console.log("Vue is active and polished.");
  }
}).mount('#app');

document.getElementById('services-link').addEventListener('click', function() {
  const element = document.getElementById('services');
  element.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('about-link').addEventListener('click', function() {
  const element = document.getElementById('about');
  element.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact-link').addEventListener('click', function() {
  const element = document.getElementById('contact');
  element.scrollIntoView({ behavior: 'smooth' });
});const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});