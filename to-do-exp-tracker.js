// script.js

// ----- To-Do List -----
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addTodoBtn = document.getElementById("add-todo");

addTodoBtn.addEventListener("click", () => {
    const task = todoInput.value.trim();
    if(task !== "") {
        const li = document.createElement("li");
        li.textContent = task;
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => li.remove();
        li.appendChild(delBtn);
        todoList.appendChild(li);
        todoInput.value = "";
    }
});

// ----- Expense Tracker -----
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let total = 0;

document.getElementById("add-expense").addEventListener("click", () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if(name !== "" && !isNaN(amount) && amount > 0){
        const li = document.createElement("li");
        li.textContent = `${name}: ₹${amount.toFixed(2)}`;
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => {
            total -= amount;
            totalAmount.textContent = total.toFixed(2);
            li.remove();
        };
        li.appendChild(delBtn);
        expenseList.appendChild(li);

        total += amount;
        totalAmount.textContent = total.toFixed(2);

        expenseName.value = "";
        expenseAmount.value = "";
    }
});
