# XSS & DOM Injection

This topic explains how unsafe HTML insertion can create security problems and when to use `innerHTML` safely.

Topics covered:

* XSS
* DOM Injection
* `innerHTML`
* `textContent`
* Safe DOM manipulation
* HTML sanitization

---

# 1. What is XSS?

**XSS = Cross-Site Scripting**

XSS happens when untrusted data is inserted into a webpage in a way that allows the browser to interpret it as executable web content.

Basic idea:

```text
Untrusted Input
      ↓
HTML Insertion
      ↓
Browser interprets it
      ↓
Potential XSS
```

Common sources of untrusted data include:

```text
User Input
URL Parameters
Form Data
API Data
Database Data
Third-party Data
```

---

# 2. What is DOM Injection?

DOM Injection happens when untrusted data is inserted into the DOM in an unsafe way.

Example:

```js
const username = input.value;

container.innerHTML = `
    <h2>Welcome ${username}</h2>
`;
```

Here, `username` is being inserted into an HTML string.

If the data is untrusted, this can create an XSS risk.

---

# 3. Why Can `innerHTML` Be Dangerous?

`innerHTML` tells the browser to interpret a string as HTML.

Example:

```js
element.innerHTML = "<b>Hello</b>";
```

The browser creates a `<b>` element.

This is useful when you intentionally want to insert HTML.

The problem occurs when untrusted data is directly inserted:

```js
element.innerHTML = userInput;
```

### Important

`innerHTML` itself is not automatically dangerous.

The problem is:

```text
Untrusted Data
      +
HTML Interpretation
      =
Potential Security Risk
```

---

# 4. `textContent`

If you only want to display text, use `textContent`.

```js
element.textContent = userInput;
```

The browser treats the value as text instead of interpreting it as HTML.

Example:

```js
element.textContent = "<b>Hello</b>";
```

The user sees:

```text
<b>Hello</b>
```

The `<b>` is displayed as text.

---

# 5. `innerHTML` vs `textContent`

| `innerHTML`                          | `textContent`                 |
| ------------------------------------ | ----------------------------- |
| Interprets HTML                      | Treats content as text        |
| Can create HTML elements             | Does not create HTML elements |
| Useful for controlled HTML           | Good for user-provided text   |
| Can be dangerous with untrusted HTML | Safer for plain text          |

### Easy Rule

```text
Need TEXT?
    ↓
textContent

Need CONTROLLED HTML?
    ↓
innerHTML
```

---

# 6. When Should You Use `innerHTML`?

Use `innerHTML` when you intentionally need to insert **controlled HTML**.

Example:

```js
const container = document.querySelector(".container");

container.innerHTML = `
    <h2>Product Details</h2>
    <p>Price: ₹500</p>
    <button>Buy Now</button>
`;
```

The HTML is controlled by your application.

---

# 7. Rendering Application Data

You can use `innerHTML` to create UI from application data when the values being inserted are trusted or appropriately handled.

Example:

```js
const product = {
    name: "Laptop",
    price: 50000
};

container.innerHTML = `
    <div class="card">
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
    </div>
`;
```

Be careful if `product.name` or other values can contain untrusted user content.

---

# 8. Replacing Existing HTML

`innerHTML` can also replace the contents of an element.

### Clear content

```js
container.innerHTML = "";
```

### Show a message

```js
container.innerHTML = `
    <p>No products found.</p>
`;
```

This can be useful for UI states such as:

```text
Loading
No Data
Error
Success
```

---

# 9. Reading HTML with `innerHTML`

`innerHTML` can also read the HTML inside an element.

HTML:

```html
<div id="box">
    <h2>Hello</h2>
    <p>Welcome</p>
</div>
```

JavaScript:

```js
const box = document.querySelector("#box");

console.log(box.innerHTML);
```

It returns the HTML contained inside `#box`.

---

# 10. User Input

Avoid directly inserting user input using `innerHTML`.

### ❌ Avoid

```js
const username = input.value;

element.innerHTML = username;
```

### ✅ Prefer

```js
const username = input.value;

element.textContent = username;
```

