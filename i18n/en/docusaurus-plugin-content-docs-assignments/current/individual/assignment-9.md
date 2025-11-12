---
sidebar_label: Tugas 9
sidebar_position: 9
Path: assignment/individual/assignment-9
---

# Assignment 9: Integration of Django Web Service with Flutter Application

Platform-Based Programming (CSGE602022) — organized by the Faculty of Computer Science, Universitas Indonesia, Odd Semester 2025/2026

---

## Assignment Description

In this assignment, you will integrate the Django service you have previously built with the Flutter application you have also developed in earlier assignments.

The checklist for this assignment is as follows:

- [ ] Ensure that the deployment of your Django project is running properly.
- [ ] Implement an account registration feature in your Flutter project.
- [ ] Create a login page in your Flutter project.
- [ ] Integrate Django’s authentication system with your Flutter project.
- [ ] Create a custom model that matches your Django application’s model.
- [ ] Build a page that displays a list of all items retrieved from the deployed Django project’s JSON endpoint.
    - [ ] Display the name, price, description, thumbnail, category, and is_featured fields for each item (these can be adjusted according to your own model).
- [ ] Create a detail page for each item in the item list page.
    - [ ] This page should be accessible by tapping one of the item cards on the item list page.
    - [ ] Display all attributes of your item model on this page.
    - [ ] Add a button to navigate back to the item list page.
- [ ] Implement filtering on the item list page to display only items associated with the logged-in user.
- [ ] Answer the following questions in the `README.md` file located in the root folder (you may modify your existing `README.md`; add a subsection for each task):
    - [ ] Explain why we need to create a Dart model when fetching/sending JSON data. What are the consequences of directly mapping `Map<String, dynamic>` without using a model (in terms of type validation, null safety, and maintainability)?
    - [ ] What is the purpose of the _http_ and _CookieRequest_ packages in this assignment? Explain the difference between their roles.
    - [ ] Explain why the _CookieRequest_ instance needs to be shared across all components in the Flutter application.
    - [ ] Explain the connectivity configuration required for Flutter to communicate with Django. Why do we need to add 10.0.2.2 to ALLOWED_HOSTS, enable CORS and SameSite/cookie settings, and add internet access permission in Android? What would happen if these configurations were not set correctly?
    - [ ] Describe the data transmission mechanism—from user input to being displayed in Flutter.
    - [ ] Explain the authentication mechanism for login, registration, and logout—from entering account data in Flutter to Django’s authentication process and displaying the menu in Flutter.
    - [ ] Explain how you implemented the checklist above step-by-step (not just following a tutorial).
- [ ] Perform `add`-`commit`-`push` to GitHub.

:::danger
**Notes**
- Make sure the application design matches the website you created earlier and differs from the tutorial’s design.
- Don’t forget to submit your deployment link on SCELE.
- The teaching assistants will check the *last commit* from your assignment repository. **Assignments submitted more than 24 hours late will receive a score of 0.** If submitted less than 24 hours late, a grade reduction will be applied.
:::

## Deadline

The deadline for **Assignment 9** is **Wednesday, November 19, 2025, at 12:00 PM (noon)**.