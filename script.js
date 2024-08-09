// Get references to the DOM elements
const list = document.getElementById('shopping-list');
const input = document.getElementById('item-input');
const button = document.getElementById('add-item');

// Function to handle adding new items
function addItem() {
    // Get the current value of the input
    const itemText = input.value.trim();
    
    // If input is empty, do nothing
    if (itemText === '') return;

    // Clear the input
    input.value = '';

    // Create new elements
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    // Set the content and attributes
    span.textContent = itemText;
    deleteButton.textContent = 'Delete';

    // Append span and delete button to the list item
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    // Append the list item to the list
    list.appendChild(listItem);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    // Focus the input for the next item
    input.focus();
}

// Attach the function to the button's click event
button.addEventListener('click', addItem);

// Optional: Add support for Enter key to add items
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});
