// Function to save the name and address to Session Storage
function saveData() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('address', address);
    displayData();
}

// Function to retrieve the name and address from Session Storage
function getData() {
    const name = sessionStorage.getItem('name');
    const address = sessionStorage.getItem('address');
    if (name && address) {
        alert(`Stored Name is: ${name}\nStored Address is: ${address}`);
        displayData();
    } else {
        alert('No Name or Address found in Session Storage.');
    }
}

// Function to clear the name and address from Session Storage
function clearData() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('address');
    alert('Name and Address cleared from Session Storage.');
    displayData();
}

// Function to display the name and address if they are stored
function displayData() {
    const name = sessionStorage.getItem('name');
    const address = sessionStorage.getItem('address');
    const greeting = document.getElementById('greeting');
    const addressDisplay = document.getElementById('addressDisplay');
    if (name) {
        greeting.textContent = `Hello, ${name}!`;
    } else {
        greeting.textContent = '';
    }
    if (address) {
        addressDisplay.textContent = `Your Address is: ${address}`;
    } else {
        addressDisplay.textContent = '';
    }
}

// Display the name and address on page load if they are already stored
displayData();
