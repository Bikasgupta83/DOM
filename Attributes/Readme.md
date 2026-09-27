# DOM Attribute Manipulation

In JavaScript DOM, HTML attributes can be **read, added, modified, removed, and checked** dynamically.

The main methods are:

* `getAttribute()`
* `setAttribute()`
* `removeAttribute()`
* `hasAttribute()`

---

# 1. What is an HTML Attribute?

An HTML attribute provides additional information about an HTML element.

Example:

```html
<img id="profile" src="profile.jpg" alt="Profile Image">
```

Here:

```text
id    → "profile"
src   → "profile.jpg"
alt   → "Profile Image"
```

These are called **attributes**.

Another example:

```html
<a href="https://example.com" target="_blank">
    Visit
</a>
```

Here:

```text
href   → "https://example.com"
target → "_blank"
```

JavaScript can dynamically manipulate these attributes.

---

# 2. `getAttribute()`

`getAttribute()` is used to **read the value of an HTML attribute**.

## Syntax

```js
element.getAttribute("attributeName");
```

## Example

```html
<img id="profile" src="profile.jpg" alt="Profile Image">
```

```js
const image = document.querySelector("#profile");

console.log(image.getAttribute("src"));
```

Output:

```text
profile.jpg
```

Another example:

```js
console.log(image.getAttribute("alt"));
```

Output:

```text
Profile Image
```

### Key Point

> `getAttribute()` → Read an attribute.

---

# 3. `setAttribute()`

`setAttribute()` is used to **add a new attribute or modify an existing attribute**.

## Syntax

```js
element.setAttribute("attributeName", "value");
```

---

## Example: Change an Attribute

HTML:

```html
<img id="profile" src="old.jpg">
```

JavaScript:

```js
const image = document.querySelector("#profile");

image.setAttribute("src", "new.jpg");
```

The HTML becomes:

```html
<img id="profile" src="new.jpg">
```

The `src` attribute has been changed dynamically.

---

## Example: Add an Attribute

HTML:

```html
<button id="btn">Submit</button>
```

JavaScript:

```js
const btn = document.querySelector("#btn");

btn.setAttribute("disabled", "");
```

Now the HTML becomes:

```html
<button id="btn" disabled>Submit</button>
```

---

# 4. `setAttribute()` Can Create New Attributes

HTML:

```html
<div id="box"></div>
```

JavaScript:

```js
const box = document.querySelector("#box");

box.setAttribute("data-user", "Bikas");
```

Result:

```html
<div id="box" data-user="Bikas"></div>
```

This is useful for adding custom `data-*` attributes.

---

# 5. Dynamic Attribute Manipulation

JavaScript can dynamically change attributes based on user actions or application logic.

## Example: Change Image

HTML:

```html
<img id="productImage" src="phone.jpg">
```

JavaScript:

```js
const image = document.querySelector("#productImage");

image.setAttribute("src", "laptop.jpg");
```

The image source changes from:

```text
phone.jpg
```

to:

```text
laptop.jpg
```

You can also change the `alt` attribute:

```js
image.setAttribute("alt", "Laptop Image");
```

---

# 6. `removeAttribute()`

`removeAttribute()` is used to **remove an attribute from an element**.

## Syntax

```js
element.removeAttribute("attributeName");
```

## Example

HTML:

```html
<button id="btn" disabled>
    Submit
</button>
```

JavaScript:

```js
const btn = document.querySelector("#btn");

btn.removeAttribute("disabled");
```

Now:

```html
<button id="btn">
    Submit
</button>
```

The `disabled` attribute has been removed.

---

# 7. `hasAttribute()`

`hasAttribute()` is used to **check whether an element contains a particular attribute**.

It returns either:

```text
true
```

or:

```text
false
```

## Syntax

```js
element.hasAttribute("attributeName");
```

## Example

HTML:

```html
<button id="btn" disabled>
    Submit
</button>
```

JavaScript:

```js
const btn = document.querySelector("#btn");

console.log(btn.hasAttribute("disabled"));
```

Output:

```text
true
```

Because the `disabled` attribute exists.

---

## After Removing the Attribute

```js
btn.removeAttribute("disabled");

console.log(btn.hasAttribute("disabled"));
```

Output:

```text
false
```

---

# 8. Practical Example — Enable / Disable Button

This example uses multiple attribute methods together.

```html
<button id="btn" disabled>
    Submit
</button>

<script>
    const btn = document.querySelector("#btn");

    console.log(btn.hasAttribute("disabled"));

    btn.removeAttribute("disabled");

    console.log(btn.hasAttribute("disabled"));
</script>
```

Output:

```text
true
false
```

### Flow

```text
Button
   ↓
Check disabled
   ↓
hasAttribute()
   ↓
true
   ↓
Remove disabled
   ↓
removeAttribute()
   ↓
Button becomes enabled
```

---

# 9. Practical Example — Change Link Dynamically

HTML:

```html
<a id="link" href="https://google.com">
    Visit Website
</a>
```

JavaScript:

