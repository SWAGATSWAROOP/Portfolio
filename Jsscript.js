//Done With the help of ChatGPT now on my own

// var a = document.getElementsByClassName('nav-menu')[0];

//         for (let i of a.children) {
//             let links = i.querySelectorAll('li a');
//             links.forEach(link => {
//                 link.addEventListener('click', function(event) {
//                     event.preventDefault();
//                     let href = this.getAttribute('href').substr(1);
//                     let scrollTarget = document.getElementById(href);
//                     let targetPosition = scrollTarget.getBoundingClientRect().top;
//                     let currentPosition = window.scrollY;

//                     var interval = setInterval(function() {
//                         if (currentPosition >= targetPosition) {
//                             clearInterval(interval);
//                             return;
//                         }
//                         currentPosition += 50;
//                         window.scrollBy(0,50);
//                     }, 20);
//                 });
//             });
//         }

//Own my Own
//Approach 1:-
// var anchorTags = document.querySelectorAll('.nav-menu a');

// for(let i of anchorTags){
//     i.addEventListener('click',function(event){
//         event.preventDefault();
//         let p = this.textContent.trim().toLowerCase();
//         let scroll = setInterval(function(){
//             let target = document.getElementById(p).getBoundingClientRect().top;
//             if(target <= 0){
//                 clearInterval(scroll);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },20);
//     });
// }

//Approach2:-
// var anchorTags = document.querySelectorAll('.nav-menu a');
// var scroll;
// for(let i of anchorTags){
//     i.addEventListener('click',function(event){
//         event.preventDefault();
//         let p = this.textContent.trim().toLowerCase();
//         scroll = setInterval(scrollVertically,20,p);
//     });
// }

function scrollVertically(p){
    let target = document.getElementById(p).getBoundingClientRect().top;
        if(target <= 0 || window.innerHeight + window.scrollY >= document.body.offsetHeight){
        clearInterval(scroll);
        return;
    }
    window.scrollBy(0,50);
}

//Approach 3
var anchorTags = document.querySelectorAll('.nav-menu a');
var scroll;
for(let i of anchorTags){
    i.addEventListener('click',function(event){
        event.preventDefault();
        let p = this.textContent.trim().toLowerCase();
        scroll = setInterval(function(){
            scrollVertically(p);
        },20);
    });
}