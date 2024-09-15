// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu')
    // Loop through each category and its items in the menu object
    for(const category in menu) {
          // Create an element to represent the category
          const categoryElement = document.createElement('h3')
          // Set the text content of the category element to the category name
          categoryElement.textContent = category;
          // Append the category element to the menu container
          menuContainer.appendChild(categoryElement);
  
          // Create an element to represent a list of items
          const itemList = document.createElement('ul');
  
          // Loop through the items in the category and create list items
          menu[category].forEach(item => {
              // Create a list item element
              const listItems = document.createElement('li');
  
              //content for each list  item
              listItems.textContent = item;
  
              // Attach a click event listener to the list items to add it to the order
              listItems.addEventListener('click', () => addToOrder(item));
  
              // Append the list item to the list of items
              listItems.appendChild(listItems);
  
          });

          // Append the list of itmes to the menu container
          menuContainer.appendChild(itemList);
    }
      

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    // Create a list item for the order
    const  orderItem = document.createElement('li');

    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemList.appendChild(orderItem)
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const total = currentTotal  + 75.50;  // assuming each item costs R75.50


    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = total.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
