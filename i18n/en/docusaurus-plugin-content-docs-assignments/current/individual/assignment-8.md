---
title: 'Tugas 8: Flutter Navigation, Layouts, Forms, and Input Elements'
sidebar_label: Assignment 8
sidebar_position: 8
path: assignments/individual/assignment-8
---

# Assignment 8: Flutter Navigation, Layouts, Forms, and Input Elements

Platform-Based Programming (CSGE602022) — Organized by the Faculty of Computer Science Universitas Indonesia, Odd Semester 2025/2026

## Assignment Description

In this assignment, you will implement **navigation**, **layout**, **form**, and **form input elements** in the Flutter application you developed .

The checklist for the current assignment is as follows:

- [ ] Create at least 1 new page for the application, specifically an **add new item form** page with the following requirements:
  - [ ] Use at least three input elements, specifically `name`, `price`, and `description`. 
    Add input elements according to the Django Football Shop application you have developed previously (e.g. `thumbnail`, `category`, and `is_featured`).
  - [ ] Included a **Save** button.
  - [ ] Each input element in the form must also be validated with the following criterias:
    - [ ] No input field can be left empty.
    - [ ] Each input field must contain data in the model's data type.

:::danger
⚠️ **Warning:**
Pay attention to cases such as negative numbers, minimum string length (if applicable), maximum string length (if applicable), and so on. It's not just about data types!
:::

- [ ] Redirect the user to the new item addition form when they press the **Add Product** button on the main page.

- [ ] Display the data from the form in a **pop-up** after pressing the **Save** button on the new item addition form page.

- [ ] Create a **drawer** in the application with the following requirements:
  - [ ] The drawer should contain at least two options, **Home** and **Add Product**.
  - [ ] When the **Home** option is selected, the application should redirect the user to the main page.
  - [ ] When the **Add Product** option is selected, the appliation should redirect the user to the new addition form page.

- [ ] Answer the following questions in the `README.md` of the root folder (feel free to modify the `README.md` you have created for the previous assignment; add subheadings for each assignment).
  - [ ] Explain the difference between **`Navigator.push()`** and **`Navigator.pushReplacement()`** in Flutter. In what context of your application is each best used?

  - [ ] How do you use **hierarchy widget** like `Scaffold`, `AppBar`, dan `Drawer` to build a consistent page structure in the your application?

  - [ ] In the context of user interface design, what do you think is the advantages of using **layout widget** like `Padding`, `SingleChildScrollView`, and `ListView` when displaying form elements? Provide usage examples from your application.
  - [ ] How do you set the *color theme* so that your Football Shop have a visual identity that is consistent with the shop brand.

- [ ] Perform `add`, `commit`, and `push` to GitHub.

# Submission Deadline

The deadline for Assignment 8 is **Wednesday, November 12th 2025, 12:00 PM**.

Please submit the repository link to the provided submission slot on SCELE.