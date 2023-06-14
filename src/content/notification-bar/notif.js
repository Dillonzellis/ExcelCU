// Get the current date
var currentDate = new Date();

// Define the end date (June 20th, 2023)
var endDate = new Date("June 19, 2023 23:59:59");

// Check if the current date is before or equal to the end date
if (currentDate <= endDate) {
  // Add the class "hidden" to the element with ID "targetElement"
  const targetElement = document.getElementById("targetElement");
  targetElement.classList.add("block");
}
