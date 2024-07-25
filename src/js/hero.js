const linkList = document.querySelector('.hero-list')

const instagram = 'https://www.instagram.com/goitclub/';
const facebook = 'https://www.facebook.com/goITclub/';
const youtube = 'https://www.youtube.com/c/GoIT';
const github = 'https://github.com/tanyf5/portfolio-team-10';

function createMArkup(arr) {
  const markup = arr
    .map(`
          <li class="hero-list-item">
          <a href="${instagram}" class="hero-link">IG</a>
        </li>

        <li class="hero-list-item">
          <a href="${facebook}" class="hero-link">YT</a>
        </li>

        <li class="hero-list-item">
          <a href="${youtube}" class="hero-link">FB</a>
        </li>

        <li class="hero-list-item">
          <a href="${github}" class="hero-link">GH</a>
        </li>
        <li class="hero-list-item hero-list-email">
          <a href="" class="hero-email">lloydjefferson@gmail.com</a>
        </li>
`).join()

  linkList.insertAdjacentHTML('beforeend', markup);
}
