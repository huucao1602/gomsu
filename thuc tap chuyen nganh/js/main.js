document.addEventListener("DOMContentLoaded", function () {
    const imgContainer = document.querySelector(".aspect-ratio-169 .slider-inner");
    const imgPosition = imgContainer.children;
    const imgNumber = imgPosition.length;

    let index = 0;

    // Function to update active class and show the active image
    function showImage() {
        for (let i = 0; i < imgPosition.length; i++) {
            if (i === index) {
                imgPosition[i].classList.add("active");
            } else {
                imgPosition[i].classList.remove("active");
            }
        }
    }

    // Thêm sự kiện click cho nút Previous
    const prevButton = document.getElementById("prevBtn");
    prevButton.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = imgNumber - 1;
        }
        const transformValue = -index * 100 + "%";
        imgContainer.style.transform = `translateX(${transformValue})`;
        showImage();
    });

    // Thêm sự kiện click cho nút Next
    const nextButton = document.getElementById("nextBtn");
    nextButton.addEventListener("click", () => {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        const transformValue = -index * 100 + "%";
        imgContainer.style.transform = `translateX(${transformValue})`;
        showImage();
    });

    // Lặp qua các nút "Dot" và thêm sự kiện click cho từng nút
    const dotButtons = document.querySelectorAll(".dot-container .dot");
    dotButtons.forEach((dotBtn, idx) => {
        dotBtn.addEventListener("click", () => {
            index = idx;
            const transformValue = -index * 100 + "%";
            imgContainer.style.transform = `translateX(${transformValue})`;
            showImage();
        });
    });

    function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        const transformValue = -index * 100 + "%";
        imgContainer.style.transform = `translateX(${transformValue})`;
        showImage(); // Call the function to update active class
    }

    setInterval(imgSlide, 5000);
});
//-----------------------camket----------------//
const bigImg = document.querySelector(".xemhang-content-left-big-img img");
const smalImg = document.querySelectorAll(".xemhang-content-left-small-img img");
smalImg.forEach(function(imgItem,X){
   imgItem.addEventListener("click",function(){
    bigImg.src = imgItem.src
   })
})







const camket = document.querySelector(".camket");
const chitiet = document.querySelector(".chitiet");

if (camket) {
  camket.addEventListener("click", function() {
    document.querySelector(".xemhang-content-right-bottom-content-chitiet").style.display = "none";
    document.querySelector(".xemhang-content-right-bottom-content-camket").style.display = "block";
  });
}

if (chitiet) {
  chitiet.addEventListener("click", function() {
    document.querySelector(".xemhang-content-right-bottom-content-chitiet").style.display = "block";
    document.querySelector(".xemhang-content-right-bottom-content-camket").style.display = "none";
  });
}
const button = document.querySelector(".xemhang-content-right-bottom-top");
if(button){
    button.addEventListener("click",function() {
document.querySelector(".xemhang-content-right-bottom-content-big").classList.toggle("activeB");
    })
}

