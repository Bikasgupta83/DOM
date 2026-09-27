## DOM Element Selection

### `getElementById()`

* Selects **one element** using its unique `id`.
* Returns the **Element** if found, otherwise `null`.
* ID is intended to uniquely identify an element in the document.

### `getElementsByClassName()`

* Selects **all elements** having the specified class name.
* Returns an **HTMLCollection**.
* Can contain multiple elements.

### `getElementsByTagName()`

* Selects **all elements** having the specified HTML tag name.
* Returns an **HTMLCollection**.
* Example: `"p"` selects all `<p>` elements.

### `querySelector()`

* Selects the **first element** that matches the given CSS selector.
* Returns the **first matching Element**, otherwise `null`.
* Supports CSS selectors such as `#id`, `.class`, `tag`, and attribute selectors.

### `querySelectorAll()`

* Selects **all elements** that match the given CSS selector.
* Returns a **NodeList**.
* If no element matches, it returns an **empty NodeList**.

---

### Quick Comparison

| Method                     | Returns                         |
| -------------------------- | ------------------------------- |
| `getElementById()`         | Element / `null`                |
| `getElementsByClassName()` | HTMLCollection                  |
| `getElementsByTagName()`   | HTMLCollection                  |
| `querySelector()`          | First matching Element / `null` |
| `querySelectorAll()`       | NodeList                        |
