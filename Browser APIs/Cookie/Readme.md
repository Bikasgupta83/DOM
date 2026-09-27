# Cookies

Cookies are small pieces of data that a browser stores for a website.

They are commonly used for:

* Session management
* User preferences
* Authentication/session identifiers
* Tracking
* Remembering small pieces of information

---

# 1. Creating a Cookie

JavaScript can create a cookie using:

```js
document.cookie = "username=Bikas";
```

Now the browser stores:

```text
Key       Value
 ↓          ↓
username → Bikas
```

To read cookies:

```js
console.log(document.cookie);
```

Output can look like:

```text
username=Bikas
```

---

# 2. Multiple Cookies

You can create multiple cookies:

```js
document.cookie = "username=Bikas";
document.cookie = "city=Mumbai";
```

Reading:

```js
console.log(document.cookie);
```

Can produce:

```text
username=Bikas; city=Mumbai
```

Each assignment to `document.cookie` generally sets or updates one cookie.

It does not replace all existing cookies.

---

# 3. Updating a Cookie

If a cookie with the same name already exists, assigning it again updates that cookie.

```js
document.cookie = "username=Bikas";

document.cookie = "username=Rahul";
```

Now:

```text
username=Rahul
```

The cookie name is used to identify the cookie.

---

# 4. `max-age`

`max-age` specifies how many seconds the cookie should remain valid.

Example:

```js
document.cookie = "mobile=8356050540; max-age=5";
```

This cookie is intended to remain valid for approximately **5 seconds**.

Conceptually:

```text
Cookie Created
      ↓
   5 seconds
      ↓
Cookie Expires
```

---

# 5. `expires`

`expires` specifies an exact expiration date and time for the cookie.

Example:

```js
document.cookie =
    "username=Bikas; expires=Fri, 26 Sep 2026 12:00:00 GMT";
```

After the expiration time, the browser can remove the cookie.

### `max-age` vs `expires`

| Attribute | Meaning                       |
| --------- | ----------------------------- |
| `max-age` | Lifetime in seconds           |
| `expires` | Specific expiration date/time |

When both are specified, `Max-Age` generally takes precedence.

---

# 6. Session Cookies

If you don't specify `expires` or `max-age`:

```js
document.cookie = "username=Bikas";
```

the cookie is generally a **session cookie**.

Its lifetime is associated with the browser session rather than a specified persistent expiration time.

---

# 7. Deleting a Cookie

A cookie can be deleted by setting its lifetime to zero:

```js
document.cookie = "username=; max-age=0";
```

The browser will remove the cookie.

Another common approach is to set an expiration date in the past.

```js
document.cookie =
    "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

### Important

When deleting a cookie, the relevant cookie attributes such as `path` may also need to match the cookie being deleted.

---

# 8. Cookie `path`

The `path` attribute controls which URL paths can receive the cookie.

Example:

```js
document.cookie =
    "username=Bikas; path=/";
```

Using:

```text
path=/
```

makes the cookie available throughout the website's paths, subject to the other cookie rules.

Example:

```text
https://example.com/
https://example.com/products
https://example.com/profile
```

---

# 9. `Secure`

The `Secure` attribute tells the browser to send the cookie only over a secure HTTPS connection.

Example:

```text
username=Bikas; Secure
```

In JavaScript:

```js
document.cookie =
    "username=Bikas; Secure";
```

### Important

`Secure` does not encrypt the cookie value by itself.

It controls whether the cookie is transmitted over secure connections.

---

# 10. `HttpOnly`

`HttpOnly` prevents JavaScript from accessing the cookie through `document.cookie`.

Example concept:

```text
Set-Cookie: sessionId=abc123; HttpOnly
```

Then:

```js
console.log(document.cookie);
```

will not expose that `HttpOnly` cookie.

### Important

`HttpOnly` is generally set by the server using the `Set-Cookie` response header.

It cannot be created as an `HttpOnly` cookie using:

```js
document.cookie = "...";
```

This is important for reducing the ability of injected JavaScript to directly read certain session cookies.

---

# 11. `SameSite`

`SameSite` controls when cookies are sent in cross-site requests.

The main values are:

```text
Strict
Lax
None
```

---

## `SameSite=Strict`

```text
SameSite=Strict
```

The browser applies the strictest cross-site sending restrictions.

This provides stronger cross-site request protection but can affect some legitimate cross-site flows.

---

## `SameSite=Lax`

```text
SameSite=Lax
```

This is a common default behavior for many cookies.

It allows cookies in some same-site contexts and certain top-level cross-site navigations while restricting many cross-site request contexts.

---

## `SameSite=None`

```text
SameSite=None; Secure
```

Allows the cookie to be sent in cross-site contexts, subject to browser cookie policies.

`SameSite=None` requires `Secure`.

---

# 12. Cookie Attributes Summary

| Attribute  | Purpose                             |
| ---------- | ----------------------------------- |
| `max-age`  | Cookie lifetime in seconds          |
| `expires`  | Cookie expiration date/time         |
| `path`     | Controls URL path scope             |
| `Secure`   | Send over secure HTTPS connections  |
| `HttpOnly` | Prevent JavaScript access           |
| `SameSite` | Controls cross-site cookie behavior |

---

# 13. Reading Cookies

Use:

```js
console.log(document.cookie);
```

Example:

```js
document.cookie = "username=Bikas";
document.cookie = "city=Mumbai";

