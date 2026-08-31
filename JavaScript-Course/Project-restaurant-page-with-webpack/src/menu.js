// Loads the menu page content into the #content div
export default function loadMenu() {
  const content = document.getElementById('content');

  // Create and set up the heading
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';

  // Create the menu list
  const list = document.createElement('ul');
  const items = ['Spaghetti Bolognese', 'Margherita Pizza', 'Caesar Salad'];

  // Add each menu item to the list
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  // Append heading and list to the content div
  content.appendChild(heading);
  content.appendChild(list);
}