# Group Project Guide

To help you complete your group project, the teaching assistant team has prepared a comprehensive guide that can serve as a reference throughout the development process. This guide is compiled based on experience and best practices for team collaboration commonly used in software development.

Group projects have their own complexity compared to individual assignments. A deep understanding of workflows that support effective collaboration is required. Without a structured workflow, various technical problems often arise such as code conflicts, work duplication, and even loss of work progress that has been made. This guide will outline standard workflows that you can apply, covering team organization setup, architecture design, branch management, to CI/CD implementation for automatic deployment.

The purpose of this guide is to ensure that each team member can contribute optimally, the collaboration process runs smoothly without technical obstacles, and produces maximum output. The teamwork skills you learn here will also be very useful for future projects, both in other courses and in the future.

## GitHub Organization
GitHub Organization is a shared workspace that allows teams to manage various repositories in one place.

### Steps to Create GitHub Organization
1. Log in to your GitHub account
2. Click your profile photo in the top right corner
3. Select "organizations" from the dropdown menu
4. Click the "New organization" button
5. GitHub will display plan options, choose "Create a free organization"
6. Click "Continue" to proceed
7. Fill in the organization details form:
    * Organization account name: Create a representative name for your team (example: pbp-group-a1)
    * Contact email: Use the email of one team member
    * This organization belongs to: Select "My personal account"
8. In the "Add organization members" section, enter team members' GitHub usernames
9. Click "Invite" for each member
10. Click "Complete setup" when finished

### Creating Repository in Organization

1. On the organization page, click "New repository"
2. Fill in Repository name according to your project
3. Choose Public or Private as needed
4. Click "Create repository"

### Setting Member Permissions

1. Click the "People" tab in the organization
2. Find the name of the member you want to configure
3. Click the dropdown next to their name
Choose the appropriate role:
    * Owner: Full access, can manage organization
    * Member: Access according to given permissions

By following the steps above, your team will have an organized GitHub workspace for working on group projects.

## Figma
![image](/img/guide-1.png)
Figma is one of the cloud-based design tools widely used to create user interface (UI) designs and user experience (UX) for websites and applications. Figma's main advantage over other design software is its collaborative nature. Many designers, developers, and stakeholders can work together on one file in real-time, similar to Google Docs. This makes it easier for teams to discuss, revise, and approve designs without having to send files back and forth.

In learning Figma, there are several things you can do:

1. **Preparation & create account / new file**
First, open Figma (can be through browser or its application). If you don't have an account yet, register first. If you already have one, just click New File to start and you can begin experimenting.

:::info
**Tips**
You can also claim Figma Education for Figma Pro features
:::

2. **Creating Frame (artboard)** 
<p>
   Frame in Figma can be considered as a "container" or "canvas" where you place design elements, similar to artboards in Photoshop or slides in PowerPoint. Each application screen or website page is usually created in one frame, so elements like text, images, and buttons are neatly arranged within it. Frames also support responsive settings through constraints or auto layout, so designs can adjust size when the screen changes. Additionally, frames can be nested (frame within frame) making it easier to manage structure, for example large frames for main screens and small frames for cards or buttons.

**Implementation Example**
- Select Frame tool (Frame icon or press F/A).
- Determine size by selecting preset (example: iPhone, Desktop) or create custom size.
- Frame functions as screen/page, so each prototype screen must be inside a frame.
- If you already have a collection of objects, they can be made into one frame by selecting objects → Frame selection.
</p>

3. **Creating basic elements: shape, text, image**
<p>
    Basic elements in Figma include shapes (rectangle, ellipse, line, polygon), text, image, frame, and vector/pen tool. Shapes are used to create simple forms, text to add writing, image to insert pictures, frame as container or artboard, and vector/pen tool to draw custom shapes. All these elements become the main materials in building layouts, components, and interface designs in Figma.
    
**Implementation Example**
- Add rectangle (R), ellipse (O), line (L), and text (T) through toolbar or shortcuts.
- Set properties like color, border, radius, and elevation in the right panel.
- For images, use Place image menu or simply drag-drop to canvas.
</p>

