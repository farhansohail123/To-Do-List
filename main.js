import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    let ans = await inquirer.prompt({
        type: "list",
        message: "Select an operation",
        name: "Select",
        choices: ["add", "update", "view", "delete"]
    });
    if (ans.select == "add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "add item in todo",
            name: "todo",
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select == "update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "Select item for update",
            choices: todos.map(item => item)
        });
        let addTodo = ;
    }
    if (ans.select == "view") { }
    if (ans.select == "delete") { }
}
createTodo(todos);
