function startSlideShow() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    slideShow();
    function slideShow() {
        slideIndex++;
        if(slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex - 1].classList.add("active");
        setTimeout(() => {
            slides[slideIndex - 1].classList.remove("active")
            setTimeout(slideShow, 500);
        }, 5000)
    }
}

export default startSlideShow;