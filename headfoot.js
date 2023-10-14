class Header extends HTMLElement {
    connectedCallback() {
this.innerHTML = `
<header>
    <link rel="stylesheet" href="/sharedcss/fontawesome/css/all.css"> <!-- Imports Font Awesome-->
    <link rel="stylesheet" href="/home/CSS/homescreen.css"> <!-- Imports Home CSS-->
    <link rel="stylesheet" href="/home/CSS/searchbar.css"> <!-- Imports searchbar CSS-->
    <link rel="stylesheet" href="/home/CSS/featured.css"> <!-- Imports featured CSS-->
    <div class="logo">
        <a href="/Home"><img src="/Logo.png" alt="Netflix Logo"> </a><!-- Adds Logo -->
    </div>
    <nav>
        <ul> <!-- Adds Navigation Bar -->
            <li><a href="/">Home</a></li> <!-- Adds Home Nav Button -->
            <li><a href="/home/#TV">TV Shows</a></li> <!-- Adds TV Shows Nav Button -->
            <li><a href="/movies">Movies</a></li><!-- Adds Movies Nav Button -->
            <li><a href="/home/#Picks">Netflix Picks</a></li><!-- Adds Picks Nav Button -->
        </ul>
    </nav>
    <div class="search-box"> <!-- Adds Search Bar -->
        <button class="btn-search"><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" placeholder="Type to Search...">
        </div>
</header>
`;
}
}
class Footer extends HTMLElement {
connectedCallback() {
this.innerHTML = `  
<link rel="stylesheet" href="/sharedcss/fontawesome/css/all.css"> <!-- Imports Font Awesome-->
<link rel="stylesheet" href="/home/CSS/homescreen.css"> <!-- Imports Home CSS-->
<link rel="stylesheet" href="/home/CSS/searchbar.css"> <!-- Imports searchbar CSS-->
<link rel="stylesheet" href="/home/CSS/featured.css"> <!-- Imports featured CSS-->  
<div class="footer" style="font-family: Arial, sans-serif;">
    <div class="footer-content">
        <div class="footer-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="footer-info">
            <p>&copy; <span id="year"></span> BizFlix</p>
        </div>
    </div>
</div>    
`;
}
}
class CSS extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `  
    <link rel="stylesheet" href="/sharedcss/fontawesome/css/all.css"> <!-- Imports Font Awesome-->
    <link rel="stylesheet" href="/home/CSS/homescreen.css"> <!-- Imports Home CSS-->
    <link rel="stylesheet" href="/home/CSS/searchbar.css"> <!-- Imports searchbar CSS-->
    <link rel="stylesheet" href="/home/CSS/featured.css"> <!-- Imports featured CSS-->  
    `;
    }
}
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('CSSImport', CSS);