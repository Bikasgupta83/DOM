# DOM Remove & Replace

These methods are used to **remove or replace elements** from the DOM.

## Methods

```text
Remove
├── remove()
└── removeChild()

Replace
├── replaceWith()
└── replaceChild()
```

---

# 1. `remove()`

Removes the selected element from the DOM.

### Syntax

```js
element.remove();
```

### Example

```js
const text = document.querySelector("#text");

text.remove();
```

### Key Point

```text
remove() → Removes itself
```

---

# 2. `removeChild()`

Removes a child element from its parent.

### Syntax

```js
parent.removeChild(child);
```

### Example

```js
const container = document.querySelector(".container");
const text = document.querySelector("#text");

container.removeChild(text);
```

### Key Point

```text
removeChild() → Parent removes child
```

---

# `remove()` vs `removeChild()`

| `remove()`            | `removeChild()`             |
| --------------------- | --------------------------- |
| Called on the element | Called on the parent        |
| Simple syntax         | Requires parent and child   |
| `element.remove()`    | `parent.removeChild(child)` |

---

# 3. `replaceWith()`

Replaces the selected element with another element.

### Syntax

```js
oldElement.replaceWith(newElement);
```

### Example

```js
const oldElement = document.querySelector("#old");

const newElement = document.createElement("p");
newElement.textContent = "New Text";

oldElement.replaceWith(newElement);
```

### Key Point

```text
replaceWith() → Element replaces itself
```

---

# 4. `replaceChild()`

Replaces a child element with another element.

### Syntax

```js
parent.replaceChild(newChild, oldChild);
```

### Example

```js
const container = document.querySelector(".container");
const oldElement = document.querySelector("#old");

const newElement = document.createElement("p");
newElement.textContent = "New Text";

container.replaceChild(newElement, oldElement);
```

### Important

The order is:

```js
parent.replaceChild(newChild, oldChild);
```

**New element first, old element second.**

---

# `replaceWith()` vs `replaceChild()`

| `replaceWith()`        | `replaceChild()`                |
| ---------------------- | ------------------------------- |
| Called on old element  | Called on parent                |
| Simple syntax          | Requires parent and child       |
| `old.replaceWith(new)` | `parent.replaceChild(new, old)` |

---

# Remove vs Replace

### Remove

```js
element.remove();
```

The element is deleted.

```text
OLD → ❌
```

### Replace

```js
element.replaceWith(newElement);
```

The old element is replaced.

```text
OLD → NEW
```

---

# Quick Revision

```text
REMOVE
│
├── remove()
│   └── element.remove()
│
└── removeChild()
    └── parent.removeChild(child)


REPLACE
│
├── replaceWith()
│   └── oldElement.replaceWith(newElement)
│
└── replaceChild()
    └── parent.replaceChild(newElement, oldElement)
```

## Easy Memory Trick

```text
remove()
→ I remove myself.

removeChild()
→ Parent removes child.

replaceWith()
→ I replace myself.

replaceChild()
→ Parent replaces child.
```
