// const Swal = require('sweetalert2')

// Define todos


let todos = [
	{
		value: "do shopping",
		desc : 'Buy Milk',
		completed: false
	},
	{
		value: "clean bedroom",
		completed: true
	},
	{
		value: "wash hands",
		completed: false
	},
	{
		value: "toast for fridays",
		completed: false
	}
];

// Define Separate Lists
let lists = {
	incompleted: {
        listEl : document.getElementById("todoList"),
		countEl : document.getElementById("noOfTodos"),
		todos: []
	},
	completed: {
		listEl : document.getElementById("finishedTodoList"),
		countEl : document.getElementById("noOfTodosCompleted"),
		todos : []
	}
}

/**
 * List Setup
 */

// Setup Lists
const setupTodoLists = () => {
	// Clear Lists
	Object.entries(lists).forEach(l => { 
		let [key, data] = l
		data.listEl.innerHTML = "";
	})

	// Sort Items into List
	todos.forEach((todo) => {
		addItemToList(todo)
	})
}

// Setup Todo Item Element
const setupTodoItem = (todo) => {
	let { value, desc } = todo

	// ListItem Template
	let itemTemplate = document.getElementById("list-item-template").innerHTML;
	let listItem = htmlToElement(itemTemplate);

	// find Elements
	let valueEl = listItem.querySelector(".todo-label");
	let descEl = listItem.querySelector(".todo-desc");
	let buttonEl = listItem.querySelector("button");

	// Set Text
	valueEl.innerText = value
	descEl.innerText = desc

	// Setup Button listener after created
	buttonEl.addEventListener("click", () => { toggleTodo(todo) });

	// Return El to append
	return listItem;
}


/**
 * List Changes
 */

const addItemToList = (todo) => {
	// Choose list passed on if its completed
	let listKey = todo.completed ? 'completed' : 'incompleted'
	// get data
	let listConfig = lists[listKey]

	// Setup and Append
	let item = setupTodoItem({
		value: todo.value,
		desc: todo.desc || '',
		completed : todo.completed
	})
	listConfig.listEl.appendChild(item);
	// Update List
	listConfig.todos.push(todo)

	// Set Count
	updateListCount({
		countEl: listConfig.countEl,
		count : listConfig.todos.length
	})
}

const removeItemFromList = (todo) => { 
	// Choose list passed on if its completed
	let listKey = todo.completed ? 'completed' : 'incompleted'

	// get data
	let listConfig = lists[listKey]

	// Get List Items
	let items = listConfig.listEl.querySelectorAll('.todo-label')

	// Remove From list using value
	items.forEach(i => { 
		if (i.textContent == todo.value) {
			i.closest('li').remove()
			return false;
		}
	})

	// Update List
	listConfig.todos = listConfig.todos.filter(t => t.value != todo.value)
	
	// Set Count
	updateListCount({
		countEl: listConfig.countEl,
		count : listConfig.todos.length
	})

}

const updateListCount = ({ countEl, count }) => { 
	countEl.innerText = count;
}

const toggleTodo = (todo) => {
	removeItemFromList(todo)
	// Swap Value we we add to correct list
	todo.completed = !todo.completed
	// Add to New List
	addItemToList(todo)
}

const newTodo = () => {
	// Get Value
	let newTask = document.getElementById('inputTodo')
	let newTaskDesc = document.getElementById('inputTodoDesc')
	// Alert if No Value
	if (!newTask.value) {
		// alert('No todos created');
        Swal.fire('No todos created')
        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        //   })
		return;
	}

	// Check if Todo already exists
	let valueExists = false;
	let items = lists.incompleted.listEl.querySelectorAll('.todo-label')
	items.forEach(i => { 
		if (i.textContent == newTask.value) {
			valueExists = true
			return false;
		}
	})
	if (valueExists) {
		// alert('Todo already exists. Please input a different todo');
        Swal.fire('This todo alredy exists')
        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        //   })
		return;
	}

	// Add
	addItemToList({
		value: newTask.value,
		desc : newTaskDesc.value || '',
		completed: false
	})

	// Clear
	newTask.value = ''
	newTaskDesc.value = ''
}


/**
 * Helpers
 */

// Helper function to turn template into elemnet
const htmlToElement = (htmlString) => {
    var template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.firstChild;
}


/**
 * Setup Listeners
 */

// Create Initial Todo lists on load
window.addEventListener("load", () => { setupTodoLists() });

// Listen for New Button
document.getElementById('todoform').addEventListener('submit', (evt) => { 
	evt.preventDefault()
	newTodo()
})
