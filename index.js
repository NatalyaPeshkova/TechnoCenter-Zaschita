// слайдер
$('.sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    arrows:false,
    speed:4000
});

const printNumbers = (initialNumber) => {
    
while (initialNumber >= 0) {
    console.log(initialNumber);
    initialNumber -= 1; 
}
};

printNumbers(10);