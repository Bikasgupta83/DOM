# DOM Insert Methods

These methods are used to **insert elements or content into the DOM**.

The main methods are:

* `append()`
* `appendChild()`
* `prepend()`
* `before()`
* `after()`

---

## 1. `append()`

Adds content at the **end of an element**.

```js
parent.append(child);
```

Example:

```js
const div = document.querySelector(".container");

const p = document.createElement("p");
p.textContent = "Hello";

div.append(p);
```

### Key Point

```text
append → Add at the end
```

---

## 2. `appendChild()`

Adds a **Node at the end** of an element.

```js
parent.appendChild(child);
```

Example:

```js
const div = document.querySelector(".container");

const p = document.createElement("p");
p.textContent = "Hello";

div.appendChild(p);
```

### Key Point

```text
appendChild → Add one Node at the end
```

### `append()` vs `appendChild()`

| `append()`             | `appendChild()`        |
| ---------------------- | ---------------------- |
| Can add multiple items | Adds one Node          |
| Can add text           | Requires a Node        |
| Returns `undefined`    | Returns the added Node |

---

## 3. `prepend()`

Adds content at the **beginning of an element**.

```js
parent.prepend(child);
```

Example:

```js
const div = document.querySelector(".container");

const p = document.createElement("p");
p.textContent = "First";

div.prepend(p);
```

### Key Point

```text
prepend → Add at the beginning
```

---

## 4. `before()`

Adds content **before a particular element**.

```js
element.before(newElement);
```

Example:

```js
const target = document.querySelector("#target");

const p = document.createElement("p");
p.textContent = "Before";

target.before(p);
```

### Key Point

```text
before → Insert before the selected element
```

---

## 5. `after()`

Adds content **after a particular element**.

```js
element.after(newElement);
```

Example:

```js
const target = document.querySelector("#target");

const p = document.createElement("p");
p.textContent = "After";

target.after(p);
```

### Key Point

```text
after → Insert after the selected element
```

---

# Quick Comparison

| Method          | Where it inserts        |
| --------------- | ----------------------- |
| `append()`      | End of parent           |
| `appendChild()` | End of parent           |
| `prepend()`     | Beginning of parent     |
| `before()`      | Before selected element |
| `after()`       | After selected element  |

---

# Easy Way to Remember

```text
Parent
│
├── prepend()
│
├── Child
│
├── Child
│
└── append()


before() → [NEW] [TARGET]

after()  → [TARGET] [NEW]
```

## Summary

```text
append()       → End
appendChild()  → End
prepend()      → Beginning
before()       → Before element
after()        → After element
```
