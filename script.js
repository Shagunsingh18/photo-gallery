// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filter cards function
const filterCards = (e) => {
  // Remove the 'active' class from the currently active button
  document.querySelector(".filter_buttons .active").classList.remove("active");

  // Add the 'active' class to the clicked button
  e.target.classList.add("active");

  // Get the selected filter name
  const filterName = e.target.dataset.name;

  // Iterate over each filterable card
  filterableCards.forEach((card) => {
    // Add "hide" class to hide the card initially
    card.classList.add("hide");

    // Check if the card matches the selected filter or "all" is selected
    if (card.dataset.name === filterName || filterName === "all") {
      card.classList.remove("hide");
    }
  });
};

// Add click event listener to each filter button
filterButtons.forEach((button) => button.addEventListener("click", filterCards));

