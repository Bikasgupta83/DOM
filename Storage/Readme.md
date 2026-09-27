# Web Storage API

The **Web Storage API** allows JavaScript to store small amounts of data directly in the browser.

There are two main types:

* `localStorage`
* `sessionStorage`

Both use almost the same API, but their **lifetime and scope are different**.

---

# 1. localStorage

`localStorage` stores data in the browser and keeps it after:

* Page refresh
* Tab close
* Browser close
* Computer restart

Example:

```js
localStorage.setItem("name", "Bikas");
```

Retrieve it:

```js
const name = localStorage.getItem("name");

console.log(name);
```

Output:

```text
Bikas
```

---

# 2. sessionStorage

`sessionStorage` also stores data in the browser, but it is associated with the current browsing session/tab.

Example:

```js
sessionStorage.setItem("name", "Bikas");
```

Retrieve it:

```js
const name = sessionStorage.getItem("name");

console.log(name);
```

Output:

```text
Bikas
```

Refreshing the page normally keeps the value, but ending the relevant browsing session removes the session storage.

---

# 3. localStorage vs sessionStorage

| Feature         | `localStorage`         | `sessionStorage`                                  |
| --------------- | ---------------------- | ------------------------------------------------- |
| API             | Same                   | Same                                              |
| Refresh page    | Data remains           | Data remains                                      |
| Close tab       | Data remains           | Data is cleared                                   |
| Browser restart | Data generally remains | Session data is not persisted like `localStorage` |
| Scope           | Per origin             | Per origin + browser tab/session                  |
| Main purpose    | Persistent data        | Temporary session data                            |

### Easy rule

```text
localStorage
    ↓
Longer-term browser storage


sessionStorage
    ↓
Current session/tab storage
```

---

# 4. Web Storage API

Both `localStorage` and `sessionStorage` provide these main methods:

```text
setItem()
getItem()
removeItem()
clear()
key()
```

They also provide:

```text
length
```

---

# 5. setItem()

Used to store a value.

### localStorage

```js
localStorage.setItem("name", "Bikas");
```

### sessionStorage

```js
sessionStorage.setItem("name", "Bikas");
```

Syntax:

```js
storage.setItem(key, value);
```

Example:

```js
localStorage.setItem("city", "Mumbai");
```

---

# 6. getItem()

Used to retrieve a value.

```js
const name = localStorage.getItem("name");

console.log(name);
```

For `sessionStorage`:

```js
const name = sessionStorage.getItem("name");

console.log(name);
```

If the key doesn't exist:

```js
localStorage.getItem("age");
```

returns:

```text
null
```

---

# 7. removeItem()

Removes one specific key.

```js
localStorage.removeItem("name");
```

This removes only:

```text
name
```

Other values remain.

Same with `sessionStorage`:

```js
sessionStorage.removeItem("name");
```

---

# 8. clear()

Removes all storage entries for that origin and storage type.

```js
localStorage.clear();
```

or:

```js
sessionStorage.clear();
```

### Difference

```js
localStorage.removeItem("name");
```

removes **one item**.

```js
localStorage.clear();
```

removes **all localStorage items** for that origin.

---

# 9. key()

`key()` retrieves a key using its index.

```js
console.log(localStorage.key(0));
```

Example:

```text
name
```

You can also use it with `sessionStorage`:

```js
console.log(sessionStorage.key(0));
```

The order of keys should not be relied upon for application logic.

---

# 10. length

`length` tells you how many key/value pairs are currently stored.

```js
console.log(localStorage.length);
```

Example:

```text
name  → Bikas
city  → Mumbai
```

Then:

```js
localStorage.length
```

returns:

```text
2
```

---

# 11. Important: Storage Stores Strings

Web Storage values are strings.

Example:

```js
localStorage.setItem("age", 22);
```

When you retrieve it:

```js
const age = localStorage.getItem("age");

console.log(typeof age);
```

Output:

```text
string
```

The stored value is effectively:

```text
"22"
```

not:

```text
22
```

---

# 12. Storing Arrays and Objects

You cannot directly store a JavaScript object as an object.

Example:

```js
const user = {
    name: "Bikas",
    age: 22
};
```

Use `JSON.stringify()`:

```js
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

The object becomes a JSON string.

---

# 13. Getting the Object Back

Use `JSON.parse()`:

```js
const userData = JSON.parse(
    localStorage.getItem("user")
);

console.log(userData);
console.log(userData.name);
console.log(userData.age);
```

The complete flow:

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
localStorage
       ↓
JSON.parse()
       ↓
JavaScript Object
```

---

# 14. Storing an Array

Example:

```js
const todos = [
    "Learn DOM",
    "Practice DSA",
    "Learn React"
];

localStorage.setItem(
    "todos",
    JSON.stringify(todos)
);
```

Retrieve it:

```js
const todos = JSON.parse(
    localStorage.getItem("todos")
);

console.log(todos);
```

---

# 15. Practical localStorage Example

A common use case is saving a user's name.

```js
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    localStorage.setItem(
        "name",
        input.value
    );

});
```

Later:

```js
const name = localStorage.getItem("name");

console.log(name);
```

### Flow