```js
const link = document.querySelector("#link");

console.log(link.getAttribute("href"));
```

Output:

```text
https://google.com
```

Now change the URL:

```js
link.setAttribute("href", "https://github.com");
```

The link now points to:

```text
https://github.com
```

You can verify it:

```js
console.log(link.getAttribute("href"));
```

Output:

```text
https://github.com
```

---

# 10. Practical Example — `data-*` Attributes

Custom `data-*` attributes are commonly used to store data in HTML.

HTML:

```html
<button id="product"
        data-id="101"
        data-price="500">
    Buy
</button>
```

Read the attributes:

```js
const product = document.querySelector("#product");

console.log(product.getAttribute("data-id"));
console.log(product.getAttribute("data-price"));
```

Output:

```text
101
500
```

Modify the price:

```js
product.setAttribute("data-price", "600");
```

Now:

```html
<button id="product"
        data-id="101"
        data-price="600">
    Buy
</button>
```

---

# 11. `getAttribute()` vs DOM Properties

You may also see attributes accessed through DOM properties.

For example:

```js
image.src;
```

instead of:

```js
image.getAttribute("src");
```

Both can be useful, but they are not always identical.

Example:

```html
<a id="link" href="/about">
    About
</a>
```

```js
const link = document.querySelector("#link");

console.log(link.getAttribute("href"));
```

This returns the attribute value:

```text
/about
```

But:

```js
console.log(link.href);
```

may return a resolved absolute URL such as:

```text
https://example.com/about
```

### General difference

```text
getAttribute()
       ↓
HTML attribute value


DOM property
       ↓
Current value represented by the DOM object
```

---

# 12. All Four Methods Together

Consider:

```html
<img id="photo"
     src="old.jpg"
     alt="Old Image">
```

## Read

```js
const photo = document.querySelector("#photo");

console.log(photo.getAttribute("src"));
```

Output:

```text
old.jpg
```

## Change

```js
photo.setAttribute("src", "new.jpg");
```

HTML:

```html
<img id="photo"
     src="new.jpg"
     alt="Old Image">
```

## Check

```js
console.log(photo.hasAttribute("alt"));
```

Output:

```text
true
```

## Remove

```js
photo.removeAttribute("alt");
```

HTML:

```html
<img id="photo"
     src="new.jpg">
```

---

# 13. Easy Way to Remember

Remember the four methods using their names:

```text
getAttribute()
       ↓
GET → Read


setAttribute()
       ↓
SET → Add / Change


removeAttribute()
       ↓
REMOVE → Delete


hasAttribute()
       ↓
HAS → Check
```

---

# 14. Interview Question

### Q: What are `getAttribute()`, `setAttribute()`, `removeAttribute()`, and `hasAttribute()`?

### Answer

> `getAttribute()` reads the value of an HTML attribute. `setAttribute()` adds a new attribute or modifies an existing one. `removeAttribute()` removes an attribute from an element. `hasAttribute()` checks whether an attribute exists and returns a boolean value.

---

# 15. Quick Revision Table

| Method              | Purpose                        | Return Value     |
| ------------------- | ------------------------------ | ---------------- |
| `getAttribute()`    | Read an attribute              | Value / `null`   |
| `setAttribute()`    | Add or modify an attribute     | `undefined`      |
| `removeAttribute()` | Remove an attribute            | `undefined`      |
| `hasAttribute()`    | Check whether attribute exists | `true` / `false` |

---

# 16. Important Interview Points

* `getAttribute()` is used to **read** an attribute.
* `setAttribute()` is used to **add or modify** an attribute.
* `removeAttribute()` is used to **remove** an attribute.
* `hasAttribute()` is used to **check** whether an attribute exists.
* `hasAttribute()` returns a boolean.
* `getAttribute()` returns the attribute value or `null` if the attribute does not exist.
* `setAttribute()` can create new attributes.
* `data-*` attributes are commonly used for storing custom data.
* DOM properties such as `element.src` and attribute methods such as `getAttribute("src")` can behave differently.

---

# 17. Final Revision

```text
getAttribute()    → GET      → Read
setAttribute()    → SET      → Add / Update
removeAttribute() → REMOVE   → Delete
hasAttribute()    → HAS      → Check
```

### One-line Memory Trick

```text
GET    → Read
SET    → Add / Update
REMOVE → Delete
HAS    → Check
```

---

# 18. Mini Practice

Try creating the following HTML:

```html
<img id="profile" src="old.jpg" alt="Profile">

<button id="change">Change Image</button>
<button id="remove">Remove Alt</button>
<button id="check">Check Alt</button>
```

Practice these methods:

```js
getAttribute()
setAttribute()
removeAttribute()
hasAttribute()
```

### Goal

When the **Change Image** button is clicked:

```text
old.jpg → new.jpg
```

When the **Remove Alt** button is clicked:

```text
alt attribute → removed
```

When the **Check Alt** button is clicked:

```text
true / false
```

This will give you practical experience with **dynamic attribute manipulation**.