:::info
Always give clear and logical layer names (example: btn-primary, hero-title) for easy management in large projects.
:::

4. **Organizing structure: group, frame nesting, and constraints**
<p>
    Organizing structure in Figma means arranging design elements to be neater, more organized, and easier to manage. Frame nesting, which is placing frames within other frames to create clear design hierarchy (for example large frame for main screen, small frame for cards or buttons) while constraints, which are position rules for elements relative to their parent frame so elements remain proportional or responsive when screen size changes. The combination of the three helps maintain layout consistency while facilitating the editing process and handoff to developers.
    
**Implementation Example**
- Group elements using Group or Frame for neater and easier management.
- Learn Constraints (for example left, right, center, stretch) so elements react correctly when frame size changes.
</p>

5. **Auto Layout**
<p>
    Auto Layout in Figma is a feature that allows elements within a frame to be automatically arranged following direction rules (horizontal or vertical), spacing between elements, and padding within their container. With Auto Layout, designs become more flexible because element size and position can adjust dynamically when content increases, decreases, or changes. This feature is very useful for creating consistent and responsive components, such as buttons, cards, lists, or navbar, without having to rearrange element positions one by one.
    
**Implementation Example**
- Select several objects, then activate Auto Layout (in right panel or press Shift + A). Auto Layout makes elements automatically arranged in horizontal, vertical, or grid direction.
- Spacing between elements will automatically adjust when content increases or decreases.
</p>

:::info
**TIPS**
Use the Suggest Auto Layout feature to convert designs to auto layout automatically.
:::

6. **Components & Variants**
<p>
    Components & Variants in Figma are features for creating consistent and reusable design elements. Component functions as the "master" of an element, for example button or card, so every time it's used (instance), changes to the master will automatically affect all its instances. Meanwhile, Variants allow one component to have multiple versions or states, such as default, hover, and disabled buttons, which can be combined in one set.

**Implementation Example**
- Convert elements (for example buttons) into Components with Create component menu.
- Group variations into Variants (example: default, hover, disabled) to facilitate instance swapping.
</p>

:::info
Component + Variants help maintain design consistency and speed up mass changes. Use interactive components to directly handle states like hover or click in prototypes.
:::

7. **Styles & Simple Design System**

By saving these elements as Styles, designers don't need to reset every time they want to use the same colors or text, just apply existing styles. This approach also facilitates updates, because changes to styles will be automatically applied to all connected elements.

8. **Prototyping: connecting frames & creating interactions**
<p>
    Prototyping in Figma is the process of connecting frames or elements to simulate flow and interactions in an application or website. With this feature, designers can determine how users move from one screen to another, add interactions like click, hover, or animation transitions, to create an experience as if the application is already functioning. Prototyping helps teams and stakeholders understand flow, test user experience, and provide feedback before design enters the development stage.
    
**Implementation Example**
- Enter Prototype tab in right panel.
- Drag node from element (for example button) to destination frame to create navigation.
- Select trigger: On Click, On Hover, etc.
- Determine action: Navigate, Open overlay, Change to.
- Set animation: Instant, Smart Animate, etc.
- Use Present button to preview flow as if application is actually running.
</p>

9. **Preview on device / share prototype**
<p>
    Figma provides features to try and share design results in interactive simulation form. With preview, designers can directly see how prototypes appear and function on real devices through Figma Mirror application or Present mode. Meanwhile, share features allow designs to be shared via links, with permission settings (view or edit), so teams and stakeholders can provide feedback directly through comments within the file. You can share prototype links (set permission: view / edit) and note comments directly in files using Comment tool.
</p>

10. **Developer handoff (Inspect / Dev Mode)**
<p>
    Developer handoff (Inspect / Dev Mode) in Figma is the stage when finalized designs are prepared for use by developers. Through Inspect features or Dev Mode, developers can see technical design details such as size, position, spacing, complete colors with CSS code, and directly export image assets or icons needed. Designers can also mark elements as Ready for Dev so development teams know which parts are ready to be implemented.
