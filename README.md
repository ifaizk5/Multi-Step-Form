# Multi-Step Form

This project implements a multi-step form using HTML, CSS, and JavaScript. It provides a user-friendly interface for collecting information in a structured manner, with progress tracking and form validation.

## Features

-   **Step-by-Step Interface:** Breaks down the form into multiple steps for better user experience.
-   **Progress Bar:** Visual representation of the user's progress through the form.
-   **Form Validation:** Client-side validation to ensure required fields are filled correctly.
-   **Data Persistence:** Saves entered data in local storage to prevent data loss.
-   **Summary Review:** Displays a summary of the entered information before submission.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## Project Structure

-   `index.html`: Main HTML file containing the form structure.
-   `style.css`: CSS file for styling the form and its elements.
-   `script.js`: JavaScript file for handling form logic, validation, and progress updates.

## Setup Instructions

1.  Clone the repository to your local machine.
2.  Open `index.html` in your browser.

## Customization

-   **Styling:** Modify `style.css` to change the form's appearance.
-   **Steps:** Add or remove steps in `index.html` and update the corresponding JavaScript in `script.js`.
-   **Validation:** Customize the `validateStep` function in `script.js` to add or modify validation rules.
-   **Data Handling:** Update the form submission logic in `script.js` to send the data to your desired backend.

## Code Overview

### HTML (`index.html`)

-   Contains the basic structure of the form, including the different steps, input fields, and buttons.
-   Uses a container with class `form-container` to wrap the form.
-   Includes a progress bar to indicate the current step.
-   Each step is a `div` element with the class `step`.

### CSS (`style.css`)

-   Provides the styling for the form, including colors, fonts, and layout.
-   Uses CSS variables (`:root`) to manage consistent styling values.
-   Includes media queries for responsive design.

### JavaScript (`script.js`)

-   Handles the form's interactive behavior.
-   Uses `localStorage` to save and retrieve form data.
-   The `updateForm` function controls the visibility of the steps and updates the progress bar.
-   The `validateStep` function validates the input fields in each step.
-   The `updateSummary` function generates a summary of the entered information.

## JavaScript Functions

-   `updateForm()`: Updates the visibility of the form steps and the progress bar.
-   `validateStep(stepIndex)`: Validates the input fields in the current step.
-   `updateSummary()`: Updates the summary section with the entered information.

## Local Storage

The project uses `localStorage` to save the entered data, so it persists even if the page is reloaded. Each input field is associated with a key in `localStorage` that matches the input's `id`.

## Form Submission

The form submission is handled by an event listener on the `submit` event. Currently, it displays an alert message and clears the form. In a real application, this is where you would send the data to a server.
