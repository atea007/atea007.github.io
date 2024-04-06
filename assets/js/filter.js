/* select all filter buttons and filterable cards */
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

/* define filterCards Function */
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const selectedName = e.target.dataset.name;

    filterableCards.forEach(card => {
        const cardNames = card.dataset.name.split(" ");
        if (cardNames.includes(selectedName) || selectedName === "all") {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
};

/* add click event listener to each filter button */
filterButtons.forEach(button => button.addEventListener("click", filterCards));