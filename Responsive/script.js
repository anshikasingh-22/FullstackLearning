const searchInput = document.getElementById("searchInput");

const movieCards = document.querySelectorAll(".movie-card");

const noMovies = document.getElementById("noMovies");

const notification = document.getElementById("notification");

let notificationTimer;

searchInput.addEventListener("input", function () {

    let searchValue = searchInput.value.toLowerCase();

    let foundMovies = 0;

    movieCards.forEach(function (card) {

        let movieName = card.querySelector(".movie-title").textContent.toLowerCase();

        if (movieName.includes(searchValue)) {

            card.style.display = "block";
            foundMovies++;

        } else {

            card.style.display = "none";

        }

    });

    if (foundMovies === 0) {

        noMovies.style.display = "block";

    } else {

        noMovies.style.display = "none";

    }

});


const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        let movieName = button.getAttribute("data-movie");

        notification.textContent = "✓ Booking Confirmed: " + movieName;

        notification.classList.add("show");

        clearTimeout(notificationTimer);

        notificationTimer = setTimeout(function () {

            notification.classList.remove("show");

        }, 3000);

    });

});