```text
User enters name
       ↓
Form submit
       ↓
localStorage.setItem()
       ↓
Browser stores name
       ↓
Page refresh
       ↓
localStorage.getItem()
       ↓
Name is available
```

---

# 16. Practical sessionStorage Example

```js
sessionStorage.setItem(
    "currentStep",
    "2"
);
```

Retrieve:

```js
const step = sessionStorage.getItem(
    "currentStep"
);

console.log(step);
```

This is useful for temporary state such as:

```text
Multi-step form progress
Temporary UI state
Current tab/session information
```

---

# 17. Theme Example

`localStorage` is useful for remembering user preferences.

Save the theme:

```js
localStorage.setItem(
    "theme",
    "dark"
);
```

Read it when the page loads:

```js
const mode = localStorage.getItem("theme");

if (mode === "dark") {
    document.body.classList.add("dark-theme");
}
```

Flow:

```text
User selects dark mode
       ↓
localStorage.setItem()
       ↓
Refresh page
       ↓
localStorage.getItem()
       ↓
Apply dark theme
```

---

# 18. localStorage Use Cases

Common examples:

```text
Theme preference
Language preference
Todo list
Shopping list
UI preferences
Recently selected settings
Non-sensitive application state
```

For example:

```js
localStorage.setItem("theme", "dark");
```

---

# 19. sessionStorage Use Cases

Common examples:

```text
Temporary form progress
Current step in a multi-step form
Temporary UI state
Data needed only during the current session
```

Example:

```js
sessionStorage.setItem(
    "currentStep",
    "2"
);
```

---

# 20. Storage Limitations

## 1. Limited Storage

Web Storage is designed for relatively small amounts of data.

It should not be treated as a database.

For larger client-side datasets, consider technologies such as **IndexedDB**.

---

## 2. Only Strings

Storage values are strings.

For objects and arrays:

```js
JSON.stringify()
JSON.parse()
```

are commonly used.

---

## 3. Synchronous API

Web Storage operations are synchronous.

For example:

```js
localStorage.setItem("name", "Bikas");
```

For small amounts of data this is usually straightforward, but very large or frequent operations can affect performance.

---

## 4. Same-Origin Restrictions

Storage is associated with an origin.

An origin is based on:

```text
Scheme + Host + Port
```

Data stored by one origin is not automatically available to a different origin.

---

# 21. Security

Do not treat `localStorage` or `sessionStorage` as secure vaults.

Avoid storing sensitive information such as:

```text
Passwords
Highly sensitive personal information
Long-lived authentication secrets
```

JavaScript running in the same origin can generally access Web Storage.

If a site has an XSS vulnerability, malicious JavaScript may potentially read stored values.

Therefore:

```text
localStorage
     ≠
Secure storage
```

---

# 22. Storage Event

The browser provides a `storage` event that can be used to observe storage changes from another same-origin document.

Example:

```js
window.addEventListener("storage", (e) => {

    console.log("Key:", e.key);

    console.log("Old Value:", e.oldValue);

    console.log("New Value:", e.newValue);

});
```

The event is generally fired in **other same-origin documents**, not the document that performed the storage change.

This can be useful when coordinating state between browser tabs/windows.

---

# 23. Complete API

## localStorage

```js
localStorage.setItem("name", "Bikas");

localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.clear();

localStorage.key(0);

localStorage.length;
```

## sessionStorage

```js
sessionStorage.setItem("name", "Bikas");

sessionStorage.getItem("name");

sessionStorage.removeItem("name");

sessionStorage.clear();

sessionStorage.key(0);

sessionStorage.length;
```

---

# 24. Quick Comparison

| Method         | Purpose                    |
| -------------- | -------------------------- |
| `setItem()`    | Store data                 |
| `getItem()`    | Retrieve data              |
| `removeItem()` | Remove one item            |
| `clear()`      | Remove all items           |
| `key()`        | Get a key by index         |
| `length`       | Get number of stored items |

---

# 25. Most Important Difference

```text
┌───────────────────────────┐
│       localStorage        │
├───────────────────────────┤
│ Persistent browser data   │
│ Survives refresh          │
│ Survives tab close        │
└───────────────────────────┘


┌───────────────────────────┐
│      sessionStorage       │
├───────────────────────────┤
│ Session-scoped data       │
│ Survives refresh          │
│ Cleared when session ends │
└───────────────────────────┘
```

---

# 26. Quick Revision

```text
localStorage
→ Persistent browser storage


sessionStorage
→ Current session/tab storage


setItem()
→ Store


getItem()
→ Retrieve


removeItem()
→ Remove one


clear()
→ Remove all


key()
→ Get key by index


length
→ Number of items


JSON.stringify()
→ Object/Array → String


JSON.parse()
→ String → Object/Array
```

---

# 27. Easy Mental Model

```text
             Web Storage
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
 localStorage        sessionStorage
        │                   │
 Persistent             Temporary
        │                   │
 Refresh ✓             Refresh ✓
 Tab close ✓           Session ends ✗
```

> **Main idea:** Use `localStorage` when data should persist across visits, and `sessionStorage` when data only needs to exist during the current browsing session. Both are simple string-based storage APIs and should not be used as secure storage for sensitive information.
