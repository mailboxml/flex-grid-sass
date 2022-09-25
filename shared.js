var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");

// console.dir(selectPlanButtons);

// backdrop.style.display = 'block';

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        modal.style.display  = "block";
        backdrop.style.display = "block";
    });
}


backdrop.addEventListener("click", functie_inchidere);
modalNoButton.addEventListener("click", functie_inchidere);

function functie_inchidere() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}


// backdrop.addEventListener('click', function() {
// backdrop.style.display = 'none';    
// });

// modalNoButton.addEventListener('click', function() {
// modal.style.display = 'none';
// });

