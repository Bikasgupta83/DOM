# DOM Traversal: Parent, Child & Sibling

**DOM Traversal** means moving from one DOM node or element to another.

The DOM is structured like a tree:

```text
                    Parent
                      |
          ┌───────────┼───────────┐
          ↓           ↓           ↓
        Child       Child       Child
          ↑           ↑           ↑
       Sibling      Sibling     Sibling
```

JavaScript provides different properties to move through this DOM tree.

---

# 1. Child Traversal

Child traversal means moving from a **parent element to its children**.

Consider:

```html
<div id="parent">
    <h1>Heading</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>
```

```javascript
const parent = document.getElementById("parent");
```

---

## `children`

Returns an `HTMLCollection` containing only **element children**.

```javascript
console.log(parent.children);
```

Conceptually:

```text
HTMLCollection
    h1
    p
    p
```

Access an individual child:

```javascript
console.log(parent.children[0]); // <h1>Heading</h1>
console.log(parent.children[1]); // <p>Paragraph 1</p>
console.log(parent.children[2]); // <p>Paragraph 2</p>
```

---

## `childNodes`

Returns a `NodeList` containing **all child nodes**.

```javascript
console.log(parent.childNodes);
```

It can contain:

```text
#text
h1
#text
p
#text
p
#text
```

The `#text` nodes are often created from spaces and line breaks in the HTML.

---

# 2. First Child

There are two ways to get the first child.

## `firstChild`

Returns the first **node**.

```javascript
console.log(parent.firstChild);
```

It can return a text node:

```text
#text
```

because of whitespace/newlines.

---

## `firstElementChild`

Returns the first **HTML element**.

```javascript
console.log(parent.firstElementChild);
```

Output:

```html
<h1>Heading</h1>
```

### Difference

```text
firstChild
    ↓
First node of any type

firstElementChild
    ↓
First HTML element
```

---

# 3. Last Child

## `lastChild`

Returns the last **node**.

```javascript
console.log(parent.lastChild);
```

It can be a text node.

---

## `lastElementChild`

Returns the last **HTML element**.

```javascript
console.log(parent.lastElementChild);
```

Output:

```html
<p>Paragraph 2</p>
```

---

# 4. Sibling Traversal

A **sibling** is an element/node that has the same parent.

Example:

```html
<div>
    <h1>Heading</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>
```

The elements have the same parent:

```text
             div
              |
      ┌───────┼───────┐
      ↓       ↓       ↓
     h1       p       p
             p1      p2

      h1, p1 and p2 are siblings
```

---

# 5. `nextElementSibling`

Moves to the next **HTML element sibling**.

```javascript
const p1 = document.querySelector("p");

console.log(p1.nextElementSibling);
```

Output:

```html
<p>Paragraph 2</p>
```

Movement:

```text
h1 → p1 → p2
      |
      └── nextElementSibling
```

---

# 6. `previousElementSibling`

Moves to the previous **HTML element sibling**.

```javascript
const p2 = document.querySelectorAll("p")[1];

console.log(p2.previousElementSibling);
```

Output:

```html
<p>Paragraph 1</p>
```

Movement:

```text
p1 ← p2
      |
      └── previousElementSibling
```

---

# 7. `nextSibling`

Returns the next **node**, not necessarily an element.

```javascript
console.log(p1.nextSibling);
```

It can return:

```text
#text
```

because whitespace and newlines can be text nodes.

---

# 8. `previousSibling`

Returns the previous **node**.

```javascript
console.log(p2.previousSibling);
```

It can also return:

```text
#text
```

if whitespace exists between the elements.

---

# 9. Element Traversal vs Node Traversal

This is one of the most important concepts in DOM traversal.

## Element Traversal

Element traversal works with **HTML elements only**.

Common properties:

```javascript
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
element.parentElement
```

These ignore text and comment nodes.

---

## Node Traversal

Node traversal works with **all types of DOM nodes**.

Common properties:

```javascript
element.childNodes
element.firstChild
element.lastChild
element.nextSibling
element.previousSibling
element.parentNode
```

