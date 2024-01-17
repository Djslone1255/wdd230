// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// set last updated date in footer
const lastupdated = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = lastupdated;