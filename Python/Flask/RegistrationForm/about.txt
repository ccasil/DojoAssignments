Assignment: Registration Form
Create a simple registration page with the following fields:

email
first_name
last_name
password
confirm_password
Here are the validations you must include:

All fields are required and must not be blank
First and Last Name cannot contain any numbers
Password should be more than 8 characters
Email should be a valid email
Password and Password Confirmation should match
When the form is submitted, make sure the user submits appropriate information. If the user did not submit appropriate information, return the error(s) above the form that asks the user to correct the information. 

Message Flashing with Categories
For this, you will need to use flash messages at the very least. You may have to take this one step further and add categories to the flash messages. You can learn that from the flask doc: flash messages with categories

If the form with all the information is submitted properly, simply have it say a message "Thanks for submitting your information."

Ninja Version:
Add the validation that requires a password to have at least 1 uppercase letter and 1 numeric value.

Hacker Version:
Add a birth-date field that must be validated as a valid date and must be from the past.