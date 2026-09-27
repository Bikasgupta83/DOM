# DOM Events

Events allow JavaScript to respond to actions performed by the user or browser.

Examples:

* Clicking a button
* Typing in an input
* Submitting a form
* Moving the mouse
* Pressing a keyboard key

---

# 1. Event Basics

An **event** is an action or occurrence that happens in the browser.

Common events:

| Event       | Description              |
| ----------- | ------------------------ |
| `click`     | User clicks an element   |
| `dblclick`  | User double-clicks       |
| `mouseover` | Mouse enters an element  |
| `mouseout`  | Mouse leaves an element  |
| `keydown`   | Keyboard key is pressed  |
| `keyup`     | Keyboard key is released |
| `input`     | Input value changes      |
| `change`    | Input value is changed   |
| `submit`    | Form is submitted        |

---

# 2. Event Handler

An **event handler** is a function that runs when an event occurs.

```js
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

Flow:

```text
Event occurs
    ↓
Event handler runs
    ↓
JavaScript executes
```

---

# 3. `addEventListener()`

`addEventListener()` is used to register an event handler.

### Syntax

```js
element.addEventListener("event", handler);
```

### Example

```js
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```

## Why use `addEventListener()`?

It allows multiple handlers for the same event.

```js
button.addEventListener("click", () => {
    console.log("First");
});

button.addEventListener("click", () => {
    console.log("Second");
});
```

Both handlers can execute.

---

# 4. Event Object

When an event occurs, the browser provides an **event object** containing information about that event.

```js
button.addEventListener("click", (event) => {
    console.log(event);
});
```

Important properties:

```text
event
├── type
├── target
└── currentTarget
```

---

# 5. `event.type`

`event.type` tells you **which event occurred**.

```js
button.addEventListener("click", (event) => {
    console.log(event.type);
});
```

Output:

```text
click
```

---

# 6. `event.target`

`event.target` refers to the **element that actually triggered the event**.

```js
container.addEventListener("click", (event) => {
    console.log(event.target);
});
```

If a button inside the container is clicked:

```text
event.target
      ↓
button
```

---

# 7. `event.currentTarget`

`event.currentTarget` refers to the **element where the event listener is attached**.

```js
container.addEventListener("click", (event) => {
    console.log(event.currentTarget);
});
```

If the button inside the container is clicked:

```text
event.target
      ↓
button

event.currentTarget
      ↓
container
```

---

# `target` vs `currentTarget`

| `target`                         | `currentTarget`                    |
| -------------------------------- | ---------------------------------- |
| Element that triggered the event | Element where listener is attached |
| Can be a child element           | Refers to the listener's element   |
| `event.target`                   | `event.currentTarget`              |

### Easy Memory Trick

```text
target
→ What triggered the event?

currentTarget
→ Where is the listener attached?
```

---

# 8. `preventDefault()`

`preventDefault()` prevents the browser's **default behavior** for an event.

### Link Example

Normally, clicking a link navigates to its URL.

```js
link.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("Navigation stopped");
});
```

### Form Example

Normally, submitting a form performs the browser's default form submission.

```js
form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form handled by JavaScript");
});
```

### Key Point

```text
preventDefault()
→ Stop the browser's default behavior
```

It does **not** stop the event itself.

---

# 9. `stopPropagation()`

`stopPropagation()` prevents an event from continuing through the DOM's event propagation path.

Example structure:

```text
Parent
└── Child
```

If the child is clicked, the event can propagate toward the parent.

```js
child.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Child clicked");
});
```

The event will not continue propagating to the parent.

### Key Point

```text
stopPropagation()
→ Stop event propagation
```

---

# `preventDefault()` vs `stopPropagation()`

| `preventDefault()`             | `stopPropagation()`                             |
| ------------------------------ | ----------------------------------------------- |
| Stops default browser behavior | Stops event propagation                         |
| Used with links/forms etc.     | Used with parent/child event flow               |
| Does not stop propagation      | Does not automatically prevent default behavior |
| `event.preventDefault()`       | `event.stopPropagation()`                       |

### Easy Memory Trick

```text
preventDefault()
→ Stop browser action

stopPropagation()
→ Stop event movement
```

---

# Quick Revision

```text
EVENT
↓
Something happens
(click, submit, keydown, input...)
```

```text
addEventListener()
↓
Listen for an event
```

```text
event.type
↓
Which event happened?
```

```text
event.target
↓
Element that triggered the event
```

```text
event.currentTarget
↓
Element where listener is attached
```

```text
preventDefault()
↓
Stop default browser behavior
```

```text
stopPropagation()
↓
Stop event propagation
```

## Most Important Points

```text
target
→ What triggered the event?

currentTarget
→ Where is the listener attached?

preventDefault()
→ Stop the browser's default behavior.

stopPropagation()
→ Stop the event from propagating.
```
