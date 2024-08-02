document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelectorAll('.image-carousel img');
    let currentImageIndex = 0;
    const totalImages = carouselImages.length;

    console.log("Total images: " + totalImages);

    function showImage(index) {
        carouselImages.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active'); 
                image.style.zIndex = 1; 
            } else {
                image.classList.remove('active'); 
                image.style.zIndex = 0; 
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        console.log("Showing image index: " + currentImageIndex);
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex); 
    setInterval(nextImage, 1800); 
});
