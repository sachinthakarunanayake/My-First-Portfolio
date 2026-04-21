document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ----- navigation buttons -----
  const homeBtn     = document.getElementById('btn-home');
  const aboutBtn    = document.getElementById('btn-about');
  const projectsBtn = document.getElementById('btn-projects');
  const blogBtn     = document.getElementById('btn-blog');
  const contactBtn  = document.getElementById('btn-contact');

  const exploreAbout = document.getElementById('explore-about');
  const exploreGoals = document.getElementById('explore-goals');

  // ----- pages -----
  const homePage     = document.getElementById('home-page');
  const aboutPage    = document.getElementById('about-page');
  const projectsPage = document.getElementById('projects-page');
  const blogPage     = document.getElementById('blog-page');
  const contactPage  = document.getElementById('contact-page');

  // ----- set active page -----
  function setActivePage(pageId) {
    [homeBtn, aboutBtn, projectsBtn, blogBtn, contactBtn].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    [homePage, aboutPage, projectsPage, blogPage, contactPage].forEach(page => {
      if (page) page.classList.remove('active-page');
    });

    if (pageId === 'home') {
      homeBtn?.classList.add('active');
      homePage?.classList.add('active-page');
    } else if (pageId === 'about') {
      aboutBtn?.classList.add('active');
      aboutPage?.classList.add('active-page');
    } else if (pageId === 'projects') {
      projectsBtn?.classList.add('active');
      projectsPage?.classList.add('active-page');
    } else if (pageId === 'blog') {
      blogBtn?.classList.add('active');
      blogPage?.classList.add('active-page');
    } else if (pageId === 'contact') {
      contactBtn?.classList.add('active');
      contactPage?.classList.add('active-page');
    }
  }  

  // ----- add nav listeners -----   
  homeBtn?.addEventListener('click',     () => setActivePage('home'));
  aboutBtn?.addEventListener('click',    () => setActivePage('about'));
  projectsBtn?.addEventListener('click', () => setActivePage('projects'));
  blogBtn?.addEventListener('click',     () => setActivePage('blog'));
  contactBtn?.addEventListener('click',  () => setActivePage('contact'));

  exploreAbout?.addEventListener('click', () => setActivePage('about'));
  exploreGoals?.addEventListener('click', () => setActivePage('projects'));

  // ----- dynamic year in footer -----
  const footerYear = document.querySelector('.modern-footer p:first-child');
  if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = `© ${year} K.M.S.G.S.I.Karunanayake · ITM Moratuwa`;
  }

  // ----- avatar hover interaction -----
  const avatar = document.querySelector('.avatar-modern');
  if (avatar) {
    avatar.addEventListener('mousemove', function (e) {
      const rect = avatar.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const glow = avatar.querySelector('.avatar-glow');
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}% ${y}%, #c7defa, #8eafd1)`;
      }
    });
  }

  // ----- ensure home is active on load -----
  if (!homePage?.classList.contains('active-page') &&
      !aboutPage?.classList.contains('active-page') &&
      !projectsPage?.classList.contains('active-page') &&
      !blogPage?.classList.contains('active-page') &&
      !contactPage?.classList.contains('active-page')) {
    setActivePage('home');
  }

  // ----- contact form submission -----   
  const contactSubmit = document.getElementById('contact-submit');
  if (contactSubmit) {
    contactSubmit.addEventListener('click', () => {
      const name    = document.getElementById('c-name').value.trim();
      const email   = document.getElementById('c-email').value.trim();
      const subject = document.getElementById('c-subject').value.trim();
      const message = document.getElementById('c-message').value.trim();

      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields before sending.');
        return;
      }

      const banner = document.getElementById('success-banner');
      banner.classList.add('show');

      ['c-name', 'c-email', 'c-subject', 'c-message'].forEach(id => {
        document.getElementById(id).value = '';
      });

      setTimeout(() => banner.classList.remove('show'), 5000);
    });
  }

});