# DOM Text & HTML Properties

In JavaScript DOM, three commonly used properties for reading and modifying element content are:

* `textContent`
* `innerText`
* `innerHTML`

---

## 1. `textContent`

`textContent` is used to **read or modify all text content** inside an element.

### Example

```html
<div id="box">
    <h1>Hello</h1>
    <p>Welcome Bikas</p>
</div>
```

```js
const box = document.querySelector("#box");

console.log(box.textContent);
```

Output:

```text
Hello
Welcome Bikas
```

It includes the text of child elements.

### Changing `textContent`

```js
box.textContent = "Hello World";
```

The HTML becomes:

```html
<div id="box">
    Hello World
</div>
```

The previous child elements are removed.

### `textContent` does not parse HTML

```js
box.textContent = "<h1>Hello</h1>";
```

The browser displays:

```text
<h1>Hello</h1>
```

It does **not** create an `<h1>` element.

### Key Point

> `textContent` treats the assigned value as plain text.

---

# 2. `innerText`

`innerText` is used to read or modify the **rendered/visible text** of an element.

It is affected by CSS and the way the content is rendered on the page.

### Example

```html
<div id="box">
    Hello
    <span style="display: none;">Secret</span>
</div>
```

```js
const box = document.querySelector("#box");

console.log(box.innerText);
```

Output:

```text
Hello
```

The hidden `span` is normally not included because it is not rendered.

---

## `innerText` vs `textContent`

```html
<div id="box">
    Hello
    <span style="display: none;">Secret</span>
</div>
```

### Using `textContent`

```js
console.log(box.textContent);
```

Output:

```text
Hello Secret
```

### Using `innerText`

```js
console.log(box.innerText);
```

Output:

```text
Hello
```

### Why are they different?

`textContent` does not care whether the text is visible.

`innerText` considers the rendered appearance of the page and CSS.

---

# 3. `innerHTML`

`innerHTML` is used to **read or modify the HTML markup inside an element**.

### Example

```html
<div id="box">
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

```js
const box = document.querySelector("#box");

console.log(box.innerHTML);
```

Output:

```html
<h1>Hello</h1>
<p>Welcome</p>
```

It returns the HTML markup inside the element.

---

## Changing `innerHTML`

```js
box.innerHTML = "<h1>Hello Bikas</h1>";
```

The browser creates an actual `<h1>` element.

Result:

```html
<div id="box">
    <h1>Hello Bikas</h1>
</div>
```

Unlike `textContent`, HTML is parsed by the browser.

---

# 4. `textContent` vs `innerHTML`

Consider:

```js
box.textContent = "<h1>Hello</h1>";
```

The browser treats it as text:

```text
<h1>Hello</h1>
```

But:

```js
box.innerHTML = "<h1>Hello</h1>";
```

The browser interprets it as HTML:

```html
<h1>Hello</h1>
```

So:

```text
textContent → Plain Text
innerHTML   → HTML
```

---

# 5. `innerHTML` and XSS

`innerHTML` should be used carefully when working with **untrusted user input**.

For example:

```js
const userInput = input.value;

box.innerHTML = userInput;
```

If the input contains malicious HTML, the browser may parse it as markup. This can create an **XSS (Cross-Site Scripting)** vulnerability.

### Unsafe pattern

```js
box.innerHTML = userInput;
```

when `userInput` is untrusted.

### Safer for plain text

```js
box.textContent = userInput;
```

Now HTML entered by the user is treated as text rather than being interpreted as markup.

### Example

```js
const userInput = "<h1>Hello</h1>";

box.textContent = userInput;
```

The browser displays:

```text
<h1>Hello</h1>
```

instead of creating an `<h1>` element.

> **Rule:** Use `textContent` when you only need to display text from an untrusted source. Use `innerHTML` only when you intentionally need to insert HTML and the content is appropriately trusted/sanitized.

---

# 6. Complete Comparison

| Property      | Purpose                  | HTML Parsed? | Considers CSS? | Hidden Text |
| ------------- | ------------------------ | -----------: | -------------: | ----------: |
| `textContent` | Read/write all text      |            ❌ |              ❌ |           ✅ |
| `innerText`   | Read/write rendered text |            ❌ |              ✅ |   ❌ Usually |
| `innerHTML`   | Read/write HTML          |            ✅ |              ❌ |           ✅ |

---

# 7. Example With All Three

HTML:

```html
<div id="box">
    <h1>Hello</h1>
    <p>Welcome</p>
    <span style="display: none;">Hidden Text</span>
</div>
```

JavaScript:

```js
const box = document.querySelector("#box");

console.log("textContent:", box.textContent);

console.log("innerText:", box.innerText);

console.log("innerHTML:", box.innerHTML);
```

Conceptually:

```text
textContent:
Hello
Welcome
Hidden Text

innerText:
Hello
Welcome

innerHTML:
<h1>Hello</h1>
<p>Welcome</p>
<span style="display: none;">Hidden Text</span>
```

---

# 8. How to Remember

Think of an element as a box:

```html
<div>
    <h1>Hello</h1>
    <p>World</p>
</div>
```

### `textContent`

> "Give me all the text."

```js
element.textContent;
```

```text
Hello World
```

---

### `innerText`

> "Give me the text that is rendered/visible."

```js
element.innerText;
```

```text
Hello World
```

Hidden content may be excluded.

---

### `innerHTML`

> "Give me the HTML inside this element."

```js
element.innerHTML;
```

```html
<h1>Hello</h1>
<p>World</p>
```

---

# 9. Interview Question

### Q: What is the difference between `textContent`, `innerText`, and `innerHTML`?

### Answer

> `textContent` reads or writes all text content of an element without considering whether it is visually rendered. `innerText` deals with rendered text and is affected by CSS and visibility. `innerHTML` reads or writes the HTML markup inside an element and parses HTML when assigned. Because `innerHTML` parses HTML, inserting untrusted user input directly into it can cause XSS vulnerabilities.

---

# 10. Quick Revision

```text
textContent → ALL TEXT
innerText   → RENDERED/VISIBLE TEXT
innerHTML   → HTML
```

### One-line difference

```text
textContent → What text exists?
innerText   → What text is rendered?
innerHTML   → What HTML exists?
```

---

## Important Interview Points

* `textContent` returns text from descendants, including text that is not rendered.
* `innerText` represents rendered text and is affected by CSS.
* `innerHTML` returns the HTML markup inside an element.
* `textContent` does not parse HTML.
* `innerHTML` parses HTML.
* `innerHTML` should not be used with untrusted input without appropriate sanitization.
* Prefer `textContent` when you only need to insert plain text.

---

## Final Comparison

```text
                    DOM Element
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
    textContent      innerText     innerHTML
          │             │             │
          ▼             ▼             ▼
      All text      Rendered text     HTML
          │             │             │
          ▼             ▼             ▼
      CSS ignored   CSS considered   HTML parsed
```
