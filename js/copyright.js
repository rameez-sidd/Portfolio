const copyRight = document.querySelector("#copyright-section");
console.log(copyRight.innerText);

function getCurrentYear() {
    let currentDate = new Date();
    return currentDate.getFullYear();
}

copyRight.innerHTML = `&copy; ${getCurrentYear()} by Rameez Siddiqui | All Rights Reserved`;