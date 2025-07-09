const blogs = document.querySelectorAll('.blog-card');
const projects = document.querySelectorAll('.project-card');
const icons = document.querySelectorAll('.icon');

function addClickListeners(selector) {
  document.querySelectorAll(selector).forEach(element => {
    element.addEventListener('click', () => {
      const url = element.getAttribute('data-href');
      if (url) {
        window.location.href = url;
      }
    });
  });
}

addClickListeners('.blog-card');
// addClickListeners('.project-card');
addClickListeners('.icon');

// function toggleCardContent(toggleBtn) {
//   const card = toggleBtn.closest('.project-card');
//   const extraContent = card.querySelector('.card-extra-content');
//
//   if (extraContent.style.display === 'none') {
//     extraContent.style.display = 'block';
//   } else {
//     extraContent.style.display = 'none';
//   }
// }

function toggleCardContent(toggleBtn) {
  const card = toggleBtn.closest('.project-card');
  card.classList.toggle('flipped');
}