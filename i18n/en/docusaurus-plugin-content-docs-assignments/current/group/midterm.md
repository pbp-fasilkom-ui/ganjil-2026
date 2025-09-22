---
sidebar_label: Midterm Project
sidebar_position: 1
Path: assignments/group/midterm
---
# Midterm Project

**Creating a Website using Django Framework (Group Project)**

**Published Date: Wednesday, September 22, 2025 12:00 WIB**
*Version 1.0*

---

## Specific Learning Objectives

1. Design web pages with ***Responsive Web Design*** utilizing CSS frameworks
2. Implement websites using Django framework fulfilling ***Models*, *Views*, and *Templates***
3. Implement ***Unit Testing*** and ***PWS deployment***

## General Group Assignment Rules

1. Each group consists of 5-6 members. Group divisions can be viewed at [SCELE & Discord PBP](https://docs.google.com/spreadsheets/d/1twoER50rNBwHJRwhYUMGU25nZXf-lNYhYoNPdWmttoQ/edit?usp=sharing).

2. Each group creates one Git repository to be used by all group members for collaboration. Submit the Git repository link to SCELE.

   :::info  
   Each group is recommended to use **GitHub Organizations** to facilitate collaboration between team members. Additionally, for the Final Project assignment later, each group will be asked to create a new repository, and **GitHub Organizations** can help 'group' these repositories.  
   :::  

3. Each group is free to find their own ideas for the application to be created. The application theme is **SPORTS**.

4. This theme is chosen as it coincides with current events: the fourth round of *2026 World Cup qualifications* held in October 2025. You are **free to choose any sport** (football, badminton, basketball, etc.) and **free to decide the website format**, for example:  
    - Sports equipment store website  
    - Fansite for specific sports  
    - Information about sports venues in specific cities/provinces  
    - Sports news/community portal

5. Each group must determine the main product category that becomes the _initial dataset_ of the group's application. The main product category must contain at least 100 types of products.

6. Each group implements the _initial dataset_ in the form of *Models class* and stores data from the _initial dataset_ into Django's *database*. Data sources for the _initial dataset_ can come from anywhere, for example from Kaggle and Wikipedia.

   :::info
   **Tips**: If datasets are not available on Google or any other source, you can use **scraping techniques** for your dataset needs.
   :::

7. Each group member works on different modules. Modules are determined by the group according to the application idea discussed within the group.

8. Group assignments are deployed as a unified web application. Each group is expected to use PWS as PaaS for TK project deployment, but each group is also given freedom to deploy on other PaaS platforms.

9. In the `README.md` section, you **MUST** write:  
    - Description of your website,
    - Group member names + NPM,
    - List of modules + module descriptions,
    - Dataset source link,
    - Types of website users, 
    - PWS link, and 
    - Website design link (Figma, Canva, etc.) for your group [OPTIONAL].

   :::info
   If you implement Figma for your website UI design, you will get bonus points for this project. Please utilize the group assignment guide to learn more about resources you can use for this assignment.
   :::

   :::info
   **Tips**: You can utilize various `README.md` writing techniques to create neat and structured `README.md` files.
   :::

## Specific Rules per Group Member

1. Apply *Models* by creating, utilizing those provided by Django, or utilizing those created by other group members (in other modules).

2. Apply *Views* to process *requests* and process data to generate responses using HTML templates or return JSON responses.

3. Apply HTML templates with systematic and efficient frameworks, such as `base.html`, `header.html`, and `footer.html`.

4. Apply HTML templates using *responsive frameworks* (such as [Bootstrap](https://getbootstrap.com/) or [Tailwind](https://tailwindcss.com/)).

5. Have form pages that can accept user input and then be processed by *Views*. Examples of processing by *Views* include *inserting* data into Models, *querying* data from Models, and *updating* data in Models.

6. Implement JavaScript with AJAX calls.

7. Apply information filtering for logged-in users only. **For example**, address data, age, and phone numbers can only be viewed by logged-in users.

8. Apply filters to the product list from the _initial dataset_ displayed. For example, displaying product lists based on price.

## Group Assignment Stages

| Stages and *deliverables* | Deadline and Information |
|---------------------------|-------------------------|
| **Stage I (40%)** <ul><li>Creating group GitHub</li><li>README.md on GitHub containing:</li><ol><li>Group member names</li><li>Application description (application story proposed and its benefits)</li><li>List of modules to be implemented</li><li>Main product category *initial dataset* source</li><li>User *roles* and their descriptions (as there may be more than one type of user accessing the application)</li><li>PWS *deployment* link and design link</li></ol></ul> | **Deadline: Wednesday, October 8, 2024, at 23:55 WIB** <p>**Submit to SCELE: GitHub Link** with Django project *code base* prepared on GitHub.</p> |
| **Stage II (60%)** <p>(Modules are well implemented)</p> <p>Checklist:</p> <ul><li>Application modules from each group member</li><li>*URL Mapping* for modules</li><li>*Models* for modules</li><li>*Views* for modules</li><li>Integrated as one unified application</li><li>Functionality according to design specifications</li><li>Unit Tests (*passed*) for all aspects, expected *code coverage* should reach at least 80%</li></ul> | **Deadline: Friday, October 24, 2024, at 23:55 WIB** <p>**Submission Criteria:** All modules worked on by each group member are visible and accessible.</p> |

## Group Assignment Guide
To facilitate your group assignment work, the teaching assistant team has prepared a comprehensive guide that can serve as a reference during the development process. It can be accessed through this [Link](./midterm-guide.md).