These can return:

* Element nodes
* Text nodes
* Comment nodes
* Other node types

---

# 10. Complete Comparison

| Element Traversal        | Node Traversal    |
| ------------------------ | ----------------- |
| `children`               | `childNodes`      |
| `firstElementChild`      | `firstChild`      |
| `lastElementChild`       | `lastChild`       |
| `nextElementSibling`     | `nextSibling`     |
| `previousElementSibling` | `previousSibling` |
| `parentElement`          | `parentNode`      |

### Easy Memory Trick

> **Element = HTML elements only**
> **Node = Everything**

---

# 11. Parent Traversal

You can also move from a child back to its parent.

## `parentElement`

Returns the parent **HTML element**.

```javascript
const p = document.querySelector("p");

console.log(p.parentElement);
```

Output:

```html
<div>
    ...
</div>
```

---

## `parentNode`

Returns the parent **node**.

```javascript
console.log(p.parentNode);
```

Usually, when working with HTML elements, both may appear to give the same result.

The important difference is:

```text
parentElement
    ↓
Parent must be an Element

parentNode
    ↓
Parent can be any Node
```

---

# 12. Complete DOM Traversal Example

HTML:

```html
<div id="parent">
    <h1>Heading</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>
```

JavaScript:

```javascript
const parent = document.getElementById("parent");

const p1 = parent.children[1];

console.log(p1);
console.log(p1.parentElement);
console.log(p1.previousElementSibling);
console.log(p1.nextElementSibling);
```

Output:

```text
<p>Paragraph 1</p>

<div id="parent">...</div>

<h1>Heading</h1>

<p>Paragraph 2</p>
```

---

# 13. DOM Movement Diagram

Starting from `p1`:

```text
                    parent
                      ↑
                      |
                      | parentElement
                      |
                     p1
                   ↙    ↘
                  ↙      ↘
 previousElementSibling  nextElementSibling
                ↓          ↓
               h1          p2
```

From the parent:

```text
                 parent
                /      \
               ↓        ↓
     firstElementChild  lastElementChild
              ↓              ↓
             h1              p2
```

---

# 14. Quick Cheat Sheet

## Child

```javascript
element.children
element.childNodes
```

## First Child

```javascript
element.firstElementChild
element.firstChild
```

## Last Child

```javascript
element.lastElementChild
element.lastChild
```

## Next Sibling

```javascript
element.nextElementSibling
element.nextSibling
```

## Previous Sibling

```javascript
element.previousElementSibling
element.previousSibling
```

## Parent

```javascript
element.parentElement
element.parentNode
```

---

# 15. Interview Questions

### Q1. What is DOM traversal?

DOM traversal means navigating between elements/nodes in the DOM tree.

---

### Q2. What is the difference between `children` and `childNodes`?

`children` returns only element children, while `childNodes` returns all child nodes, including text and comments.

---

### Q3. What is the difference between `firstChild` and `firstElementChild`?

`firstChild` returns the first node, which can be a text node.

`firstElementChild` returns the first HTML element.

---

### Q4. What is the difference between `nextSibling` and `nextElementSibling`?

`nextSibling` returns the next node, while `nextElementSibling` returns the next HTML element.

---

### Q5. What is the difference between `parentNode` and `parentElement`?

`parentNode` returns the parent node, while `parentElement` returns the parent element.

---

### Q6. Why can `firstChild` return `#text`?

Because whitespace and line breaks in HTML can create text nodes.

---

# ⭐ Final Memory Trick

```text
              DOM TRAVERSAL
                    |
        ┌───────────┴───────────┐
        ↓                       ↓
     ELEMENT                   NODE
        |                       |
   HTML only                 Everything
        |                       |
   children                  childNodes
   firstElementChild         firstChild
   lastElementChild          lastChild
   nextElementSibling        nextSibling
   previousElementSibling    previousSibling
   parentElement             parentNode
```

### Remember:

> **Element → HTML elements only**
> **Node → Elements + Text + Comments + other nodes**
