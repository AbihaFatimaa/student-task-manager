const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

const filters = document.querySelectorAll(".filter");

let tasks = [];

let currentFilter = "all";


// Add a new task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("taskTitle").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    const task = {
        id: Date.now(),
        title: title,
        subject: subject,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    taskForm.reset();

    displayTasks();
    updateStats();
});


// Display tasks
function displayTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty">
                No tasks to show.
            </div>
        `;

        return;
    }

    filteredTasks.forEach(task => {

        const taskElement = document.createElement("div");

        taskElement.className = "task";

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        taskElement.innerHTML = `
            <div class="task-left">

                <input
                    type="checkbox"
                    class="task-checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                >

                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>
                        ${task.subject} • Due: ${formatDate(task.dueDate)}
                    </p>
                </div>

            </div>

            <div class="task-right">

                <span class="priority ${task.priority}">
                    ${task.priority}
                </span>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})"
                >
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskElement);
    });
}


// Mark task as completed
function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    displayTasks();
    updateStats();
}


// Delete task
function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    displayTasks();
    updateStats();
}


// Update dashboard statistics
function updateStats() {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;

    totalTasks.textContent = total;
    pendingTasks.textContent = pending;
    completedTasks.textContent = completed;
}


// Change filter
filters.forEach(filter => {

    filter.addEventListener("click", function() {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        displayTasks();
    });
});


// Format date
function formatDate(date) {

    const parts = date.split("-");

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}