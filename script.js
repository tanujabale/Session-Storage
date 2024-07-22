function saveData() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('address', address);
    displayData();
}

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

function clearData() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('address');
    alert('Name and Address cleared from Session Storage.');
    displayData();
}

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

displayData();
