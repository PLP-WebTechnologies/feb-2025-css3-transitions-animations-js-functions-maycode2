const themeBtn = document.getElementById('themeBtn');
const likeBtn = document.getElementById('likeBtn');
const body = document.body;

// Load preferences on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  const liked = localStorage.getItem('liked');

  if (savedTheme === 'dark') body.classList.add('dark');
  if (liked === 'true') likeBtn.classList.add('liked');
};

// Toggle theme and save
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Toggle like and save
likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');
  const liked = likeBtn.classList.contains('liked');
  localStorage.setItem('liked', liked);
});
