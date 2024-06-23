const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

// Function to add a new chapter to the list
button.addEventListener('click', function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });
    }
});
