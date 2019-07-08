
var show = document.getElementsByClassName('hamburger')

function burgerClick() {
  console.log('IVE BEEN CLICKED');
  console.log(show);

  if (show.style.display = 'none') {
    show.style.display = 'block';
  }
  else if (show.style.display = 'block') {
    show.style.display = 'none';
  }
}
