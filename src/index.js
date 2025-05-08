import "./styles.css";
import { todayReport } from "./today.js";
import { tomorrowReport } from "./tomorrow.js";
import { todayDate, tomorrowDate } from "./date.js";
import { locationToday } from "./locationToday.js";
import { locationTom } from "./locationTom.js";

document.addEventListener("DOMContentLoaded", () => {
  todayReport();
  tomorrowReport();
  todayDate();
  tomorrowDate();

  const search = document.querySelector(".magnify-glass");
  search.addEventListener("click", () => {
    locationToday();
    locationTom();
  });

  const userInput = document.querySelector(".text");
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      userInput.blur();
      locationToday();
      locationTom();
    }
  });
});
