const { createApp } = Vue;

createApp({
  // Data / State
  data() {
    return {
      services: [
        {
          title: 'Garage Flooring',
          description: 'Transform your garage with our premium Epoxy flooring solutions and professional installation. Our durable coatings protect against stains, cracks, and heavy traffic, making it ideal for everyday use and vehicle storage. Experience a showroom-quality finish with a modern appearance that enhances your entire garage space.'
        },
        {
          title: 'Basements',
          description: 'Enhance your basement with our durable and attractive epoxy flooring options built with premium quality materials. Create a moisture-resistant surface that transforms your space into a functional room perfect for recreation or storage. Our expert team ensures a perfect finish every time, with solutions designed to withstand humidity and temperature fluctuations.'
        },
        {
          title: 'Countertops',
          description: 'Create stunning countertops with our custom epoxy solutions that are both beautiful and incredibly durable. Choose from premium finishes and unique designs that enhance any kitchen or bathroom design. Our countertops resist heat, stains, and scratches while providing lasting elegance and easy maintenance for years to come.'
        }
      ],
      team: [
        {
          name: 'Person 1',
          description: 'Meet Person 1, our lead technician with over 10 years of experience in epoxy flooring installation.',
          image: 'ChatGPT Image Mar 10, 2026, 11_48_12 AM.png',
          alt: 'Commercial Spaces'
        },
        {
          name: 'Person 2',
          description: 'Meet Person 2, our experienced installer with a passion for creating beautiful epoxy flooring solutions.',
          image: 'ChatGPT Image Mar 10, 2026, 11_48_12 AM.png',
          alt: 'Residential Spaces'
        }
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