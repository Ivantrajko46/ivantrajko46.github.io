function ready() {
    var allCardPortfolio = document.querySelectorAll('#web-portfolio .web-card');
    // console.log(allCardPortfolio);

    for (let i = 0; i < allCardPortfolio.length; i++) {

        let cardContent = allCardPortfolio[i].querySelector('.web-card-content');
        // console.log(cardContent);
        cardContent.classList.add('hidden');

        let card = allCardPortfolio[i];
        // console.log(card);


        card.addEventListener('mouseover', function(event) {
            let cardContent = event.target.nextElementSibling || event.target;
            // console.log(event.target);

            if (cardContent.className) {
                // console.log(cardContent.className);

                if (cardContent.className.match('web-card-content')) {

                    cardContent.classList.add('slideInUp');
                    cardContent.classList.add('animated');
                    cardContent.classList.remove('hidden');

                    // console.log(cardContent.className);
                }
            }
        });

        card.addEventListener('mouseout', function(event) {
            let cardContent = event.target.nextElementSibling || event.target;

            if (cardContent.className) {

                if (cardContent.className.match('web-card-content')) {

                    cardContent.classList.remove('slideInUp');
                    cardContent.classList.remove('animated');
                    cardContent.classList.add('hidden');


                }
            }

        })
    }

}

// && !cardContent.className.match("slideInUp")

function openCloseNav() {
    let sideNav = document.getElementById("mySidenav");

    if (sideNav.style.width == 0 || sideNav.style.width == "0px") {
        sideNav.style.width = "300px";

    } else {
        sideNav.style.width = "0";




    }

}