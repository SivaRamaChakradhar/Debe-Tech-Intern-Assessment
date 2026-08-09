# Debe Learning — Full Stack Development Intern Assessment

## Part 1 — GitHub Portfolio Walkthrough

### 1. GitHub Profile

GitHub: https://github.com/SivaRamaChakradhar

---

## 2. Repository 1 — BookStore

**Repository:** https://github.com/SivaRamaChakradhar/BookStore

**Project:** MERN Stack Online BookStore

**Tech-Stack:** ReactJS, MongoDB, NodeJS, ExpressJS, JWT Authentication

### What problem does it solve?

BookStore is a full-stack online book shopping application that provides different workflows for customers, sellers, and the platform administrator.

Users can register and log in, browse books, view book details, manage their cart, and place orders. Sellers can manage their books, while the administrator manages the overall platform and its users, books, and orders.

### What I specifically built

I built the application across both the frontend and backend using the MERN stack.

On the backend, I worked with:

* Node.js and Express.js for REST APIs
* MongoDB and Mongoose for data persistence
* JWT-based authentication
* bcrypt for password hashing
* Authentication and authorization middleware
* User, seller, book, cart, and order functionality
* Role-based access for users and sellers
* A dedicated administrator role for platform management
* CRUD APIs for book management
* Order creation and order management

On the frontend, I implemented the user shopping flow, including authentication, book browsing, book details, cart functionality, checkout/order creation, and role-specific interfaces.

I worked on both the frontend and backend, integrating the React application with the Express REST APIs and MongoDB database.


### One design decision I would make differently today

One design decision I would improve is the separation of role-specific frontend and backend flows.

The application has three roles: user, seller, and a single platform administrator. As I added more role-specific features, I found that some of the authentication, authorization, navigation, and UI logic became distributed across different parts of the application.

Today, I would structure the role-based architecture more explicitly from the beginning. I would centralize authorization rules in reusable backend middleware and organize the frontend around clearly separated role-specific routes and layouts.

This would make the codebase easier to maintain as more roles or permissions are added and would make the authorization flow easier to understand and test.

---

## 3. Repository 2 — Markdown Rendered

**Repository:** https://github.com/SivaRamaChakradhar/markdown_rendered

**Live application:** https://markdown-rendered-rho.vercel.app/

**Project:** Markdown Renderer

**Tech-Stack:** React, Vite, Tailwind CSS, React Markdown

### What problem does it solve?

Markdown Rendered is a web application that allows users to upload Markdown files and immediately view their rendered content.

Instead of manually opening Markdown files or using a separate Markdown viewer, the application provides a simple interface where users can upload `.md` or `.markdown` files, preview the rendered result, copy the content, and work with Markdown in both light and dark modes.

The application also handles common usability cases such as drag-and-drop uploads, invalid files, responsive layouts, and syntax highlighting for code blocks.

### What I specifically built

I built the application using React and Vite with Tailwind CSS for the UI.

The main functionality I implemented includes:

* Markdown file upload
* Drag-and-drop file support
* Live Markdown rendering
* GitHub-style Markdown features
* Code-block syntax highlighting
* Copy functionality
* Dark and light mode
* Responsive design
* Invalid-file/error handling

For Markdown processing, I used React Markdown together with Remark GFM and Rehype Highlight. Remark GFM provides support for GitHub-flavored Markdown features, while Rehype Highlight is used for syntax highlighting in code blocks.

This project also required me to learn libraries that I was not initially familiar with. Rather than treating Markdown as plain text and manually implementing the rendering behavior, I learned how the Markdown processing pipeline works and integrated the appropriate libraries into the React application.

The repository currently contains 14 commits, reflecting the incremental development of the application.

### One design decision I would make differently today

One design decision I would revisit is that I focused the application on rendering uploaded Markdown files rather than providing an editing experience.

If I were building the project again, I would add a Markdown editor with a live preview alongside the existing renderer. This would allow users to write or modify Markdown and immediately see how the changes are rendered.

I think this would make the application more useful because users would not need to edit the Markdown file separately and upload it again just to see the result.

---

## Summary

These two repositories represent different areas of my development experience.

**BookStore** demonstrates full-stack application development, including REST APIs, authentication, authorization, database design, and frontend-backend integration.

**Markdown Rendered** demonstrates frontend development, responsive UI design, file handling, Markdown processing, third-party library integration, and learning unfamiliar technologies while building a working application.
