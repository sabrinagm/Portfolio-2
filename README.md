# Portfolio-2
 Portfolio 2 DIG 4639

For Portfolio 2, I have modified the ToDo App project we previously created. Within the project I have added in a login feature, which requires the user to log in before they have access to the application.

The first new component I created was the Login function, which allows the user to log in only if the password is correct. If the password is incorrect, an error appears. If it is correct, the app welcomes you to the ToDo app.

The second component I have created is a logout function, which returns the user to the login screen when the exit button is clicked.

Both the ToDo list and the Logout component are called within the return statement of the Login component. The Login component is then called within the App.js file.