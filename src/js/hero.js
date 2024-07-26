const linkList = document.querySelector('.hero-list');

const socialMediaLinks = [
  { text: 'IG', link: 'https://www.instagram.com/goitclub/' },
  { text: 'YT', link: 'https://www.youtube.com/c/GoIT' },
  { text: 'FB', link: 'https://www.facebook.com/goITclub/' },
  { text: 'GH', link: 'https://github.com/tanyf5/portfolio-team-10' },
  { text: 'lloydjefferson@gmail.com', link: 'mailto:lloydjefferson@gmail.com', class: 'hero-list-email' }

];

function createMarkup(arr) {
  const markup = arr
    .map(item => `
      <li class="hero-list-item ${item.class}">
        <a href="${item.link}" class="hero-link " target="_blank">${item.text}</a>
      </li>
    `)
    .join('');

  linkList.insertAdjacentHTML('beforeend', markup);
}

createMarkup(socialMediaLinks);


const linkItems = document.querySelectorAll('.hero-list-item');

linkItems.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    const link = this.querySelector('.hero-link').getAttribute('href');
    window.open(link, '_blank');
  });
});