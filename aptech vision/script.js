// side bar
function openNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    }else{
        console.error('error: side panel not found')
    }
}

function closeNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    } else{
        console.error('error: side panel not find');
    }
}

// search bar
function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    } else {
    console.error('error: search panel not found')
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopRightRadius= '100%';
        searchpanel.style.borderTopLefttRadius= '100%';
    } else {
    console.error('error: search panel not found')
    }
}


// portfolio gallary tab

function open_img(evt, cityName){
    let i, tabcontent, tablinks;

    // hidden all tab content
tabcontent = document.getElementsByClassName('tabcontent');
for(i= 0; i< tabcontent.length; i ++){
    tabcontent[i].style.display = "none";
}

// remove active class from all tab links
tablinks = document.getElementsByClassName("tablinks");
for(i= 0; i< tablinks.length; i ++){
    tablinks[i].classList.remove("active");
}

// show the selected tab content and mark the corresponding tab link as active
document.getElementById(cityName).style.display = "block";
evt.currentTarget.classList.add('active');
}


// resposive team slider

$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite:false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    resposive:[{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           
        }  
    },


    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
        }  
    }

]
})


// faq section

document.addEventListener('DOMContentLoaded' , function(){
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach(function(button, index){
        button.addEventListener('click', function(){
            let collapse = this.parentElement.nextElementSibling;

            // close all the other accordion items

            accordionButtons.forEach(function(otherButton, OtherIndex){
                if(otherButton !== button){
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    // reset this imh source and rotation for other accodion item
                   acoimg[OtherIndex].src = 'images/icon/plus.png';
                   acoimg[OtherIndex].style.transform = 'rotate(90deg)';
                   otherButton.style.backgroundColor = '#fff';

                }
            });

        //    toggle the  clicked according item
        if(collapse.style.maxHeight){
            collapse.style.maxHeight = null;
    //    reset the image source, rotation, and backgroud color when collapse
            acoimg[index].src = "images/icon/plus.png";
            acoimg[index].style.transform = "rotate(90deg)"
            button.style.backgroundColor = '';
        }else{
            collapse.style.maxHeight = collapse.scrollHeight + "px";
// change the image source , set rotation, and backgroud color when expan
            acoimg[index].src = "Images/icon/menus.png";
            acoimg[index].style.transform = "rotate(180deg)"
            button.style.backgroundColor = "#c1b0b5"

        }

    });
});

});



// footer validation start

const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-messege');

fom.addEventListener('submit', (event)=>{
    event.preventDefault();
    footerMessage.innerHTML = '~ form Submitted success fully'
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
     footerMessage.style.display = 'none';
    }, 3000);
})


// button back to top

window.onscroll = function(){
    scrollfunction()
}
function scrollfunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById('backToTopBtn').style.display = 'block';
  } else{
    document.getElementById('backToTopBtn').style.display = 'none';
  }
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: 'smooth'
    })
}















// responsive logoipsum slider
$('.sliderlogo').slick({
arrows: false,
dots: false,
infinite: false,
autoplay: false,
speed: 300,
slidesToShow: 5,
sliderToScroll: 1,
resposive: [{
    breakpoint: 1024,
    settings: {
        slidesToShow: 4, 
        sliderToScrol: 1,
        infinite: true, 
        dots: false,
    }
},
{
breakpoint: 600,
settings: {
    slidesToShow: 2,
    sliderToScroll: 1
}
},

]
}
);