1. What is the DOM?
When the browser loads:

<!DOCTYPE html>
<html>
    <body>
        <h1 id="title">Hello</h1>
        <button class="btn">Click</button>
    </body>
</html>

The browser converts the HTML into a tree-like object structure called the DOM — Document Object Model.


Conceptually:

    Document
        │
        └── html
            │
            └── body
                │
                ├── h1
                │   └── "Hello"
                │
                └── button
                    └── "Click"


JavaScript can access this tree through:
document

For example:
console.log(document);