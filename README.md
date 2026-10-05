## Student Task Manager

A basic web-based **Student Task Manager** designed to help students organize and keep track of their academic tasks, assignments, projects, and deadlines.

---

## Project Description

The Student Task Manager is a simple and user-friendly web application that allows students to add and manage their academic tasks.

Students can add a task by entering its title, subject, due date, and priority. Tasks can then be marked as completed, deleted, or filtered according to their status.

The project was developed as part of the **Git & GitHub Collaborative Assignment** to demonstrate practical use of Git, GitHub, branches, commits, pull requests, issues, and collaborative development.

---

## Team Members

| Name           | Role      |
| -------------- | --------- |
| Abiha Fatima   | Developer |
| Rida Fatima    | Developer |

---

## Features

- Add new student tasks
- Enter task title and subject
- Set a due date
- Search Tasks
- Set task priority:

  - Low
  - Medium
  - High
- Mark tasks as completed
- Delete tasks
- Filter tasks:

  - All
  - Pending
  - Completed
- Display total number of tasks
- Display pending tasks
- Display completed tasks
- Responsive interface for different screen sizes

---

## Technologies

The project was created using only three files:

- **HTML** – Structure of the application
- **CSS** – Styling and responsive layout
- **JavaScript** – Task management functionality

### Files

```
student-task-manager/
│
├── index.html
├── style.css
└── script.js
```


---

## Git Workflow

We followed a basic collaborative Git workflow during development.

```
main
  │
  |- feature/task-form
  │
  |- feature/task-style
  │
  |- feature/tasksearch
  |
  |- merge-conflict
  |
  |- Student2conflict

```

The general workflow was:

1. Create initial Files. 
2. Create a GitHub Issue.
3. Create a feature branch.
4. Implement the assigned feature.
5. Test the changes locally.
6. Stage the changes using Git.
7. Commit the changes with a meaningful commit message.
8. Push the branch to GitHub.
9. Create a Pull Request.
10. Review the changes.
11. Merge the Pull Request into *main*.

---

## Branches

The following branches were used during development:

| Branch                 | Purpose                       |
| ---------------------- | ----------------------------- |
| `main`                 | Final stable version          |
| `feature/task-form` | Task form functionality |
| `feature/task-style`      | User interface and styling    |
| `feature/task-search`  | Task search functionality  |
| `merge-conflict`  | Used to create a merge conflict|
| `student2conflict`  | Used to create a merge conflict|


---

## Git Commands Demonstrated

The following Git commands were used during the assignment:

### Initialize Repository

```
git init
```

### Check Repository Status

```
git status
```

### Add Files

```
git add .
```

### Commit Changes

```
git commit -m "Add student task manager"
```

### View Commit History

```
git log
```

### Create a Branch

```
git branch feature/task-form
```

### Switch Branch

```
git switch feature/task-form
```

### Create and Switch to a Branch

```
git switch -c feature/task-form
```

### Push a Branch

```
git push -u origin feature/task-form
```

### Pull Changes

```
git pull origin main
```

### Merge a Branch

```
git merge feature/task-manager
```

### View Branches

```
git branch
```

### View Remote Repository

```
git remote -v
```

### View Differences

```
git diff
```

### Git Stash

```
git stash
git stash list
git stash pop
```
### Git Reset

```
git add .
git commit -m ""
git log --oneline
git reset --soft HEAD~1
git status
```
### Git Merge
```
git merge <branch>
```
---

## GitHub Features Demonstrated

The project demonstrates the following GitHub features:

* GitHub Repository
* Repository README
* Issues
* Feature branches
* Pull Requests
* Pull Request review
* Issue-based development
* Linking Pull Requests with Issues
* Commit history
* Branch management
* Repository collaboration
* Tags
* Releases
* GitHub project evidence

---

## How to Run

No installation or additional dependencies are required.

### Step 1: Clone the repository

```
git clone <repository-url>
```

### Step 2: Open the project

Navigate to the project folder:

```
cd student-task-manager
```

### Step 3: Run the application

Open:

```
index.html
```

in a web browser.


---

## Screenshots

### Home Page

![Student Task Manager Home Page](screenshots\homepage.png)

### Adding a Task

![Adding a Task](screenshots\addingtask.png)

### Completed Tasks

![Completed Tasks](screenshots\completedtask.png)

---

## Version History

### Version 1.0.0

**Initial Release**

- Created Student Task Manager interface
- Added task creation functionality
- Added subject and due date fields
- Added priority selection
- Added task completion functionality
- Added task deletion
- Added task filtering
- Added task searching
- Added responsive styling
- Completed GitHub collaborative workflow

---

## Contributors

### Abiha Fatima

- Developed the Student Task Manager
- Worked on HTML structure
- Implemented Task form Feature
- Implemented JavaScript task functionality
- Worked on Git/GitHub workflow

### Rida Fatima

- Worked on styling the task manager
- implemented functionality using JavaScript
- Implemented Task search Feature
- Participated in GitHub collaboration and testing

---

## Conclusion

The Student Task Manager demonstrates how a small web application can be developed collaboratively using **Git and GitHub**.

Through this project, we practiced version control, branching, commits, GitHub Issues, Pull Requests, collaboration, releases, and maintaining project documentation.
