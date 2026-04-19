// script.js 
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ----- navigation buttons -----
  const homeBtn = document.getElementById('btn-home');
  const aboutBtn = document.getElementById('btn-about');
  const projectsBtn = document.getElementById('btn-projects'); // "Goals" page
  const blogBtn = document.getElementById('btn-blog');

  // extra buttons from home
  const exploreAbout = document.getElementById('explore-about');
  const exploreGoals = document.getElementById('explore-goals');

  // pages
  const homePage = document.getElementById('home-page');
  const aboutPage = document.getElementById('about-page');
  const projectsPage = document.getElementById('projects-page'); // goals page
  const blogPage = document.getElementById('blog-page');

  // ----- set active page  -----
  function setActivePage(pageId) {
    // remove active class from all nav buttons
    [homeBtn, aboutBtn, projectsBtn, blogBtn].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    // remove active-page from all pages
    [homePage, aboutPage, projectsPage, blogPage].forEach(page => {
      if (page) page.classList.remove('active-page');
    });

    // activate
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
  }
}
  // ----- add listeners -----
  homeBtn?.addEventListener('click', () => setActivePage('home'));
  aboutBtn?.addEventListener('click', () => setActivePage('about'));
  projectsBtn?.addEventListener('click', () => setActivePage('projects'));
  blogBtn?.addEventListener('click', () => setActivePage('blog'));

  exploreAbout?.addEventListener('click', () => setActivePage('about'));
  exploreGoals?.addEventListener('click', () => setActivePage('projects'));

  // ----- dynamic year in footer -----
  const footerYear = document.querySelector('.modern-footer p:first-child');
  if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = `© ${year} K.M.S.G.S.I.Karunanayake · ITM Moratuwa`;
  }

  // ----- tiny avatar interaction  -----
  const avatar = document.querySelector('.avatar-modern');
  if (avatar) {
    avatar.addEventListener('mousemove', function(e) {
      const rect = avatar.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const glow = avatar.querySelector('.avatar-glow');
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}% ${y}%, #c7defa, #8eafd1)`;
      }
    });
  }

  // ----- ensure home is active if none active  -----
  if (!homePage?.classList.contains('active-page') &&
      !aboutPage?.classList.contains('active-page') &&
      !projectsPage?.classList.contains('active-page') &&
      !blogPage?.classList.contains('active-page')) {
    setActivePage('home');
  }
});
