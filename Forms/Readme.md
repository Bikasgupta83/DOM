# DOM Forms

Forms allow users to enter and submit data.

In this topic, we learn:

* Form Elements
* Reading Form Values
* Form Validation
* FormData

---

# 1. Form Elements

Common form elements:

```text
Form
├── input
│   ├── text
│   ├── email
│   ├── number
│   ├── password
│   ├── checkbox
│   └── radio
├── select
└── textarea
```

---

# 2. Reading Input Values

For normal inputs, use `.value`.

```js
const name = document.querySelector("#name");

console.log(name.value);
```

Examples:

```text
text     → .value
email    → .value
number   → .value
password → .value
```

---

# 3. Reading Select Value

For a `<select>` element, use `.value`.

```js
const city = document.querySelector("#city");

console.log(city.value);
```

The returned value is the `value` of the selected `<option>`.

---

# 4. Reading Textarea Value

For a `<textarea>`, use `.value`.

```js
const message = document.querySelector("#message");

console.log(message.value);
```

---

# 5. Reading Checkbox

Checkboxes use `.checked`.

```js
const terms = document.querySelector("#terms");

console.log(terms.checked);
```

The result is:

```text
true
```

or:

```text
false
```

### Remember

```text
Checkbox → .checked
```

---

# 6. Reading Radio Buttons

Radio buttons can be selected using `:checked`.

```js
const gender = document.querySelector(
    'input[name="gender"]:checked'
);

console.log(gender.value);
```

If Male is selected:

```text
male
```

If Female is selected:

```text
female
```

### Remember

```text
Radio
→ :checked
→ .value
```

---

# 7. Form Submit Event

Use the `submit` event to handle form submission.

```js
form.addEventListener("submit", (e) => {

    e.preventDefault();

    console.log("Form submitted");

});
```

`preventDefault()` prevents the browser's default form submission behavior.

---

# 8. Form Validation

Form validation checks whether the entered values are valid.

Example:

```js
form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (name.value.trim() === "") {
        console.log("Name is required");
        return;
    }

    if (email.value.trim() === "") {
        console.log("Email is required");
        return;
    }

    console.log("Form Valid");

});
```

### Validation Flow

```text
Submit
  ↓
Read values
  ↓
Validate
  ↓
Invalid?
  ↓
Show error

Valid
  ↓
Process form
```

---

# 9. Displaying Errors

An error message can be displayed inside an HTML element.

```html
<p id="error"></p>
```

JavaScript:

```js
error.textContent = "Name is required";
```

You can clear the error when the form becomes valid:

```js
error.textContent = "";
```

---

# 10. `FormData`

`FormData` is used to collect form values.

```js
const formData = new FormData(form);
```

Example:

```js
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const formData = new FormData(form);

});
```

---

# 11. `FormData.get()`

Use `.get()` to retrieve a specific form value.

```js
const formData = new FormData(form);

console.log(formData.get("name"));
console.log(formData.get("email"));
console.log(formData.get("city"));
```

The key comes from the element's `name` attribute.

Example:

```html
<input type="text" name="name">
```

Then:

```js
formData.get("name");
```

---

# 12. `FormData.entries()`

`entries()` allows you to loop through all collected form data.

```js
const formData = new FormData(form);

for (let [key, value] of formData.entries()) {
    console.log(key, value);
}
```

Output can look like:

```text
name Bikas
email bikas@example.com
number 9876543210
city pune
gender male
terms accepted
message Hello
```

---

# 13. Importance of `name`

For `FormData`, form controls should have a `name` attribute.

Example:

```html
<input
    type="text"
    name="name"
    id="name"
>
```

Then:

```js
formData.get("name");
```

The relationship is:

```text
name="name"
     ↓
FormData key
     ↓
formData.get("name")
```

---

# 14. Manual Reading vs FormData

### Manual Reading

You select each element individually.

```js
const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const city = document.querySelector("#city").value;
```

### FormData

The browser collects the form controls for you.

```js
const formData = new FormData(form);

const name = formData.get("name");
const email = formData.get("email");
const city = formData.get("city");
```

### Comparison

| Manual Reading               | FormData                   |
| ---------------------------- | -------------------------- |
| Select each element          | Collect form data together |
| Use `.value` / `.checked`    | Use `FormData`             |
| More code for large forms    | Less repetitive            |
| Useful for individual fields | Useful for complete forms  |

---

# Quick Revision

## Form Elements

```text
input text      → .value
input email     → .value
input number    → .value
input password  → .value

select          → .value
textarea        → .value

checkbox        → .checked

radio           → :checked + .value
```

## Validation

```text
submit
  ↓
Read values
  ↓
Check conditions
  ↓
Show error / Continue
```

## FormData

```js
const formData = new FormData(form);
```

```js
formData.get("name");
```

```js
for (let [key, value] of formData.entries()) {
    console.log(key, value);
}
```

## Most Important Points

```text
.value
→ Read input/select/textarea value

.checked
→ Check checkbox state

:checked
→ Find selected radio button

preventDefault()
→ Prevent default form submission

FormData
→ Collect form data

name attribute
→ Used as FormData key
```
