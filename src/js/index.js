
// // let list = ['clean kitchen', 'wash the car', 'visit mother']
// // console.log(list);

// // for (let i = 0; i < list.length; i++) {
// //     // list = [];
// //     // console.log(list[i]);
    

// //     let container = document.createElement('div')
// //     let task = document.createElement('p')
// //     let completeBtn = document.createElement('button')

// //     task.innerHTML = list[i]

// //     // container.addEventListener('click', () => {
// //     //     handelClick(cars[i])
// //     // })

// //     container.appendChild(task)
// //     container.appendChild(completeBtn)
// //     document.body.appendChild(container)


// //     completeBtn.addEventListener('click', () => {
// //         console.log('remove');
// //         list.slice(1, 0)
// //     })
// // }



let todos = [
    { value: "do shopping",
    completed: false },
    { value: "clean bedroom", 
    completed: true },
    { value: "wash hands" ,
    completed: false },
    { value: "toast for fridays",
    completed: false  }
];
  
let todoList = document.getElementById("todoList");
let numberOfTodos = document.getElementById("noOfTodos");
let finishedTodoList = document.getElementById("finishedTodoList");
let numberOfTodosCompleted = document.getElementById("noOfTodosCompleted");
let newTask = document.getElementById('inputTodo')
let submitBtn = document.getElementById('push')

  


const createTodo = (todo) => {
  todoList.innerHTML = "";
  finishedTodoList.innerHTML = ""
//   newTask.innerHTML = "hello"
//   submitBtn.addEventListener('click', newTodo())
  
  todo.forEach((todo) => {
    let list = document.createElement("li");
    let spanWithValue = document.createElement("span");
    let removeBtn = document.createElement("button");
    removeBtn.className = 'removebtn'

    //   const todoId = Number(todo.id);        
    //   console.log();
    if (todo.completed === false) {
    spanWithValue.innerText = todo.value;
    removeBtn.innerText = "X";  
    removeBtn.addEventListener("click", () => {
        // removeTodo(id);
      toggleTodo(todo)
    //   checkTodo(todoId)
    });
  
      list.appendChild(spanWithValue);
      list.appendChild(removeBtn);
  
      todoList.appendChild(list);
    }
    else {
        spanWithValue.innerText = todo.value;
        removeBtn.innerText = "Done";  
        removeBtn.addEventListener("click", () => {
          todos.push(todo)
          
        });
    
        list.appendChild(spanWithValue);
        list.appendChild(removeBtn);
        removeBtn.className = 'completedBtn'
    
        finishedTodoList.appendChild(list);
    }

    });
    numberOfTodos.innerText = todos.length;
    
    console.log(todos);
    submitBtn.addEventListener('click', (  ) => {
        newTodo()
        // createTodo()
    
        console.log('button works');
    })
};
function newTodo(){
    todos.push({
        value : newTask.value,
        completed : false
    })

    // createTodo()
    console.log(todos);
}

// createTodo()
  

//   function checkTodo(todoId) {
//       todos = todos.map((todo, index) => ({
//         ...todo,
//         checked: index === todoId ? !todo.checked : todo.checked,
//       }));
    
//     //   renderTodos();
//     //   localStorage.setItem('todos', JSON.stringify(todos));
//     }
    const toggleTodo = (todo) => {
        console.log(todo);
        todo.completed = true
        
        
    }
    //   const removeTodo = (index) => {
    //     todos.splice(index, 1);
    //     // todos.push(index[i])
    //     createTodo(todos);
    //     console.log(todos[index].completed)
    
    // };


  window.addEventListener("load", () => {
    createTodo(todos);

});

//   const form = document.getElementById('todoform');
// const todoInput = document.getElementById('newtodo');
// const todosListEl = document.getElementById('todos-list');
// const notificationEl = document.querySelector('.notification');

// // VARS
// let todos = JSON.parse(localStorage.getItem('todos')) || [];
// let EditTodoId = -1;

// // 1st render
// renderTodos();

// // FORM SUBMIT
// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   saveTodo();
//   renderTodos();
//   localStorage.setItem('todos', JSON.stringify(todos));
// });

// // SAVE TODO
// function saveTodo() {
//   const todoValue = todoInput.value;

//   // check if the todo is empty
//   const isEmpty = todoValue === '';

//   // check for duplicate todos
//   const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());

//   if (isEmpty) {
//     showNotification("Todo's input is empty");
//   } else if (isDuplicate) {
//     showNotification('Todo already exists!');
//   } else {
//     if (EditTodoId >= 0) {
//       todos = todos.map((todo, index) => ({
//         ...todo,
//         value: index === EditTodoId ? todoValue : todo.value,
//       }));
//       EditTodoId = -1;
//     } else {
//       todos.push({
//         value: todoValue,
//         checked: false,
//         color: '#' + Math.floor(Math.random() * 16777215).toString(16),
//       });
//     }

//     todoInput.value = '';
//   }
// }

