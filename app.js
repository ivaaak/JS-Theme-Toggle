document.addEventListener('DOMContentLoaded', () => {

  const navBtn = document.querySelector('.nav__burger div');

  navBtn.addEventListener('click', function () {
    this.parentNode.classList.toggle('active');
  });


  const themeLightBtn = document.querySelector('.theme-switch__item--light');
  const themeDarkBtn = document.querySelector('.theme-switch__item--dark');
  const themeRedBtn = document.querySelector('.theme-switch__item--red');
  const themeBlueBtn = document.querySelector('.theme-switch__item--blue');
  const themeGrayBtn = document.querySelector('.theme-switch__item--gray');
  const themeLightblueBtn = document.querySelector('.theme-switch__item--lightblue');


  themeLightBtn.addEventListener('click', changeTheme());
  themeDarkBtn.addEventListener('click', changeTheme('dark'));
  themeRedBtn.addEventListener('click', changeTheme('red'));
  themeBlueBtn.addEventListener('click', changeTheme('blue'));
  themeGrayBtn.addEventListener('click', changeTheme('gray'));
  themeLightblueBtn.addEventListener('click', changeTheme('lightblue'));


  function changeTheme(themeName) {
    return function () {
      document.body.className = themeName ? `theme-${themeName}` : '';
    };
  }
});