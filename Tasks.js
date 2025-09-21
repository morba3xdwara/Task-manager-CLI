function main(){
console.log("=== Task Manager ===");
console.log("1. Add Task");
console.log("2. View Tasks");
console.log("3. Mark Complete");
console.log("4. Remove Task");
console.log("5. change Priority");
console.log("6. Exit");
console.log("====================");

let choice = parseInt(prompt("choose what you want to do"));

switch(choice){
    case 1: 
        addTask();
    break;

    case 2:
        viewTasks();
    break;

    case 3:
        markComplete();
    break;

    case 4:
        removeTask();
    break;

    case 5:
        changePriority();
    break;
    case 6:
    break;

    default:
        console.log("Invalid option");
        main();
}
}

let id = 1;
let tasks = [];

function addTask(){
    let description = prompt("Enter task name")
    let priority = parseInt(prompt("Add task priority (from 1 to 3 wich 3 is the strongest)"))

    while (priority > 3 || priority < 1){
        console.log("Enter a number betwen 1 and 3")
        priority = parseInt(prompt("Add task priority (from 1 to 3 wich 3 is the strongest)"))
    }
    let newTask = {
    id: id,
    description: description,
    complete: false,
    priority: priority
    };

    tasks.push(newTask);

    console.log(`Task added: ${description}`)
    console.log(`Task id: ${id}, Priority: ${priority}`)

    id++; 
    main();
}

function viewTasks(){
    console.log("=== Your tasks ===")

    if (tasks.length === 0){
        console.log("You have no tasks to do, add tasks first.")
        return;
    }
    
    tasks.forEach(newTask => {
        let status = newTask.complete ? "✅" : "⏳";
        let priority = "⭐".repeat(newTask.priority);
        console.log(`${newTask.id}. [${status}] ${newTask.description} ${priority}`);
    });
    main();
}

function markComplete(){
    console.log("Which task to complete?")
    let taskId = parseInt(prompt("Enter task id that you want to complete"))
    let taskToComplete = tasks.find(newTask => newTask.id === taskId)

    if (taskToComplete){
        taskToComplete.complete = true
        console.log(`✅ ${taskToComplete.description} marked as complete!`)
    }else{
        console.log(`The id ${taskId} is not valid`)
    }
    main();
}

function removeTask(){
    console.log("Which task to delete?")
    let taskId = parseInt(prompt("Enter task id that you want to delete")) 
    let taskToDelete = tasks.find(newTask => newTask.id === taskId)

    if (taskToDelete){
        tasks.splice((taskId - 1),1)
        console.log(`${taskToDelete.description} has been deleted`)
    }else{
        console.log(`The id ${taskId} is not valid`)
    }
    main();
}

function changePriority(){
    console.log("Which task to change it's priority?")
    let taskId = parseInt(prompt("Enter task id that you want to change it's priority"))
    let taskToChange = tasks.find(newTask => newTask.id === taskId)
    priority = parseInt(prompt("Add task priority (from 1 to 3 wich 3 is the strongest)"))


    while (priority > 3 || priority < 1){
        console.log("Enter a number betwen 1 and 3")
        priority = parseInt(prompt("Add task priority (from 1 to 3 wich 3 is the strongest)"))
    }

    if (taskToChange){
        taskToChange.priority = priority;
        let stars = "⭐".repeat(taskToChange.priority);
        console.log(`${taskToChange.description} has changed it's priority to ${stars}`)
    }else{
        console.log(`The id ${taskId} is not valid`)
    }
    main();
}