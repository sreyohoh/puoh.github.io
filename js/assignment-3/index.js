document.addEventListener('DOMContentLoaded', (event) => {
    loadTheme();
});
function saveTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        const themeSelector = document.getElementById('theme-selector');
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }
}
function applyTheme(theme) {
    document.body.className = theme;
    // const welcomeMessage = document.getElementById('welcome-message');
    if (theme === 'dark') {
        // welcomeMessage.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    } else {
        // welcomeMessage.style.color = 'black';
        document.body.style.backgroundColor = 'white';
    }
}
async function getProducts() {
    var apiUrl = "https://dummyjson.com/products";
    var prodObj = await fetch(apiUrl);
    var products = await prodObj.json();
    var productsList = products["products"];

    var table = "<table class=\"table table-striped align-middle table-hover\">";
    table += "<thead><tr> <th scope=\"col\">Image</th><th scope=\"col\">Title</th><th scope=\"col\">price</th> <th scope=\"col\">Brand</th><th scope=\"col\">Category</th><th scope=\"col\">Availability Status</th></tr></thead>";
    table += "<tbody>";
    for(var product in productsList) {
        var productsList = products["products"];
        var proObj = productsList[product];
        table += "<tr>";
        table += "<td> <img width='100px' src='" + proObj.thumbnail + "'></td>";
        table += "<td> " + proObj.title + "</td>";
        table += "<td> " + proObj.price + "</td>";
        table += "<td> " + proObj.brand + "</td>";
        table += "<td> " + proObj.category + "</td>";
        table += "<td> " + proObj.availabilityStatus + "</td>";
        table += "</tr>";

    }
    table += "</tbody>";
    table += "</table>";

    document.getElementById("product").innerHTML = table;
}

getProducts();