// Get the current date
var currentDate = new Date();

// Calculate the week number
var weekNumber = getWeekNumber(currentDate);

// Calculate the start and end dates of the week
var weekStart = getWeekStartDate(currentDate);
var weekEnd = getWeekEndDate(currentDate);

// Format the dates as strings
var startDateString = formatDate(weekStart);
var endDateString = formatDate(weekEnd);

// Display the week number and date range in the div
document.getElementById("weekInfo").textContent = "Week " + weekNumber + ": " + startDateString + " - " + endDateString;

// Function to calculate the week number
function getWeekNumber(date) {
  // Copy date so don't modify original
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  // Return the week number
  return weekNumber;
}

// Function to calculate the start date of the week
function getWeekStartDate(date) {
  var weekStart = new Date(date);
  weekStart.setDate(date.getDate() - date.getDay() + 1); // Set to Monday of the current week
  return weekStart;
}

// Function to calculate the end date of the week
function getWeekEndDate(date) {
  var weekEnd = new Date(date);
  weekEnd.setDate(date.getDate() - date.getDay() + 7); // Set to Sunday of the current week
  return weekEnd;
}

// Function to format the date as "YYYY-MM-DD"
function formatDate(date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return year + "-" + month + "-" + day;
}