---
title: 'Assignment 6: JavaScript and AJAX'
sidebar_label: Assignment 6
sidebar_position: 6
path: assignments/individual/assignment-6
---
# Assignment 6: JavaScript and AJAX

Platform-Based Programming (CSGE602022) — Organized by the Faculty of Computer Science Universitas Indonesia, Odd Semester 2025/2026

---

## Assignment Overview

In this assignment, you will implement AJAX functionality on the website you have previously developed. This assignment focuses on enhancing user experience through asynchronous operations without full page reloads.


## Assignment Requirements

### Part 1: AJAX Implementation

You must convert all features listed below to use AJAX:

#### Product CRUD Operations
- [ ] Implement all CRUD (Create, Read, Update, Delete) operations for products using AJAX
- [ ] **Important:** Do not use context render except for AJAX-related purposes

#### Authentication
- [ ] Convert Login functionality to use AJAX
- [ ] Convert Register functionality to use AJAX

---

### Part 2: User Interface Enhancements

#### Modal Components
- [ ] Create a button that opens a modal containing a form for **creating** new products
- [ ] Create a button that opens a modal containing a form for **updating** existing products
- [ ] Implement a confirmation modal that appears when users attempt to **delete** a product

#### Dynamic Content Updates
- [ ] Ensure that after performing any action from the modal (create/update/delete), the product list refreshes automatically **without requiring a full page reload**
- [ ] Add a **refresh button** that fetches and displays the latest product list without reloading the page

#### State Management
- [ ] Implement a **Loading state** display using JavaScript (shown while data is being fetched)
- [ ] Implement an **Empty state** display using JavaScript (shown when no products exist)
- [ ] Implement an **Error state** display using JavaScript (shown when requests fail)

#### Toast Notifications
- [ ] Display toast notifications for the following actions:
  - Creating a product
  - Updating a product
  - Deleting a product
  - Logging in
  - Logging out
  - Registering a new account
- [ ] **Note:** Your toast implementation must be different from the tutorial

---

### Part 3: Documentation

Update your `README.md` file in the root folder with answers to the following questions. Add a new section for Assignment 6:

#### Required Questions

1. **What is the difference between synchronous request and asynchronous request?**

2. **How does AJAX work in Django (request–response flow)?**

3. **What are the advantages of using AJAX compared to regular rendering in Django?**

4. **How do you ensure security when using AJAX for Login and Register features in Django?**

5. **How does AJAX affect user experience (UX) on websites?**

---

### Part 4: Version Control

- [ ] Perform `git add` to stage your changes
- [ ] Perform `git commit` with a descriptive message
- [ ] Perform `git push` to upload your changes to GitHub

---

## Submission Deadline

**Due Date:** Wednesday, October 8, 2025  
**Time:** 12:00 PM (noon)

---

## Important Notes

- All AJAX implementations must be functional and tested
- Ensure proper error handling for all AJAX requests
- Your UI must be responsive and user-friendly
- Follow security best practices, especially for authentication features
- Make sure your code is clean, well-commented, and follows proper naming conventions

---

Good luck with your assignment! 🚀