</p>
 
Reference: [Figma Tutorial](https://www.youtube.com/watch?v=HoKD1qIcchQ&pp=ygUOZmlnbWEgdHV0b3JpYWw%3D)

## Pull Request
Pull Request (PR) is a mechanism to propose changes from feature branch to main branch. Through PR, other team members can see, review, and provide feedback on code that will be merged before entering the main branch.

### Creating Pull Request

1. After pushing feature branch to remote, open repository on GitHub
2. GitHub usually displays a yellow banner with "Compare & pull request" button - click that button

![image](/img/guide-2.png)

3. If banner doesn't appear, click "Pull requests" tab then click "New pull request"

4. Make sure branch settings are correct:
   - **Base**: `main` (destination branch)
   - **Compare**: `feat/feature-name` (source branch)

5. Fill in PR information:
   - **Title**: Provide clear and descriptive title
   - **Description**: Explain changes made or features added

![image](/img/guide-3.png)

6. Click "Create pull request"

### Review Process

#### As Reviewer

1. Open PR that needs to be reviewed
2. Click "Files changed" tab to see all code changes
3. Provide comments on specific code lines if needed
4. After review is complete, click "Review changes" in top right corner
5. Choose "Approve" if code is ok, or "Request changes" if improvements needed

#### As PR Author

If there are requested changes:
1. Make improvements locally
2. Commit and push changes to the same branch:
```bash
git add .
git commit -m "Fix review comments"
git push origin feat/feature-name
```
3. PR will automatically update with new commits

### Merge Pull Request

After PR is approved:

1. Click "Merge pull request" button at bottom of PR
2. Confirm by clicking "Confirm merge"

![image](/img/guide-4.png)

### Handling Conflicts

If PR has conflicts, GitHub will display error message. To resolve:

1. Locally, pull updates from main to feature branch:
```bash
git checkout feat/feature-name
git pull origin main
```
2. Resolve conflicts manually in code editor
3. Commit and push:
```bash
git add .
git commit -m "Resolve merge conflicts"
git push origin feat/feature-name
```

By using Pull Requests, your team can ensure all changes are reviewed before entering the main branch.

## Merge Conflict
Merge conflict occurs when Git cannot automatically combine changes from two different branches because there are changes to the same code lines. This often happens in team work when two or more developers modify the same file simultaneously.

### When Do Merge Conflicts Occur?

Conflicts usually appear when:
- Two developers change the same lines in the same file
- One developer deletes a file while another modifies it
- There are changes to project structure that collide

## Identifying Merge Conflict

When conflict occurs, Git will give error message like:
```
Auto-merging views.py
CONFLICT (content): Merge conflict in views.py
Automatic merge failed; fix conflicts and then commit the result.
```
![image](/img/guide-5.png)

To see which files have conflicts:
```bash
git status
```
![image](/img/guide-6.png)

Output will display files with "both modified" status.

### Resolving Merge Conflict with VS Code

1. Open conflicted file in VS Code
2. VS Code will automatically detect and highlight conflict areas with different colors
3. Click "Resolve in Merge Editor"

    ![image](/img/guide-7.png)

4. In Merge Editor, you'll see three panels:
   - **Incoming**: Changes from branch being merged
   - **Current**: Changes from current branch  
   - **Result**: Final result after resolving conflict

    ![image](/img/guide-8.png)

5. For each conflict, choose one option:
   - **Accept Incoming**: Use version from branch being merged
   - **Accept Current**: Use version from current branch
   - **Accept Combination**: Combine both versions (if possible)

6. After all conflicts are resolved, click "Complete Merge"
7. Save resolved files
8. Commit changes:

```bash
git add .
git commit -m "Resolve merge conflict"
```

## Git Feature Branch Workflow
Git Feature Branch Workflow is a development methodology where each feature or task is worked on in a separate branch from the main branch. After completion, that branch is merged back to main through pull request. This workflow allows multiple developers to work in parallel without interfering with each other.

In this workflow, there are several types of branches:
* Main/Master Branch: Main branch that is always in stable condition and ready to deploy
* Feature Branch: Temporary branch for developing one specific feature or module
* Hotfix Branch: Branch for urgent bug fixes in production (optional)

## Implementing Git Feature Branch Workflow

### Clone Repository

1. Clone organization repository to local:
```bash
git clone https://github.com/organization-name/repository-name.git
cd repository-name
```

2. Make sure you're on main branch and update to latest version:
```bash
git checkout main
git pull origin main
```

### Creating Feature Branch

3. Create new branch for feature to be worked on:
```bash
git checkout -b feat/feature-name
```

Examples of good branch names:
- `feat/user-authentication`
- `feat/product-catalog`

### Development in Feature Branch

4. Do development as usual in that branch
5. Commit changes regularly with clear messages:
```bash
git add .
git commit -m "Add user registration form"
git commit -m "Implement password validation"
```

6. Push feature branch to remote repository:
```bash
git push origin feat/feature-name
```

### Synchronization with Main Branch

During development, main branch might already have updates from other team members. To avoid major conflicts, perform synchronization regularly:

7. Make sure you're on feature branch:
```bash
git branch
```

8. If not on feature branch yet, checkout to that feature branch:
```bash
git checkout feat/feature-name
```

9. Update main branch and merge to feature branch:
```bash
git pull origin main
```

10. If there are conflicts, resolve them first, then commit merge results

### Completing Feature

9. After feature is complete and tested, make sure branch is up-to-date with main
10. Push final version to remote:
```bash
git push origin feat/feature-name
```

11. Create Pull Request on GitHub to merge to main branch
12. After PR is approved and merged, feature branch is kept for history tracking

By following Git Feature Branch Workflow, your team can work in parallel with minimal conflict risk and more organized code.

## Branch Protection Rules

Branch Protection Rules is a GitHub feature that allows you to protect important branches (especially main/master) from uncontrolled changes. With protection rules, you can ensure that every change to main branch must go through pull request and review first.

### Why Need Branch Protection?

In team work, main branch like `main` or `master` must always be in stable condition and deployable anytime. Without protection, team members can directly push code to main branch that might still be buggy or not reviewed, potentially breaking the project.

### Setting Branch Protection Rules

1. Go to repository in your GitHub Organization
2. Click "Settings" tab in repository
3. In left sidebar, select "Branches"
4. Click "Add classic branch protection rule"
![image](/img/guide-9.png)
5. In "Branch name pattern" field, enter name of main branch you want to protect (usually `main` or `master`)
6. Check the following options:
    - "Require a pull request before merging": Must create PR, can't directly push to main/master
    - "Require approvals": PR must be approved before it can be merged
    - "Do not allow bypassing the above settings": Ensures even admin/owner cannot bypass created rules
7. Click "Create" to save rules
![image](/img/guide-10.png)
![image](/img/guide-11.png)

## GitHub Issue Tracker
Issue tracker (or bug / issue tracking system) is a centralized tool used by teams to record, organize, track, and resolve work in the form of bugs, tasks, feature requests, or operational issues throughout project lifecycle.

The goals are:
1. Ensure every issue is well documented (title, description, reproduction steps, evidence)
2. Backlog management
3. Monitor progress and collaborate (comments, attachments, links to commits/PR)

Step-by-Step usage:
1. Open repo/project on issue tracker platform (e.g. Jira, GitHub Issues, GitLab Issues) and select New Issue.
2. Write short and clear title that directly describes the problem.
3. Write complete description: summary, reproduction steps, expected results, actual results. Attach supporting evidence (screenshots, logs, videos, sample files).
4. Mark issue type (bug/feature/task/documentation) and give consistent labels.
5. Assign issue to appropriate owner/responsible person. Add assignees, watchers or teams that need notifications.
7. Connect issue with branch/commit/PR when starting work.
8. Then click create

**Usage Example**

![image](/img/guide-12.png)
![image](/img/guide-13.png)

Reference: [Github Docs Issue Tracker](https://docs.github.com/en/issues/tracking-your-work-with-issues)

## CI/CD Integration for PWS Push on GitHub
Previously, if you wanted to push to GitHub and deploy to PWS, you needed to push twice, namely to GitHub (git push origin main) and to PWS (git push pws main). This is certainly inefficient and error-prone, especially in team work where each member has to do manual deployment.

### What is CI/CD?
Continuous Integration (CI) is a practice where developers routinely integrate their code into shared repository, and automated system will run tests to ensure code doesn't break the application.
Continuous Deployment (CD) is a practice where every change that has gone through CI will automatically be deployed to production server without manual intervention.

### Why Need CI/CD for Automatic Deployment?
In team work, every time there are changes in main branch, entire team has to do manual deployment to PWS. This creates several problems:

* Inconsistency: Not all team members do deployment, so PWS version can lag behind
* Effort duplication: Each team member has to push to PWS separately from their local
* Human error: Forgetting to deploy or deploying wrong branch
* Difficult coordination: Hard to determine who is responsible for deployment

With CI/CD, every time there are changes in main branch (through merge pull request), system will automatically deploy to PWS. This ensures PWS version is always up-to-date with main branch and reduces team workload.

### Setup GitHub Actions for PWS Deployment

1. In your local repository, create `.github/workflows/` folder if it doesn't exist
2. Create new file named `deploy.yml` inside that folder
3. Fill file with following configuration (adjust with your repository's main branch name):

```yaml
name: Push to PWS

on:
  push:
    branches: [ main ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
      with:
        fetch-depth: 0
        
    - name: Set up Git
      run: |
        git config --global user.name 'github-actions[bot]'
        git config --global user.email 'github-actions[bot]@users.noreply.github.com'
        
    - name: Push to PWS
      env:
        PWS_URL: ${{ secrets.PWS_URL }}
      run: |
          # Get current branch name
          current_branch=$(git branch --show-current)
          echo "Current branch: $current_branch"
          
          # Push current branch to PWS master branch
          push_output=$(git push $PWS_URL $current_branch:master 2>&1)
          if [[ $? -ne 0 ]]; then
            echo "Push failed with output: $push_output"
            echo "Error: Unable to push changes. Please check the error message above and resolve any conflicts manually."
            exit 1
          fi
          echo "Push successful with output: $push_output"
```

**Note**: Adjust branch name in `branches: [ main ]` with your repository's main branch name (can be `main` or `master`).

![image](/img/guide-14.png)

**IMPORTANT: Don't push this file to GitHub yet. Setup secrets first in next step.**

4. In your repository on GitHub, open **Settings** > **Secrets and variables** > **Actions**

![image](/img/guide-15.png)

5. Click **"New repository secret"** to add new "secret" variable in your repository
6. Fill **Name** with `PWS_URL`. Then, fill **Secret** with data using following format:

    `https://<sso username>:<PWS project password>@pbp.cs.ui.ac.id/<sso username>/<your project name>`

For example, if your SSO username is `hanni.pham`, your project password is `abcd1234`, and your project name is `supernatural`, then you need to fill **Secret** like this:

```
https://hanni.pham:abcd1234@pbp.cs.ui.ac.id/hanni.pham/supernatural
```

![image](/img/guide-16.png)

7. Push workflow file to GitHub:
```bash
git add .
git commit -m "Add CI/CD workflow for PWS deployment"
git push origin main
```

8. Every time there's push to main branch, GitHub Actions will automatically run deployment to PWS. Check **"Actions"** tab in repository to see deployment status

## Database for Group Project

For database purposes used in group projects, you can use `tugas_kelompok` schema from one of your group member's database that was previously provided by ITF team.

:::warning
Make sure you have used the schema determined above for this group project work.
:::

# Recommended Project Management Tools

:::warning
These project management tools are **NOT MANDATORY**, but only facilitate you in future project tasks. Additionally, you are also allowed to use other tools.
:::

## 1. Microsoft Planner
![MS Planner Image](https://www.timeneye.com/hs-fs/hubfs/microsoft%20planner%20ui%202025.png?width=1431&height=670&name=microsoft%20planner%20ui%202025.png)
### Introduction
Microsoft Planner is a task management application integrated with Microsoft 365. Suitable for organizing to-do lists, dividing tasks, and monitoring progress through board (Kanban), calendar, and chart views.

### Purpose
Help teams plan and manage simple projects with full integration in Microsoft Teams, Outlook, and To Do.

### YouTube Tutorial
- [How to use the NEW Microsoft Planner in Teams](https://www.youtube.com/watch?v=r3dpzqttDuA)

### Advantages
- Closely integrated with Microsoft 365 ecosystem.  
- Simple display (board, calendar, chart).  
- Suitable for small-medium scale team collaboration.  

### Disadvantages
- Complete features (like roadmap & AI Copilot) are paid.  
- Less flexible for complex Agile/Scrum methods.  

---

## 2. Linear.app
![Linear App Dashboard Image](https://www.figma.com/community/resource/956bf56e-ed4c-4fdd-af69-a13a9ccded49/thumbnail)
### Introduction
Linear is a modern tool for software development teams. Focuses on speed, minimalist design, and agile workflow like sprint, issue tracking, and roadmap.

### Purpose
Help developer teams manage technical tasks, sprints, and bug tracking quickly and focused.

### YouTube Tutorial
[How to Use Linear App](https://www.youtube.com/watch?v=UoGl5suIfgM)

### Advantages
- Fast, responsive, and minimalist UI.  
- GitHub, Slack integration and automation.  
- Suitable for modern developer workflow.  

### Disadvantages
- Limited reporting and dashboard features.  
- Less suitable for non-technical teams.  

---

## 3. Notion
![Notion Image](https://res.cloudinary.com/zapier-media/image/upload/f_auto/q_auto/v1707419888/Blog/what-is-notion/what-is-notion-image11_mxqioe.png)
### Introduction
Notion is an all-in-one workspace that combines notes, databases, wikis, and project management in one application.

### Purpose
Help teams document ideas, create to-do lists, to managing project boards flexibly in one platform.

### YouTube Tutorial
- [Notion for Project Management](https://youtube.com/playlist?list=PLzaYMdbJMZW3DeRQ_uxdl4DFHFumE_D9Q&si=jXMRs2B1gqYjBst8)

### Advantages
- Very flexible (notes, tables, kanban, database).  
- Can be used for personal or team.  
- Many free ready-to-use templates.  

### Disadvantages
- Can feel complicated for beginners.  
- Not as fast as Linear for technical issue-tracking.  

---

## 4. ClickUp
![ClickUp Image](https://blog.rimbahouse.com/wp-content/uploads/2024/04/demo-clickup.png)
### Introduction
ClickUp is a versatile work management platform, can be used for task management, goal setting, docs, chat, and timeline.

### Purpose
Help teams manage projects from simple to complex, with many built-in features without needing many additional integrations.

### YouTube Tutorial
- [ClickUp Project Management Tutorial for Beginners](https://www.youtube.com/watch?v=JmcVjP8m02k&pp=ygURY2xpY2sgdXAgdHV0b3JpYWzSBwkJrQkBhyohjO8%3D)

### Advantages
- Very complete features (task, docs, chat, goal, whiteboard).  
- Suitable for cross-division teams (not just developers).  
- Display can be customized according to team needs.  

### Disadvantages
- Can feel "overwhelming" due to too many features.  
- Performance can slow down if workspace is too large.  

---

## Conclusion
- **Microsoft Planner** → suitable for those already using Microsoft 365.  
- **Linear.app** → ideal for developer teams needing speed & agile workflow.  
- **Notion** → flexible for documentation + light project management.  
- **ClickUp** → complete for cross-division teams with complex needs.  

## Contributors

- Marla Marlena
- Isa Citra Buana
- Regina Meilani Aruan