# DOM Projects Roadmap

This repository contains beginner-friendly JavaScript projects designed to strengthen **DOM manipulation, Events, Forms, Browser APIs, and Web Storage**.

The projects are arranged from **easy → intermediate** so that each project builds on concepts learned in the previous one.

---

# 📚 Learning Path

```text
DOM Basics
    ↓
DOM + Events
    ↓
DOM + Forms
    ↓
DOM + Arrays/Objects
    ↓
DOM + localStorage
    ↓
Complete DOM Projects
```

---

# 🟢 Level 1 — DOM Basics

## 1. Counter App

### Description

Build a simple counter where the user can increase, decrease, and reset a number.

### Features

* Increase counter
* Decrease counter
* Reset counter
* Display current count

### Concepts

```text
querySelector()
addEventListener()
textContent
click event
Variables
Functions
```

### Difficulty

⭐ Beginner

---

## 2. Color Changer

### Description

Create a button that changes the background color of the page.

### Features

* Change background color
* Generate random colors
* Display the current color

### Concepts

```text
DOM selection
click event
style
classList
Math.random()
```

### Difficulty

⭐ Beginner

---

## 3. Digital Clock

### Description

Build a real-time digital clock.

### Features

* Display hours
* Display minutes
* Display seconds
* Update automatically

### Concepts

```text
Date
setInterval()
DOM manipulation
textContent
```

### Difficulty

⭐ Beginner

---

## 4. Character Counter

### Description

Create a textarea that displays the number of characters entered by the user.

### Features

* Count characters
* Update count while typing
* Set a maximum character limit

### Concepts

```text
input event
textarea
value
length
textContent
```

### Difficulty

⭐ Beginner

---

# 🟡 Level 2 — DOM + Events

## 5. Todo List

### Description

Create a Todo application where users can add and remove tasks.

### Features

* Add task
* Delete task
* Mark task as completed
* Clear tasks

### Concepts

```text
createElement()
append()
remove()
addEventListener()
classList
input.value
```

### Difficulty

⭐⭐ Beginner

---

## 6. FAQ Accordion

### Description

Create an FAQ section where clicking a question displays or hides its answer.

### Features

* Open answer
* Close answer
* Toggle questions

### Concepts

```text
click event
classList
DOM traversal
Event handling
```

### Difficulty

⭐⭐ Beginner

---

## 7. Modal Popup

### Description

Create a popup/modal that opens and closes using buttons.

### Features

* Open modal
* Close modal
* Close using a close button
* Close when clicking outside the modal

### Concepts

```text
click
classList
event.target
stopPropagation()
```

### Difficulty

⭐⭐ Beginner

---

## 8. Tabs Component

### Description

Create a tab interface where clicking a tab displays different content.

### Features

* Multiple tabs
* Active tab
* Different content for each tab

### Concepts

```text
Events
classList
data-* attributes
DOM manipulation
```

### Difficulty

⭐⭐ Beginner

---

## 9. Image Gallery

### Description

Build an image gallery where clicking thumbnails changes the main image.

### Features

* Main image
* Thumbnail images
* Next image
* Previous image

### Concepts

```text
click event
src attribute
DOM manipulation
Arrays
```

### Difficulty

⭐⭐ Beginner

---

# 🟠 Level 3 — Forms

## 10. Registration Form

### Description

Build a registration form with client-side validation.

### Features

* Name validation
* Email validation
* Mobile validation
* Password validation
* Display validation errors

### Concepts

```text
form
submit event
preventDefault()
input.value
FormData
Validation
```

### Difficulty

⭐⭐ Intermediate Beginner

---

## 11. Login Form

### Description

Create a login form with basic validation.

### Features

* Email validation
* Password validation
* Show/hide password
* Error messages

### Concepts

```text
Forms
Events
Validation
input.type
classList
```

### Difficulty

⭐⭐ Beginner

---

## 12. Quiz App

### Description

Build a multiple-choice quiz application.

### Features

* Display questions
* Display options
* Select answer
* Next question
* Calculate score
* Display final score

### Concepts

```text
Arrays
Objects
DOM creation
Events
Conditional statements
Functions
```

### Difficulty

⭐⭐⭐ Intermediate

---

# 🔵 Level 4 — DOM + Data

## 13. Expense Tracker

### Description

Create an application for adding and tracking expenses.

### Features

* Add expense
* Delete expense
* Display expense list
* Calculate total
* Display individual amounts

Example:

```text
Food       ₹500
Travel     ₹200
Shopping   ₹800

Total      ₹1500
```

### Concepts

```text
Forms
Arrays
Objects
createElement()
append()
remove()
Array methods
Calculations
```

### Difficulty

⭐⭐⭐ Intermediate

---

## 14. Notes App

### Description

Create a simple notes application.

### Features

* Add note
* Edit note
* Delete note
* Display notes

### Concepts

```text
DOM
Forms
Events
Arrays
Objects
CRUD
```

### Difficulty

⭐⭐⭐ Intermediate

---

# 🟣 Level 5 — DOM + localStorage

## 15. Todo App + localStorage

### Description

Upgrade the Todo List by storing tasks in `localStorage`.

### Features

* Add task
* Delete task
* Complete task
* Save tasks
* Load tasks after refresh

### Concepts

```text
DOM
Events
Arrays
Objects
localStorage
JSON.stringify()
JSON.parse()
```

### Difficulty

