document.addEventListener('DOMContentLoaded', function () {
    // Get references to the forms and input elements
    const newGroupForm = document.getElementById('new-group-form');
    const addExpenseForm = document.getElementById('add-expense-form');

    // Event listener for creating a new group
    newGroupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const groupName = document.getElementById('group-name').value;
        // You can handle the creation of a new group here
        console.log('Create a new group:', groupName);
        // Add your logic to create a new group (e.g., send data to server)
    });

    // Event listener for adding an expense
    addExpenseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const expenseName = document.getElementById('expense-name').value;
        const totalExpense = document.getElementById('total-expense').value;
        const expenseType = document.getElementById('expense-type').value;
        const friendsList = document.getElementById('friends-list').value;
        const splitCount = document.getElementById('split-count').value;

        // You can handle the addition of an expense here
        console.log('Add an expense:', expenseName, totalExpense, expenseType, friendsList, splitCount);
        // Add your logic to add an expense (e.g., send data to server)
    });
});
