let searchBody = document.querySelector('.search');
let searchIcon = document.querySelector('.search_icon');
let searchIcon2 = document.querySelector('.search__icon');
let searchCross = document.querySelector('.cross_btn');
let searchFrom = document.querySelector('.search_bar');

searchIcon.addEventListener('click', ()=> {
    if (!searchBody.classList.contains('search_active')) {
        searchBody.classList.add('search_active');
        searchFrom.classList.add('form_active');
    }
})
// searchIcon2.addEventListener('click', ()=> {
//     if (!searchBody.classList.contains('search_active')) {
//         searchBody.classList.add('search_active');
//         searchFrom.classList.add('form_active');
//     }
// })
searchCross.addEventListener('click', ()=> {
    if (searchBody.classList.contains('search_active')) {
        searchBody.classList.remove('search_active');
        searchFrom.classList.remove('form_active');
    }
})

let user = document.querySelector('.user_icon');
let show = document.querySelector('.show_pass');
let hide = document.querySelector('.hide_pass');
let userPage = document.querySelector('.log_in');
let userOff = document.querySelector('.log__close');

user.addEventListener('click' , ()=> {
    userPage.classList.add('turniton');
})
// userPage.addEventListener('click' , function(e){
//     if (e.target.classList.contains('turniton')) {
//         userPage.classList.remove('turniton');
//     }
// })

userOff.addEventListener('click' , ()=> {
    userPage.classList.remove('turniton');
}) 


