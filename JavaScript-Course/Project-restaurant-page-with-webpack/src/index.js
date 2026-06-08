import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Clears the content of the main section
function clearContent() {
  const content = document.getElementById('content');
  content.textContent = '';
}

// Selects all navigation buttons
const tabs = document.querySelectorAll('nav button');

// Sets the active tab by adding the 'active' class to the clicked tab and removing it from others
function setActiveTab(clickedTab) {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  clickedTab.classList.add('active');
}

// Event listener for Home tab: clears content, loads Home page, sets active tab
document.getElementById('home-tab').addEventListener('click', (e) => {
  clearContent();
  loadHome();
  setActiveTab(e.target);
});

// Event listener for Menu tab: clears content, loads Menu page, sets active tab
document.getElementById('menu-tab').addEventListener('click', (e) => {
  clearContent();
  loadMenu();
  setActiveTab(e.target);
});

// Event listener for Contact tab: clears content, loads Contact page, sets active tab
document.getElementById('contact-tab').addEventListener('click', (e) => {
  clearContent();
  loadContact();
  setActiveTab(e.target);
});

// On initial load: set Home tab as active and load Home page content
setActiveTab(document.getElementById('home-tab'));
loadHome();