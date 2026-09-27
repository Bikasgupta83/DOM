# DOM: `children` and `childNodes`

In JavaScript DOM, `children` and `childNodes` are used to access the nodes that are directly inside an HTML element.

The main difference is:

* `children` → returns **only HTML elements**
* `childNodes` → returns **all types of nodes**

---

## 1. `children`

The `children` property returns an `HTMLCollection` containing only the **element nodes** inside a parent element.

### Example

```html
<div id="parent">
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

```javascript
const parent = document.getElementById("parent");

console.log(parent.children);
```

### Output

```text
HTMLCollection
    h1
    p
```

You can access individual elements using an index:

```javascript
console.log(parent.children[0]); // <h1>Hello</h1>
console.log(parent.children[1]); // <p>Welcome</p>
```

### Important

`children` does **not** include:

* Text nodes
* Comments
* Whitespace/new-line text nodes

---

## 2. `childNodes`

The `childNodes` property returns a `NodeList` containing **all nodes** directly inside an element.

These can include:

* Element nodes
* Text nodes
* Comment nodes

### Example

```html
<div id="parent">
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

```javascript
const parent = document.getElementById("parent");

console.log(parent.childNodes);
```

Because the HTML contains spaces and new lines, the browser can create text nodes for them.

The result can look conceptually like:

```text
NodeList
    #text
    h1
    #text
    p
    #text
```

---

## 3. Why does `childNodes` contain `#text`?

Consider:

```html
<div>
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

The spaces and line breaks between the elements are treated as **text nodes**.

Therefore:

```javascript
const parent = document.querySelector("div");

console.log(parent.childNodes);
```

may contain:

```text
#text
<h1>
#text
<p>
#text
```

---

## 4. `nodeType`

Every DOM node has a `nodeType`.

### Common `nodeType` values

| nodeType | Meaning       |
| -------: | ------------- |
|      `1` | Element Node  |
|      `3` | Text Node     |
|      `8` | Comment Node  |
|      `9` | Document Node |

Example:

```javascript
const parent = document.getElementById("parent");

console.log(parent.childNodes[0].nodeType);
```

If the first node is whitespace/text:

```text
3
```

That means it is a **Text Node**.

For an element:

```javascript
console.log(parent.children[0].nodeType);
```

Output:

```text
1
```

---

# `children` vs `childNodes`

| Feature          | `children`                  | `childNodes`                |
| ---------------- | --------------------------- | --------------------------- |
| Returns          | `HTMLCollection`            | `NodeList`                  |
| Element nodes    | ✅                           | ✅                           |
| Text nodes       | ❌                           | ✅                           |
| Comment nodes    | ❌                           | ✅                           |
| Whitespace nodes | ❌                           | ✅                           |
| Used when        | You only need HTML elements | You need all types of nodes |

---

# Example

```html
<div id="parent">

    <h1>Hello</h1>

    <p>Welcome</p>

    <!-- This is a comment -->

</div>
```

### Using `children`

```javascript
const parent = document.getElementById("parent");

console.log(parent.children);
```

Conceptually:

```text
HTMLCollection
    h1
    p
```

The comment and whitespace are ignored.

### Using `childNodes`

```javascript
console.log(parent.childNodes);
```

Conceptually:

```text
NodeList
    #text
    h1
    #text
    p
    #text
    #comment
    #text
```

---

# `firstChild` vs `firstElementChild`

This is an important related concept.

### `firstChild`

Returns the first **node**.

```javascript
console.log(parent.firstChild);
```

It can return a text node because of whitespace/new lines.

### `firstElementChild`

Returns the first **HTML element**.

```javascript
console.log(parent.firstElementChild);
```

Output:

```html
<h1>Hello</h1>
```

---

# `lastChild` vs `lastElementChild`

### `lastChild`

Returns the last node:

```javascript
console.log(parent.lastChild);
```

It can be a text node.

### `lastElementChild`

Returns the last HTML element:

```javascript
console.log(parent.lastElementChild);
```

Output:

```html
<p>Welcome</p>
```

---

# Quick Revision

```javascript
parent.children
```

➡️ Only HTML elements

```javascript
parent.childNodes
```

➡️ All child nodes

```javascript
parent.firstElementChild
```

➡️ First HTML element

```javascript
parent.lastElementChild
```

➡️ Last HTML element

```javascript
parent.firstChild
```

➡️ First node, which can be a text node

```javascript
parent.lastChild
```

➡️ Last node, which can be a text node

---

# Interview Questions

### 1. What is the difference between `children` and `childNodes`?

`children` returns only element nodes, while `childNodes` returns all child nodes including text and comment nodes.

### 2. What does `children` return?

An `HTMLCollection`.

### 3. What does `childNodes` return?

A `NodeList`.

### 4. Why does `childNodes` sometimes contain `#text`?

Because whitespace and line breaks in HTML can be represented as text nodes.

### 5. How can you get only the first child element?

```javascript
parent.firstElementChild;
```

### 6. How can you get the first node regardless of its type?

```javascript
parent.firstChild;
```

---

## One-Line Memory Trick

> **`children` = Elements only**
> **`childNodes` = Everything**
