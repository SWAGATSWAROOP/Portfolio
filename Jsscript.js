var a = document.getElementsByClassName('nav-menu')[0];

        for (let i of a.children) {
            let links = i.querySelectorAll('li a');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    let href = this.getAttribute('href').substr(1);
                    let scrollTarget = document.getElementById(href);
                    let targetPosition = scrollTarget.getBoundingClientRect().top;
                    let currentPosition = window.scrollY;

                    var interval = setInterval(function() {
                        if (currentPosition >= targetPosition) {
                            clearInterval(interval);
                            return;
                        }
                        currentPosition += 50;
                        window.scrollTo(0, currentPosition);
                    }, 20);
                });
            });
        }


