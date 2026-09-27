# DOM Performance

This topic focuses on how the browser handles DOM changes and how to optimize DOM-heavy JavaScript code.

Topics covered:

* DocumentFragment
* Reflow / Layout
* Repaint
* DOM Reads and Writes
* Layout Thrashing

---

# 1. DocumentFragment

`DocumentFragment` is a temporary container used to hold DOM nodes before inserting them into the actual document.

Instead of repeatedly modifying the live DOM:

```text
Create Element
      ↓
Insert into DOM
      ↓
Create Element
      ↓
Insert into DOM
      ↓
...
```

we can build the elements inside a `DocumentFragment` first:

```text
Create Elements
      ↓
DocumentFragment
      ↓
Insert Fragment into DOM
```

### Example

```js
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 10; i++) {

    const li = document.createElement("li");

    li.innerText = `Item ${i}`;

    fragment.append(li);
}

list.append(fragment);
```

The fragment itself is not inserted into the document. Its child nodes are moved into the document.

---

# 2. Direct DOM Insertion vs DocumentFragment

## Direct DOM Insertion

```js
for (let i = 1; i <= 10; i++) {

    const li = document.createElement("li");

    li.innerText = `Item ${i}`;

    list.append(li);
}
```

The live DOM is modified repeatedly.

## DocumentFragment

```js
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 10; i++) {

    const li = document.createElement("li");

    li.innerText = `Item ${i}`;

    fragment.append(li);
}

list.append(fragment);
```

The elements are prepared first and inserted into the live DOM as a batch.

### Important

`DocumentFragment` can reduce DOM insertion overhead, especially when creating many nodes.

Modern browsers already optimize many DOM operations, so it should not be treated as a guarantee of a specific number of layout calculations.

---

# 3. Reflow / Layout

Reflow, also called **layout**, happens when the browser needs to recalculate the size and position of elements.

The browser needs to determine:

```text
Where should the element be?
How wide should it be?
How tall should it be?
Where should its children be?
```

Example:

```js
box.style.width = "300px";
```

Changing the width can affect the layout of the page.

---

# 4. What Can Cause Layout Work?

Examples include:

### Changing dimensions

```js
element.style.width = "300px";
element.style.height = "200px";
```

### Changing spacing

```js
element.style.margin = "20px";
element.style.padding = "20px";
```

### Adding or removing elements

```js
parent.append(child);
```

```js
child.remove();
```

### Changing classes

```js
element.classList.add("large");
```

If the class changes layout-related CSS, the browser may need to recalculate layout.

### Changing content

```js
element.textContent = "New content";
```

Changing content can change an element's size and affect surrounding layout.

---

# 5. Repaint

After calculating the layout, the browser may need to redraw pixels on the screen.

This is called **painting** or **repainting**.

Example:

```js
element.style.backgroundColor = "red";
```

The visual appearance changes, so the browser needs to update what is displayed.

Other visual changes can include:

```js
element.style.color = "blue";
element.style.border = "2px solid black";
```

---

# 6. Reflow vs Repaint

| Reflow / Layout                 | Repaint                            |
| ------------------------------- | ---------------------------------- |
| Recalculates layout             | Redraws visual appearance          |
| Calculates size and position    | Updates pixels                     |
| Can affect surrounding elements | Usually concerns visual appearance |
| Can be more expensive           | Can also have a performance cost   |

Simplified browser pipeline:

```text
JavaScript
    ↓
DOM / CSS changes
    ↓
Style Calculation
    ↓
Layout
    ↓
Paint
    ↓
Screen
```

A layout-affecting change can lead to both layout work and painting.

A purely visual change may only require painting.

---

# 7. DOM Reads

Some JavaScript properties read layout information from the browser.

Examples:

```js
element.offsetWidth;
element.offsetHeight;
```

```js
element.offsetTop;
element.offsetLeft;
```

```js
element.getBoundingClientRect();
```

```js
getComputedStyle(element);
```

These are examples of layout-related reads.

---

# 8. DOM Writes

DOM writes modify the DOM or styles.

