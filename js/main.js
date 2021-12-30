(
  function(){
    document.body.classList.add('js')
    const navBtn = document.querySelector(`.nav-btn`)
    const navbar = document.getElementById('main-nav')
    const testimonialSection = document.querySelector(`.testimonials-section .container`)
    
    navBtn.addEventListener('click', toggleNavbar)
    toggleNavbar()
    function toggleNavbar(){
      let expanded = navbar.classList.contains('--active') ? false : true
      navBtn.setAttribute('aria-expanded', expanded)
      navbar.classList.toggle('--active')
    }
  }
)()