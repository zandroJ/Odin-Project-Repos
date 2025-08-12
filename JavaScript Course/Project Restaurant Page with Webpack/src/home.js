// Loads the home page content into the #content div
export default function loadHome() {
  const content = document.getElementById('content');

  // Create and set up the heading
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant!';
  
  // Create and set up the description paragraph
  const para = document.createElement('p');
  para.textContent = 'Enjoy our cozy atmosphere and delicious meals.';

  // Append elements to the content div
  content.appendChild(heading);
  content.appendChild(para);
}