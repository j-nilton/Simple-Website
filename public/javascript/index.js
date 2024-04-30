$('.slider-principal').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
});

const btnExpandir = document.getElementById('btnExpandir');
const abaExpandida = document.getElementById('abaExpandida');

btnExpandir.addEventListener('click', () => {
  if (abaExpandida.classList.contains('hidden')) {
    abaExpandida.classList.remove('hidden');
    btnExpandir.textContent = '-';
  } else {
    abaExpandida.classList.add('hidden');
    btnExpandir.textContent = '+';
  }
});



