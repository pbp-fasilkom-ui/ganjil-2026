---
sidebar_label: Assignment 2
sidebar_position: 2
Path: assignments/individual/assignment-2
---

# Assignment 2: Implementation of *Model-View-Template* (MVT) in Django

Platform-Based Programming (CSGE602022) — organized by the Faculty of Computer Science, University of Indonesia, Odd Semester 2025/2026

---

## Assignment Description

In this assignment, you will implement the *Model-View-Template* concept along with other topics you have learned in class and tutorials. Note that the project created for this assignment must be **different** from the project used in the tutorials.

## Application Theme

The main theme of the application for this assignment is a ***Football Shop***. You are free to choose the name and sub-theme of the application. Make your assignment as creative as possible, while ensuring it aligns with the specified theme.

:::danger
Ensure that the name and content of your assignment do **NOT** contain **NSFW/18+** elements or anything offensive related to race, religion, or other sensitive issues (SARA). Violation of this rule may lead to consequences that could affect other courses, such as having your GitHub account blocked.
:::

Your application must include the following attributes in its model:

- `name` as the item name with type `CharField`.
- `price` as the item price with type `IntegerField`.
- `description` as the item description with type `TextField`.
- `thumbnail` as the item image with type `URLField`.
- `category` as the item category with type `CharField`.
- `is_featured` as the featured status of the item with type `BooleanField`.

You are welcome to add other attributes if desired, such as `stock`, `rating`, `brand`, etc. However, the model must include the six mandatory attributes listed above (`name`, `price`, `description`, `thumbnail`, `category`, `is_featured`). The names of these attributes can be adjusted to suit your application's needs.

Examples of application ideas you can create:

- *Sigma Sportswear*: `name`, `price`, `description`, `thumbnail`, `rating`, `size`.
- *Garuda Shop*: `name`, `price`, `description`, `thumbnail`, `category`, `stock`.
- Soccer Store: `name`, `price`, `description`, `thumbnail`, `quantity`, `brand`.

## Assignment Checklist

The checklist for this assignment is as follows:

- [ ] Create a new Django project.
- [ ] Create an application named `main` within the project.
- [ ] Configure routing in the project to run the `main` application.
- [ ] Create a model in the `main` application named `Product` with the following mandatory attributes:
    - `name` as the item name with type `CharField`.
    - `price` as the item price with type `IntegerField`.
    - `description` as the item description with type `TextField`.
    - `thumbnail` as the item image with type `URLField`.
    - `category` as the item category with type `CharField`.
    - `is_featured` as the featured status of the item with type `BooleanField`.
- [ ] Create a function in `views.py` to be returned to an HTML *template* that displays the application name, your name, and your class.
- [ ] Create routing in `urls.py` of the `main` application to map the function created in `views.py`.
- [ ] Deploy the application to PWS so that it can be accessed by your peers via the Internet.
- [ ] Create a `README.md` file containing the link to the deployed PWS application and answers to the following questions:
    - Explain how you implemented the checklist above step-by-step (**not just by following the tutorial**).
    - Create a diagram showing the client request to the Django-based web application and its response, and explain the relationship between `urls.py`, `views.py`, `models.py`, and the HTML file in the diagram.
    - Explain the role of `settings.py` in a Django project!
    - How does database migration work in Django?
    - In your opinion, among all existing frameworks, why is the Django framework chosen as the starting point for learning software development?
    - Do you have any feedback for the teaching assistant for Tutorial 1 that you previously completed?

:::info
**Tips**: You may include links or upload images in your `README.md` file for the diagram-related question.
:::

:::danger
Note that you must work on this assignment using a **different repository** from the tutorial. Submissions using an incorrect repository will not be graded.
:::

## Submission Deadline

The deadline for Assignment 2 is **Wednesday, September 10, at 12.00 PM.**

Please submit the link to the repository you used in the submission slot provided on SCELE.

:::warning
Late submissions will incur a 10-point deduction. Plagiarism in any form will not be tolerated.
:::