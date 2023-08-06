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
var anchorTags = document.querySelectorAll('.nav-menu a');

for(let i of anchorTags){
    i.addEventListener('click',function(event){
        event.preventDefault();
        let p = this.textContent.trim().toLowerCase();
        let scroll = setInterval(function(){
            let target = document.getElementById(p).getBoundingClientRect().top;
            if(target <= 0){
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}



