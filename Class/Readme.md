# DOM `className` and `classList`

JavaScript provides two important ways to work with HTML classes:

* `className`
* `classList`

They are used to **read, add, remove, replace, and toggle CSS classes dynamically**.

---

# 1. What is a Class?

A class is an HTML attribute used to apply CSS styles or identify elements.

```html
<div class="container card active">
    Hello
</div>
```

This element has three classes:

```text
container
card
active
```

JavaScript can manipulate these classes using `className` and `classList`.

---

# 2. `className`

`className` is used to **read or modify the complete `class` attribute**.

## Reading Classes

```js
const box = document.querySelector("#box");

console.log(box.className);
```

If the HTML is:

```html
<div id="box" class="container card">
```

Output:

```text
container card
```

`className` returns the complete class attribute as a **string**.

---

## Modifying Classes

```js
box.className = "container active";
```

If the previous classes were:

```text
container card
```

they become:

```text
container active
```

The `card` class is removed because `className` replaces the **entire class attribute**.

### Key Point

> `className` works with the entire class attribute as a string.

---

# 3. `classList`

`classList` provides methods for manipulating **individual classes**.

```js
box.classList
```

For:

```html
<div class="container card active">
```

`classList` allows you to work with:

```text
container
card
active
```

individually.

The most important methods are:

```text
add()
remove()
toggle()
contains()
replace()
```

---

# 4. `classList.add()`

Adds one or more classes.

```js
box.classList.add("active");
```

Existing classes are preserved.

You can also add multiple classes:

```js
box.classList.add("active", "selected", "highlight");
```

---

# 5. `classList.remove()`

Removes one or more classes.

```js
box.classList.remove("active");
```

Only the specified class is removed. Other classes remain unchanged.

---

# 6. `classList.toggle()`

`toggle()` adds a class if it does not exist and removes it if it already exists.

```js
box.classList.toggle("active");
```

The behavior is:

```text
Class doesn't exist
        ↓
      add()

Class exists
        ↓
     remove()
```

This is commonly used for:

* Dark/light themes
* Mobile menus
* Dropdowns
* Accordions
* Show/hide elements
* Active buttons

---

# 7. `classList.contains()`

`contains()` checks whether an element has a particular class.

```js
box.classList.contains("active");
```

It returns:

```text
true
```

or:

```text
false
```

Think of it as:

> "Does this element contain this class?"

---

# 8. `classList.replace()`

`replace()` replaces one class with another.

## Syntax

```js
element.classList.replace("oldClass", "newClass");
```

For example:

```js
box.classList.replace("light", "dark");
```

The `light` class is replaced with `dark`.

---

# 9. `className` vs `classList`

This is an important interview question.

| Feature                       | `className`            | `classList`                |
| ----------------------------- | ---------------------- | -------------------------- |
| Read classes                  | ✅                      | ✅                          |
| Add individual class          | ❌                      | ✅                          |
| Remove individual class       | ❌                      | ✅                          |
| Toggle class                  | ❌                      | ✅                          |
| Check class                   | ❌                      | ✅                          |
| Replace class                 | ❌                      | ✅                          |
| Data type                     | String                 | DOMTokenList               |
| Works with individual classes | ❌                      | ✅                          |
| Best for                      | Entire class attribute | Dynamic class manipulation |

### Main Difference

```text
className
    ↓
Entire class attribute
    ↓
String
```

```text
classList
    ↓
Individual classes
    ↓
add / remove / toggle / contains / replace
```

---

# 10. Why `classList` is Usually Better for Dynamic Classes

Suppose an element has:

```html
<div class="container card shadow">
```

You want to add `active`.

Using `className`:

```js
box.className = "container card shadow active";
```

You have to know and rewrite all existing classes.

Using `classList`:

```js
box.classList.add("active");
```

The existing classes are automatically preserved.

Therefore:

> Use `classList` when you need to manipulate individual classes.

---

# 11. Example 1 — Theme Toggle

HTML:

```html
<button id="themeBtn">Toggle Theme</button>

<div id="box">
    Hello Bikas
</div>
```

CSS:

```css
.dark {
    background-color: black;
    color: white;
}
```

JavaScript:

```js
const button = document.querySelector("#themeBtn");
const box = document.querySelector("#box");

button.addEventListener("click", () => {
    box.classList.toggle("dark");
});
```

### How it works

First click:

```text
dark class doesn't exist
        ↓
toggle()
        ↓
dark class added
```

Second click:

```text
dark class exists
        ↓
toggle()
        ↓
dark class removed
```

---

# 12. Example 2 — Mobile Menu Toggle

HTML:

```html
<button id="menuBtn">☰</button>

<nav id="menu" class="menu">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>
```

CSS:

```css
.menu {
    display: none;
}

.menu.open {
    display: block;
}
```

JavaScript:

```js
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});
```

### Flow

```text
Click button
     ↓
classList.toggle("open")
     ↓
open doesn't exist → Add open
     ↓
Menu appears

Click again
     ↓
open exists → Remove open
     ↓
Menu disappears
```

---

# 13. All `classList` Methods

| Method       | Purpose          |
| ------------ | ---------------- |
| `add()`      | Add class        |
| `remove()`   | Remove class     |
| `toggle()`   | Add/remove class |
| `contains()` | Check class      |
| `replace()`  | Replace class    |

---

# 14. Easy Memory Trick

```text
add      → ADD
remove   → REMOVE
toggle   → ADD ↔ REMOVE
contains → CHECK
replace  → CHANGE
```

---

# 15. Interview Questions

## Q1. What is `className`?

> `className` is used to read or modify the complete `class` attribute of an element. It works with the class attribute as a string.

---

## Q2. What is `classList`?

> `classList` provides methods for manipulating individual CSS classes of an element, such as `add()`, `remove()`, `toggle()`, `contains()`, and `replace()`.

---

## Q3. What is the difference between `className` and `classList`?

> `className` works with the entire class attribute as a string, while `classList` allows individual classes to be added, removed, toggled, checked, or replaced.

---

## Q4. What does `toggle()` do?

> `toggle()` adds a class when it doesn't exist and removes it when it already exists.

---

# 16. Quick Revision

```text
className
    ↓
Entire class attribute
    ↓
String
```

```text
classList
    ↓
Individual classes
    ↓
add()
remove()
toggle()
contains()
replace()
```

### Final Memory Line

> **`className` = entire class string**
> **`classList` = individual class manipulation**
