# DOM Events

DOM Events allow JavaScript to respond to user actions and browser events.

In this topic, we learn:

* Keyboard Events
* Mouse Events
* Pointer Events
* Input and Change Events
* Page Lifecycle Events

---

# 1. Keyboard Events

Keyboard events happen when the user interacts with the keyboard.

## `keydown`

Fires when a key is pressed.

```js
element.addEventListener("keydown", (e) => {
    console.log(e.key);
});
```

## `keyup`

Fires when a key is released.

```js
element.addEventListener("keyup", (e) => {
    console.log(e.key);
});
```

### Event Flow

```text
Press Key
   ↓
keydown
   ↓
Release Key
   ↓
keyup
```

---

# 2. Keyboard Shortcuts

Keyboard events can be used to create shortcuts.

```js
document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key === "s") {

        e.preventDefault();

        console.log("Save Shortcut");

    }

});
```

Common modifier properties:

```text
e.ctrlKey
e.shiftKey
e.altKey
e.metaKey
```

You can use them to detect key combinations.

---

# 3. Mouse Events

Mouse events handle interactions with the mouse.

## `click`

Fires when an element is clicked.

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

## `dblclick`

Fires when an element is double-clicked.

```js
button.addEventListener("dblclick", () => {
    console.log("Double Click");
});
```

## `mousedown`

Fires when the mouse button is pressed.

```js
button.addEventListener("mousedown", () => {
    console.log("Mouse Down");
});
```

## `mouseup`

Fires when the mouse button is released.

```js
button.addEventListener("mouseup", () => {
    console.log("Mouse Up");
});
```

---

# 4. `mouseover`

`mouseover` fires when the pointer moves onto an element.

```js
box.addEventListener("mouseover", () => {
    console.log("Mouse Over");
});
```

`mouseover` **bubbles**, so it can also be triggered when moving between an element and its descendants.

---

# 5. `mouseenter`

`mouseenter` fires when the pointer enters an element.

```js
box.addEventListener("mouseenter", () => {
    console.log("Mouse Entered");
});
```

Unlike `mouseover`, `mouseenter` does not bubble.

### `mouseover` vs `mouseenter`

| `mouseover`                             | `mouseenter`                             |
| --------------------------------------- | ---------------------------------------- |
| Bubbles                                 | Does not bubble                          |
| Can react to descendant transitions     | Does not react to descendant transitions |
| Useful when bubbling behavior is needed | Useful for simple hover/enter behavior   |

---

# 6. Pointer Events

Pointer Events provide a common event system for different pointing devices.

They can handle:

```text
Mouse
Touch
Pen / Stylus
```

Common pointer events:

```text
pointerdown
pointerup
pointermove
pointerenter
pointerleave
```

Example:

```js
box.addEventListener("pointerdown", () => {
    console.log("Pointer Down");
});
```

### Pointer Event Flow

```text
Pointer pressed
      ↓
pointerdown

Pointer moves
      ↓
pointermove

Pointer released
      ↓
pointerup
```

---

# 7. Input Event

The `input` event fires whenever the value changes while the user is editing an input.

```js
textInput.addEventListener("input", (e) => {
    console.log(e.target.value);
});
```

For example, while typing:

```text
B
Bi
Bik
Bika
Bikas
```

the `input` event fires as the value changes.

### Common Uses

* Live search
* Live validation
* Character counters
* Password strength indicators
* Search suggestions

---

# 8. Change Event

The `change` event fires when a value has been changed and the change is committed.

For a `<select>`:

```js
city.addEventListener("change", (e) => {
    console.log(e.target.value);
});
```

### `input` vs `change`

| `input`                               | `change`                                         |
| ------------------------------------- | ------------------------------------------------ |
| Fires while the value is being edited | Fires when the change is committed               |
| Good for live updates                 | Good for finalized changes                       |
| Commonly used with text inputs        | Commonly used with select, checkbox, radio, etc. |

### Easy Memory Trick

```text
input
→ Value is changing

change
→ Value has changed
```

---

# 9. `DOMContentLoaded`

`DOMContentLoaded` fires when the HTML has been completely parsed and the DOM is ready.

```js
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is Ready");
});
```

Simplified flow:

```text
HTML starts parsing
       ↓
HTML parsed
       ↓
DOM created
       ↓
DOMContentLoaded
```

It is useful when JavaScript needs to work with DOM elements after the document has been parsed.

---

# 10. `load`

The `load` event fires after the page and its dependent resources have finished loading.

```js
window.addEventListener("load", () => {
    console.log("Everything is Loaded");
});
```

The page may need to load resources such as:

```text
HTML
CSS
Images
Other dependent resources
```

---

# 11. `DOMContentLoaded` vs `load`

| `DOMContentLoaded`            | `load`                                |
| ----------------------------- | ------------------------------------- |
| DOM has been parsed           | Page/resources have finished loading  |
| Mainly concerned with the DOM | Includes dependent resources          |
| Usually occurs earlier        | Usually occurs later                  |
| Useful when DOM is ready      | Useful when resources are also needed |

### Easy Memory Trick

```text
DOMContentLoaded
→ DOM is ready

load
→ Everything is loaded
```

---

# Quick Revision

## Keyboard

```text
keydown
→ Key pressed

keyup
→ Key released
```

## Mouse

```text
click
→ Click

dblclick
→ Double click

mousedown
→ Mouse button pressed

mouseup
→ Mouse button released

mouseover
→ Pointer moves onto element

mouseenter
→ Pointer enters element
```

## Pointer

```text
pointerdown
pointerup
pointermove
pointerenter
pointerleave
```

Works with:

```text
Mouse + Touch + Pen
```

## Input & Change

```text
input
→ Value changes during editing

change
→ Value change is committed
```

## Page Lifecycle

```text
DOMContentLoaded
→ DOM is ready

load
→ Page and dependent resources are loaded
```

---

# Important Differences

```text
keydown vs keyup
→ Press vs Release

mouseover vs mouseenter
→ Bubbles vs Does not bubble

input vs change
→ Live value change vs Committed change

DOMContentLoaded vs load
→ DOM ready vs Resources loaded
```

---

# Practice Order

Practice these events one at a time:

```text
1. keydown
2. keyup
3. Keyboard shortcuts

4. click
5. dblclick
6. mousedown
7. mouseup
8. mouseover
9. mouseenter

10. pointerdown
11. pointerup
12. pointermove
13. pointerenter
14. pointerleave

15. input
16. change

17. DOMContentLoaded
18. load
```

> **Main idea:** DOM events allow JavaScript to respond to keyboard actions, mouse/pointer interactions, input changes, and browser page lifecycle events.
