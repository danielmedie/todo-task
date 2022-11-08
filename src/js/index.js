
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
  todo.forEach((todo) => {
    let list = document.createElement("li");
    let spanWithValue = document.createElement("span");
    let removeBtn = document.createElement("button");
    removeBtn.className = 'removebtn'

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
    submitBtn.addEventListener('click', () => {
        newTodo()
        // createTodo()
    
        console.log('button works');
    })
};

function checkTodo() {

    
}
function newTodo(){
    todos.push({
        value : newTask.value,
        completed : false
    })

    // createTodo()
    console.log(todos);
}

    const toggleTodo = (todo) => {
        console.log(todo);
        todo.completed = true
        
        
    }


  window.addEventListener("load", () => {
    createTodo(todos);

});

