const shopping = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];

function submit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };

    items.push(item);
    // clear the form
    e.target.reset();
    // fire off a custom event that will tell anyone else that the items habe been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    const html = items
        .map(
            item =>
                `<li class="shopping-item">
                <input value="${item.id}" type="checkbox"
                    ${item.complete ? 'checked' : ''}>
                <span class="itemName">${item.name}</span>
                <button aria-label="Remove ${item.name}"
                    value="${item.id}">&times;</button>
                
            </li>`
        )
        .join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    const localItems = JSON.parse(localStorage.getItem('items'));

    if (localItems && localItems.length) {
        items.push(...localItems);
    }

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function deleteItem(id) {
    items = items.filter(item => item.id != id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    const itemRef = items.find(item => item.id == id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shopping.addEventListener('submit', submit);

list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        deleteItem(e.target.value);
    }

    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(e.target.value);
    }
});

restoreFromLocalStorage();
