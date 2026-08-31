export default function loadContact() {
  // Get the content div from index.html
  const content = document.getElementById('content');

  // Create and set up elements for the contact section
  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const para = document.createElement('p');
  para.textContent = 'Phone: (123) 456-7890';

  const email = document.createElement('p');
  email.textContent = 'Email: contact@ourrestaurant.com';

  // Add elements to the content div
  content.appendChild(heading);
  content.appendChild(para);
  content.appendChild(email);
}