Examples:

```js
element.style.width = "200px";
```

```js
element.style.height = "100px";
```

```js
element.classList.add("active");
```

```js
element.textContent = "Hello";
```

```js
parent.append(child);
```

---

# 9. Layout Thrashing

**Layout thrashing** happens when code repeatedly alternates between DOM writes and layout-dependent DOM reads.

Example:

```js
for (let i = 0; i < 100; i++) {

    // WRITE
    box.style.width = `${100 + i}px`;

    // READ
    console.log(box.offsetWidth);
}
```

The pattern is:

```text
WRITE
  ↓
READ
  ↓
WRITE
  ↓
READ
  ↓
WRITE
  ↓
READ
```

This can cause the browser to repeatedly make layout information up-to-date, which can become expensive.

---

# 10. Better Approach

Try to group DOM reads together and DOM writes together.

Instead of:

```text
WRITE
READ
WRITE
READ
WRITE
READ
```

prefer:

```text
READ
READ
READ
   ↓
WRITE
WRITE
WRITE
```

Example:

```js
const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width);
console.log(height);

box.style.width = "300px";
box.style.height = "200px";
```

The goal is to avoid unnecessary alternating reads and writes.

---

# 11. DocumentFragment and Performance

DocumentFragment is particularly useful when creating many elements.

Without a fragment:

```text
Create
  ↓
Live DOM insertion
  ↓
Create
  ↓
Live DOM insertion
  ↓
Create
  ↓
Live DOM insertion
```

With a fragment:

```text
Create
  ↓
Fragment

Create
  ↓
Fragment

Create
  ↓
Fragment

      ↓

Insert into DOM
```

This allows you to prepare the nodes before modifying the live DOM.

---

# 12. Three Important Concepts

## DocumentFragment

```text
Temporary container
       ↓
Build DOM nodes
       ↓
Insert into live DOM
```

Purpose:

> Batch DOM insertion.

---

## Reflow / Layout

```text
DOM or CSS change
       ↓
Browser recalculates
size and position
```

Purpose:

> Keep the page layout correct.

---

## Repaint

```text
Visual change
       ↓
Browser redraws pixels
```

Purpose:

> Update the visual appearance.

---

# 13. Layout Thrashing

### Avoid

```text
WRITE
 ↓
READ
 ↓
WRITE
 ↓
READ
```

### Prefer

```text
READ
READ
READ
 ↓
WRITE
WRITE
WRITE
```

---

# Quick Revision

| Concept            | Meaning                                     |
| ------------------ | ------------------------------------------- |
| `DocumentFragment` | Temporary container for DOM nodes           |
| Reflow / Layout    | Recalculate element sizes and positions     |
| Repaint            | Redraw visual pixels                        |
| DOM Read           | Retrieve DOM/layout information             |
| DOM Write          | Modify DOM or styles                        |
| Layout Thrashing   | Repeatedly alternating DOM reads and writes |

---

# Important Examples

### DocumentFragment

```js
const fragment = document.createDocumentFragment();

fragment.append(element);

parent.append(fragment);
```

### Layout Read

```js
element.offsetWidth;
```

### Layout Write

```js
element.style.width = "300px";
```

### Layout Thrashing

```js
element.style.width = "300px";

console.log(element.offsetWidth);

element.style.height = "200px";

console.log(element.offsetHeight);
```

### Better Organization

```js
const width = element.offsetWidth;
const height = element.offsetHeight;

element.style.width = "300px";
element.style.height = "200px";
```

---

# Key Takeaways

```text
DocumentFragment
→ Build multiple nodes before inserting them.

Reflow / Layout
→ Browser recalculates size and position.

Repaint
→ Browser redraws visual changes.

DOM Read
→ Get information from the DOM/layout.

DOM Write
→ Modify the DOM or styles.

Layout Thrashing
→ Avoid repeatedly alternating layout reads and writes.
```

> **Main idea:** For DOM-heavy applications, batch DOM changes where practical, avoid unnecessary live-DOM work, and organize layout reads and writes to reduce forced layout work.