This treats the username as text.

---

# 11. Creating DOM Elements Safely

Another option is to use `createElement()`.

```js
const heading = document.createElement("h2");

heading.textContent = username;

container.append(heading);
```

Here:

```text
User Input
    ↓
textContent
    ↓
Text Node
    ↓
DOM
```

The user input isn't interpreted as HTML.

---

# 12. HTML Sanitization

Sometimes an application genuinely needs to allow users to provide some HTML.

For example:

```text
Bold
Italic
Links
Lists
```

In this situation, don't blindly do:

```js
element.innerHTML = userInput;
```

The HTML should first be processed by a **reputable HTML sanitization solution** that removes or neutralizes unsafe content while preserving the allowed markup.

General flow:

```text
User HTML
    ↓
Sanitization
    ↓
Safe HTML
    ↓
DOM
```

### Important

Do not try to create your own security sanitizer using a few `replace()` calls. HTML parsing has many edge cases.

---

# 13. `innerHTML` Can Also Affect Event Listeners

When you replace an element's `innerHTML`, the existing child DOM nodes can be replaced.

For example:

```js
container.innerHTML = `
    <button>Click</button>
`;
```

If you previously attached an event listener to a child that gets replaced, that listener will not automatically transfer to the new element.

For dynamic DOM manipulation, these methods are often useful:

```text
createElement()
append()
appendChild()
textContent
```

---

# 14. Safe DOM Manipulation

### User-provided text

```js
element.textContent = userInput;
```

### Create an element

```js
const li = document.createElement("li");

li.textContent = userInput;

list.append(li);
```

### Controlled HTML

```js
element.innerHTML = `
    <h2>Welcome</h2>
    <p>Hello!</p>
`;
```

---

# 15. Comparison

| Method                  |       Interprets HTML? | Common Use                            |
| ----------------------- | ---------------------: | ------------------------------------- |
| `textContent`           |                   ❌ No | User-provided text                    |
| `innerHTML`             |                  ✅ Yes | Controlled HTML                       |
| `createElement()`       |  ❌ Data stays separate | Dynamic DOM                           |
| `append()`              | ❌ Not for HTML parsing | Insert nodes/text                     |
| Sanitizer + `innerHTML` |       ✅ Sanitized HTML | When controlled HTML is not available |

---

# 16. Simple Decision Guide

```text
Do you need to display text?
        ↓
    textContent


Do you need to create DOM elements?
        ↓
createElement() + append()


Do you have controlled HTML?
        ↓
    innerHTML


Do you need to allow HTML from an
untrusted source?
        ↓
Sanitize it first
        ↓
Then insert the sanitized HTML
```

---

# 17. Important Rules

### Rule 1

Don't blindly put user input into `innerHTML`.

```js
// ❌
element.innerHTML = userInput;
```

---

### Rule 2

Use `textContent` for plain text.

```js
// ✅
element.textContent = userInput;
```

---

### Rule 3

`innerHTML` is useful for controlled HTML.

```js
// ✅
element.innerHTML = `
    <h2>Product</h2>
    <p>Price: ₹500</p>
`;
```

---

### Rule 4

If untrusted HTML must be allowed, sanitize it using a reputable HTML sanitization solution.

---

# Quick Revision

```text
XSS
→ Cross-Site Scripting

DOM Injection
→ Unsafe insertion of data into the DOM

innerHTML
→ Interprets a string as HTML

textContent
→ Treats a string as text

Sanitization
→ Removes or neutralizes unsafe HTML

createElement()
→ Create DOM nodes without parsing an HTML string
```

## Most Important Concept

```text
User Input
    ↓
Need TEXT?
    ↓
textContent


Controlled HTML
    ↓
Need HTML?
    ↓
innerHTML


Untrusted HTML
    ↓
Need to allow HTML?
    ↓
Sanitize
    ↓
Insert sanitized HTML
```

> **Main idea:** `innerHTML` is not bad by itself. The security risk comes from allowing untrusted data to be interpreted as HTML. Use `textContent` for ordinary user text and use `innerHTML` when you intentionally need controlled HTML.
