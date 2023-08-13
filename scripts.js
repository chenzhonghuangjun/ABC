var currentLanguage = "French"; // Set the default language

function toggleLanguage() {
    var button = document.getElementById('language-button');
    if (currentLanguage === 'French') {
        currentLanguage = 'Vietnam';
    } else {
        currentLanguage = 'French';
    }
    button.innerHTML = currentLanguage;
}

function toggleSearchBox() {
    var searchBox = document.getElementById('search-box');
    if (searchBox.style.display === 'none') {
        searchBox.style.display = 'block';
    } else {
        searchBox.style.display = 'none';
    }
}
