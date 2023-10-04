const backgroundPlay = document.querySelector(".background-play");
const backgroundPause = document.querySelector(".background-pause");

backgroundPlay.addEventListener('click', () => {
    backgroundPlay.classList.add('hidden');
    backgroundPlay.classList.remove('visable');

    backgroundPause.classList.remove('hidden');
    backgroundPause.classList.add('visable');
});
backgroundPause.addEventListener('click', () => {
    backgroundPause.classList.add('hidden');
    backgroundPause.classList.remove('visable');

    backgroundPlay.classList.remove('hidden');
    backgroundPlay.classList.add('visable');

});


const audio = new Audio();
audio.src = "media/background-audio.mp3"



const showOnScroll = document.querySelectorAll('.hide');

const showOnScrollMore = document.querySelectorAll('.hide-more');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});

const observeMore = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('showMore');
        }
    })
});
showOnScroll.forEach((el) => observer.observe(el));
showOnScrollMore.forEach((el) => observeMore.observe(el));



const navigation = document.querySelector(".navigation");
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () =>{
    const visibility = navigation.getAttribute('data-visible');

    if(visibility === 'false'){
        navigation.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);

    }else if(visibility === 'true'){
        navigation.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})