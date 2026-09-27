# Event Flow & Event Delegation

Event flow explains **how an event travels through the DOM**.

Event delegation uses **event bubbling** to handle events from child elements using a parent element.

---

# 1. Event Flow

When an event occurs on an element, it travels through different phases.

```text
Capturing Phase
       ↓
     Target
       ↓
Bubbling Phase
```

Example:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

When the button is clicked, the event travels through the DOM toward the button and then back through its parents.

---

# 2. Capturing Phase

During the **capturing phase**, the event travels from the parent toward the target.

```text
Parent
  ↓
Child
```

By default, event listeners run during the bubbling phase.

To listen during capturing:

```js
element.addEventListener("click", handler, true);
```

The `true` enables the capturing phase.

You can also write:

```js
element.addEventListener("click", handler, {
    capture: true
});
```

### Key Point

```text
Capturing
→ Parent → Child
```

---

# 3. Bubbling Phase

During the **bubbling phase**, the event travels from the target back toward its parents.

Example:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

If the button is clicked:

```text
Child
  ↑
Parent
```

The parent handler can run because the click event bubbles upward.

### Example

```js
parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});
```

Clicking the button can produce:

```text
Child
Parent
```

### Key Point

```text
Bubbling
→ Child → Parent
```

---

# 4. Complete Event Flow

The simplified event flow is:

```text
        Capturing
            ↓
         Parent
            ↓
          Child
            ↓
          Target
            ↓
         Child
            ↓
        Bubbling
            ↓
         Parent
```

The actual DOM path can include elements such as:

```text
Window → Document → HTML → Body → Parent → Target
```

---

# 5. `stopPropagation()`

`stopPropagation()` stops the event from continuing through the DOM.

```js
child.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Child");
});
```

The event will not continue to the parent through that propagation path.

### Key Point

```text
stopPropagation()
→ Stop event propagation
```

---

# 6. Event Delegation

**Event delegation** means attaching one event listener to a parent and using it to handle events from its children.

Example:

```html
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>
```

Instead of adding listeners to every `<li>`, add one listener to the `<ul>`:

```js
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
    console.log(event.target.textContent);
});
```

Clicking `Apple`:

```text
Apple
```

Clicking `Mango`:

```text
Mango
```

---

# 7. Why Does Event Delegation Work?

Event delegation works because of **event bubbling**.

```text
Child clicked
     ↓
Event bubbles
     ↓
Parent receives event
     ↓
event.target identifies child
```

The parent can therefore handle events from its children.

---

# 8. `target` and `currentTarget` in Delegation

Consider:

```html
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
</ul>
```

```js
list.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

When `Apple` is clicked:

```text
event.target
→ <li>Apple</li>

event.currentTarget
→ <ul id="list">
```

### Remember

```text
target
→ Element that triggered the event

currentTarget
→ Element where listener is attached
```

---

# 9. Dynamic Elements

Event delegation is especially useful when elements are created dynamically.

Suppose a new `<li>` is added later:

```js
const li = document.createElement("li");
li.textContent = "Orange";

list.append(li);
```

You don't need to add a new click listener to `Orange`.

The parent listener already handles it:

```text
New Child
    ↓
Click
    ↓
Event bubbles
    ↓
Parent listener
```

---

# 10. Why Use Event Delegation?

Event delegation is useful because:

* One listener can handle many children.
* It works with dynamically created elements.
* It reduces repetitive event-listener code.
* It is useful for lists, tables, menus, todo apps, and similar UI components.

---

# Quick Revision

## Capturing

```text
Parent
  ↓
Child
```

```js
element.addEventListener("click", handler, true);
```

---

## Bubbling

```text
Child
  ↓
Parent
```

```js
element.addEventListener("click", handler);
```

---

## Event Delegation

```text
Child clicked
     ↓
Event bubbles
     ↓
Parent listener
     ↓
event.target
     ↓
Identify child
```

---

## Important Methods

```text
addEventListener()
→ Register event handler

stopPropagation()
→ Stop event propagation

event.target
→ Element that triggered the event

event.currentTarget
→ Element where listener is attached
```

## Main Concept

> **Event delegation works because events bubble from child elements to their parent elements.**
