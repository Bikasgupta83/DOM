# parentElement and parentNode

## `parentElement`

* `parentElement` returns the **parent HTML element** of the selected element.

### Example

```html
<div class="container">
    <p id="text">Hello</p>
</div>
```

```javascript
let text = document.getElementById("text");
console.log(text.parentElement);
```

### Output

```html
<div class="container">
    <p id="text">Hello</p>
</div>
```

### Why is it called `parentElement`?

Because it specifically looks for a parent that is an **HTML Element**.

For example:

```text
<div>       ← Parent Element
    <p>     ← Selected Element
</div>
```

So:

```javascript
text.parentElement
```

moves **one level upward** in the DOM tree.

---

## `parentNode`

* `parentNode` returns the **parent Node** of the selected element.
* A Node can be an **Element, Document, Text, Comment**, etc.

### Example

```html
<div class="container">
    <p id="text">Hello</p>
</div>
```

```javascript
let text = document.getElementById("text");
console.log(text.parentNode);
```

### Output

```html
<div class="container">
    <p id="text">Hello</p>
</div>
```

For normal HTML elements, `parentElement` and `parentNode` usually return the same parent.

---

## Difference Between `parentElement` and `parentNode`

| Property        | Returns                 |
| --------------- | ----------------------- |
| `parentElement` | Parent **HTML Element** |
| `parentNode`    | Parent **DOM Node**     |

### Important Example

The parent of `<html>` is the `Document`.

```javascript
document.documentElement.parentElement;
```

Output:

```javascript
null
```

Because `Document` is **not an Element**.

But:

```javascript
document.documentElement.parentNode;
```

Output:

```text
Document
```

Because `Document` **is a Node**.

---

## Easy Way to Remember

```text
parentElement
       ↓
Parent HTML Element

parentNode
       ↓
Parent DOM Node
```

### Key Point

> **Every Element is a Node, but every Node is not an Element.**

Therefore:

```text
Element ⊂ Node
```

This is why `parentNode` is more general than `parentElement`.
