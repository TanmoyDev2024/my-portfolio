


// sweet alert set
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // sweet alert
                Swal.fire({
                title: "Form submitted successfully",
                icon: "success",
                draggable: true
                });

            } else {
                // sweet alert
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "please enter the form",
                footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});




// header paralax effect---
		const body = document.body;
		let lastScroll = 0;

		window.addEventListener('scroll', () => {
			let currentScroll = window.pageYOffset;

			if (currentScroll <= 0) {
				body.classList.remove('scroll-up');
			}

			if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
				body.classList.remove('scroll-up');
				body.classList.add('scroll-down');
			}

			if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
				body.classList.remove('scroll-down');
				body.classList.add('scroll-up');
			}

			lastScroll = currentScroll;
		});



        // MY CREATION SECTION JS  

    // all button
    let allBtn            = document.getElementById("all");
    let graphicsBtn             = document.getElementById("graphics-btn");
    let webDesignBtn     = document.getElementById("web-design-btn");
    let webDevelopmentBtn = document.getElementById("web-development-btn");


    //   all block 
    let graphicsDesign = document.getElementById("graphics-design");
    let webDesign = document.getElementById("web-design");
    let webDevelopment = document.getElementById("web-development");

    // click event
    graphicsBtn.addEventListener("click", function(){
        graphicsDesign.style.display = "block";
        webDesign.style.display = "none";
        webDevelopment.style.display = "none";
    });

    // allBtn.addEventListener("click", function(){
    //     all.style.display = "block";
    //     ui.style.display = "none";
    //     webDesign.style.display = "none";
    //     webDevelopment.style.display = "none";
    // });   

    webDesignBtn.addEventListener("click", function(){
        webDesign.style.display = "block";
        graphicsDesign.style.display = "none";
        webDevelopment.style.display = "none";
    });    

    webDevelopmentBtn.addEventListener("click", function(){
        webDevelopment.style.display = "block";
        webDesign.style.display = "none";
        graphicsDesign.style.display = "none";
    })     






// let entries = document.querySelector(".skill-bar");



// const observer = new IntersectionObserver( (entries) => {

//     entries.forEach( (entry) => {
//         if (entry.isIntersecting) {
//             jQuery(document).ready(function() {

//                 // modification start
//                 jQuery(document).on('scroll', function(){

//                     if(jQuery('body').scrollTop() > jQuery('.my-skil-section').height()){

//                         jQuery(".skill-bar").each(function() {

//                             jQuery(this).find(".skill-fill").animate({

//                             width: jQuery(this).attr("data-percentage")

//                             },2000);

//                         });
//                     }

//                 });
//                 // modification start

//             });
//         }
//     })

// })

// observer.observe(document.querySelector('.skill-bar'))



document.addEventListener("DOMContentLoaded", () => {
const box = document.querySelector(".skill-fill");
const targetWidth = box.getAttribute("data-percentage");

gsap.registerPlugin(ScrollTrigger);

  gsap.to('.skill-fill', {
    width:50,
    x:200,
    duration:6,
    backgroundColor: "orange",

    });

 });