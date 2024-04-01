// When the page is fully loaded, hide the loading screen and display the content
window.addEventListener('load', function () {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
});
