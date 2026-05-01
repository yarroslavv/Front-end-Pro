const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const list = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodo(todo, index) {
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.completed ? ' todo-item--checked' : '');

    li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span class="todo-item__description">${todo.text}</span>
        <button class="todo-item__delete">Видалити</button>
    `;

    const checkbox = li.querySelector('input');
    const deleteBtn = li.querySelector('button');

    checkbox.addEventListener('change', () => {
        todos[index].completed = checkbox.checked;
        saveTodos();
        render();
    });

    deleteBtn.addEventListener('click', () => {
        todos.splice(index, 1);
        saveTodos();
        render();
    });

    return li;
}

function render() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        list.append(createTodo(todo, index));
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    todos.push({
        text: text,
        completed: false
    });

    saveTodos();
    render();
    input.value = '';
});

render();