console.log(document.cookie);
```

Possible result:

```text
username=Bikas; city=Mumbai
```

---

# 14. Reading a Specific Cookie

`document.cookie` returns all JavaScript-accessible cookies as a string.

For example:

```js
const cookies = document.cookie;

console.log(cookies);
```

To find a particular cookie, you can parse the string.

Example:

```js
const cookies = document.cookie.split("; ");

for (const cookie of cookies) {

    const [key, value] = cookie.split("=");

    console.log(key, value);

}
```

---

# 15. Cookies vs localStorage

Cookies and `localStorage` are both browser storage mechanisms, but they serve different purposes.

| Feature                 | Cookies                        | `localStorage`                 |
| ----------------------- | ------------------------------ | ------------------------------ |
| Storage size            | Small                          | Larger                         |
| Sent with HTTP requests | Yes, depending on cookie rules | No                             |
| JavaScript access       | Yes, unless `HttpOnly`         | Yes                            |
| Expiration              | Configurable                   | Usually persists until removed |
| `HttpOnly`              | Yes                            | No                             |
| `Secure`                | Yes                            | No cookie equivalent           |
| `SameSite`              | Yes                            | No                             |
| Common use              | Session/server-related data    | Client-side application data   |

---

# 16. Cookie vs localStorage Flow

### Cookies

```text
Browser
   ↓
Cookie
   ↓
HTTP Request
   ↓
Server
```

Cookies can automatically be included with applicable HTTP requests.

### localStorage

```text
JavaScript
    ↓
localStorage
    ↓
Browser
```

`localStorage` is not automatically sent with HTTP requests.

---

# 17. Security

Do not store sensitive information in cookies without considering the appropriate security attributes and server-side design.

For authentication/session cookies, a common security-oriented configuration can include:

```text
Secure
HttpOnly
SameSite
```

For example, a server may send:

```text
Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Lax
```

The exact configuration depends on the application's requirements.

---

# 18. Important XSS Connection

Consider:

```js
document.cookie = "username=Bikas";
```

JavaScript can read this cookie:

```js
console.log(document.cookie);
```

But an `HttpOnly` cookie cannot be read through JavaScript.

Therefore:

```text
Normal Cookie
      ↓
document.cookie
      ↓
JavaScript can read it


HttpOnly Cookie
      ↓
document.cookie
      ↓
JavaScript cannot read it
```

This makes `HttpOnly` especially relevant for cookies containing session identifiers.

---

# 19. Complete Basic Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cookies</title>
</head>

<body>

    <script>

        // Create cookie
        document.cookie = "username=Bikas";

        // Create cookie with max-age
        document.cookie =
            "mobile=8356050540; max-age=60";

        // Read cookies
        console.log(document.cookie);

        // Update cookie
        document.cookie =
            "username=Rahul";

        console.log(document.cookie);

        // Delete cookie
        document.cookie =
            "username=; max-age=0";

        console.log(document.cookie);

    </script>

</body>

</html>
```

---

# 20. Important Limitations

Cookies have some limitations:

* They have relatively small storage capacity.
* They can be automatically sent with applicable HTTP requests.
* `document.cookie` provides a string-based interface.
* JavaScript cannot access `HttpOnly` cookies.
* Cookie behavior depends on attributes such as `Path`, `Domain`, `Secure`, and `SameSite`.
* Browser privacy policies can affect cookie behavior.

Cookies are **not a replacement for `localStorage`**.

---

# 21. Quick Revision

```text
Cookie
→ Small browser-stored data associated with a website

document.cookie
→ Read/set JavaScript-accessible cookies

max-age
→ Lifetime in seconds

expires
→ Expiration date/time

path
→ URL path scope

Secure
→ HTTPS transmission

HttpOnly
→ JavaScript cannot access the cookie

SameSite
→ Controls cross-site cookie behavior
```

---

# 22. Most Important Concept

```text
                    Cookies
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    max-age          Secure        SameSite
        │              │              │
    Lifetime         HTTPS       Cross-site
                                   behavior
        │
        └──────────────┐
                       ↓
                    HttpOnly
                       │
               No JS access
```

### Remember

> **Cookies are mainly useful when data needs to participate in HTTP communication with a server, especially session-related functionality. `localStorage` is generally more suitable for client-side application data that does not need to be automatically sent with requests.**
