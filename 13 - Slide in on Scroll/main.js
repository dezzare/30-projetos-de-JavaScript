function debounce(fn, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = () => {
      timeout = null;
      if(!immediate) fn.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(arg => {
    const slideInAt = (window.scrollY + window.innerHeight) - arg.height / 2;
    const imageBottom = arg.offsetTop + arg.height;
    const isHalfShown = slideInAt > arg.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if ( isHalfShown && isNotScrolledPast) {
      arg.classList.add('active');
    } else {
      arg.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
