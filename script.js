const monthNameEl = document.getElementById("month-name");

const dayNameEl = document.getElementById("day-name");

const dayNumberEl = document.getElementById("day-number");

const yearNameEl = document.getElementById("year-name");

let date = new Date();
let month = date.getMonth()

monthNameEl.innerText = date.toLocaleString("en",{ month:"long"});

dayNameEl.innerText = date.toLocaleString("en",{ weekday:"long"});

dayNumberEl.innerText = date.getDate();
yearNameEl.innertText = date.getFullYear();
