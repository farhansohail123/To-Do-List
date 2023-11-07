import inquirer from "inquirer"

let todos : string[] = []

 async function createTodo (todos:string[]){
    let ans = await inquirer.prompt({
        type:"list",
        message:"Select an operation",
        name:"Select",
        choices:["add","update","view","delete"]
    })

    if(ans.select == "add"){
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"add item in todo",
            name:"todo",
        });
        todos.push(addTodo.todo)
        console.log(todos)
    }
    if(ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
          message:"Select item for update",
          choices:todos.map(item => item)
        })
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"add item in todo",
            name:"todo",
        })

        let newTodos = todos. filter(val => val !== updateTodo.todo)
        todos = [...newTodos,addTodo.todo]
        console.log(todos)
    }
    if(ans.select == "view"){
        console.log(todos)
    }
    if(ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type:"list",
          message:"Select item for update",
          choices:todos.map(item => item)
        })
        let newTodos = todos. filter(val => val !== deleteTodo.todo)
        todos=[...newTodos]
        console.log(todos)
    }
}


createTodo(todos)