⭐⭐⭐ Intermediate

---

## 16. Notes App + localStorage

### Description

Upgrade the Notes App so notes remain after refreshing the page.

### Features

* Add notes
* Edit notes
* Delete notes
* Save notes
* Load notes

### Concepts

```text
CRUD
DOM
Events
localStorage
JSON
Arrays
Objects
```

### Difficulty

⭐⭐⭐ Intermediate

---

## 17. Dark/Light Theme

### Description

Create a theme switcher that remembers the user's selected theme.

### Features

* Dark mode
* Light mode
* Save selected theme
* Restore theme after refresh

### Concepts

```text
classList
click event
localStorage
getItem()
setItem()
```

### Difficulty

⭐⭐ Beginner

---

## 18. Expense Tracker + localStorage

### Description

Upgrade the Expense Tracker so expenses remain available after refreshing the page.

### Features

* Add expense
* Delete expense
* Calculate total
* Save expenses
* Load expenses
* Clear all expenses

### Concepts

```text
Forms
DOM
Arrays
Objects
localStorage
JSON.stringify()
JSON.parse()
```

### Difficulty

⭐⭐⭐ Intermediate

---

# 🔴 Level 6 — Final DOM Project

## 19. Shopping Cart

### Description

Build a complete shopping cart using JavaScript and DOM manipulation.

### Features

* Display products
* Add product to cart
* Remove product
* Increase quantity
* Decrease quantity
* Calculate subtotal
* Calculate total
* Store cart in localStorage

Example:

```text
Products

Laptop        ₹50,000    [Add Cart]
Mouse         ₹500       [Add Cart]
Keyboard      ₹1,000     [Add Cart]

------------------------------

Cart

Laptop       ₹50,000   Qty: 1
Mouse        ₹500      Qty: 2

Total: ₹51,000
```

### Concepts

```text
DOM
Events
Event Delegation
Arrays
Objects
Array methods
localStorage
JSON
Calculations
CRUD
```

### Difficulty

⭐⭐⭐⭐ Intermediate

---

# 📊 Project Progress Tracker

| #  | Project                   | Main Concepts          | Status |
| -- | ------------------------- | ---------------------- | ------ |
| 1  | Counter App               | DOM + Events           | ⬜      |
| 2  | Color Changer             | DOM + classList        | ⬜      |
| 3  | Digital Clock             | Date + setInterval     | ⬜      |
| 4  | Character Counter         | Input Events           | ⬜      |
| 5  | Todo List                 | DOM CRUD               | ⬜      |
| 6  | FAQ Accordion             | Events + classList     | ⬜      |
| 7  | Modal Popup               | Events + DOM           | ⬜      |
| 8  | Tabs Component            | Events + DOM           | ⬜      |
| 9  | Image Gallery             | DOM + Arrays           | ⬜      |
| 10 | Registration Form         | Forms + Validation     | ⬜      |
| 11 | Login Form                | Forms + Events         | ⬜      |
| 12 | Quiz App                  | Arrays + Objects + DOM | ⬜      |
| 13 | Expense Tracker           | DOM + Arrays + Objects | ⬜      |
| 14 | Notes App                 | CRUD + DOM             | ⬜      |
| 15 | Todo + localStorage       | DOM + Storage          | ⬜      |
| 16 | Notes + localStorage      | CRUD + Storage         | ⬜      |
| 17 | Dark/Light Theme          | DOM + Storage          | ⬜      |
| 18 | Expense Tracker + Storage | DOM + Storage          | ⬜      |
| 19 | Shopping Cart             | Complete DOM Project   | ⬜      |

---

# 🎯 Recommended Order

Don't build all 19 projects at once.

Follow this progression:

```text
1. Counter
      ↓
2. Color Changer
      ↓
3. Character Counter
      ↓
4. Todo List
      ↓
5. FAQ Accordion
      ↓
6. Modal
      ↓
7. Registration Form
      ↓
8. Quiz App
      ↓
9. Expense Tracker
      ↓
10. Todo + localStorage
      ↓
11. Notes + localStorage
      ↓
12. Shopping Cart
```

---

# 🧠 Skills You'll Build

After completing these projects, you should be comfortable with:

### DOM

```text
querySelector()
querySelectorAll()
createElement()
append()
prepend()
remove()
textContent
innerText
classList
style
attributes
```

### Events

```text
click
dblclick
input
change
submit
keydown
keyup
mouseover
mouseenter
```

### Event Flow

```text
Capturing
Bubbling
Event Delegation
preventDefault()
stopPropagation()
```

### Forms

```text
input
select
checkbox
radio
textarea
FormData
Validation
```

### Storage

```text
localStorage
sessionStorage
setItem()
getItem()
removeItem()
clear()
JSON.stringify()
JSON.parse()
```

### Browser APIs

```text
document.cookie
location
history
IntersectionObserver
MutationObserver
```

---

# 🚀 Final Goal

The goal is not simply to complete projects.

For every project:

```text
Understand
    ↓
Build yourself
    ↓
Get stuck
    ↓
Debug
    ↓
Fix
    ↓
Refactor
    ↓
Add one new feature
```

Try to build the first version **without copying a tutorial line-by-line**.

For example, after completing the Todo List, add your own features:

```text
Search tasks
Filter completed tasks
Edit task
Task counter
Clear completed
localStorage
```

This will strengthen your JavaScript and DOM fundamentals before moving deeper into React.
