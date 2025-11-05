---
sidebar_label: Tutorial 7
sidebar_position: 9
Path: docs/tutorial-7
---

# Tutorial 7: Flutter Navigation, Layouts, Forms, and Input Elements

Platform-Based Programming (CSGE602022) — Organized by the Faculty of Computer Science Universitas Indonesia, Odd Semester 2025/202626

---

## Learning Objectives

After completing this tutorial, students are expected to be able to:

* Understand basic navigation and routing in Flutter.
* Understand input elements and forms in Flutter.
* Understand the flow of form creation and data handling in Flutter.
* Understand and apply a simple clean architecture.

## Page Navigation in Flutter

When learning web development, you may already know that in a website we can move between pages according to the URL being accessed. The same applies to app development, where we can also navigate from one “page” to another. The difference is that in an application, we don’t navigate using different URLs.

Flutter provides a complete navigation system to move between pages. One of the ways to perform page navigation is by using the `Navigator` widget. The `Navigator` widget displays pages on the screen as if they are stacked on top of one another (a stack). To navigate to a new page, we can access the `Navigator` through the `BuildContext` and call functions such as `push()`, `pop()`, and `pushReplacement()`.

> Note: In Flutter, screens and pages are commonly referred to as *routes*.

Below is an explanation of several commonly used `Navigator` functions in Flutter application development.

### Push (`push()`)

```dart
...
    if (item.name == "Add Product") {
        Navigator.push(context,
            MaterialPageRoute(builder: (context) => const NewsFormPage()));
    }
...
```

The `push()` method adds a *route* to the route *stack* managed by `Navigator`. This method places the new route at the top of the stack, so the newly added route will appear and be displayed to the user.

### Pop (`pop()`)

```dart
...
    onPressed: () {
        Navigator.pop(context);
    },
...
```

The `pop()` method removes the route currently displayed to the user (the topmost route in the stack) from the route stack managed by the `Navigator`. This causes the app to move from the current displayed route back to the route underneath it in the stack.

### Push Replacement (`pushReplacement()`)

```dart
...
    onTap: () {
        Navigator.pushReplacement(
        context,
        MaterialPageRoute(
            builder: (context) => MyHomePage(),
        ));
    },
...
```

The `pushReplacement()` method removes the route currently shown to the user and replaces it with a new route. This causes the app to switch from the current route to the provided one. In the stack of routes managed by `Navigator`, the old route at the top is directly replaced by the new one without altering the routes below it in the stack.

Although `push()` and `pushReplacement()` may seem similar, the difference lies in what they do to the top route in the stack. `push()` will add the new route on top of the existing one, while `pushReplacement()` replaces the top route with the new one. It is also important to pay attention to the order and contents of the stack — if the stack is empty and the **Back** button is pressed, the system will exit the application.

Besides the three `Navigator` methods above, there are also other useful routing methods such as `popUntil()`, `canPop()`, and `maybePop()`. Feel free to explore these methods on your own. To learn more about the `Navigator`, you can refer to the official documentation: [https://api.flutter.dev/flutter/widgets/Navigator-class.html](https://api.flutter.dev/flutter/widgets/Navigator-class.html)

:::danger
**NOTES**:
Before starting this tutorial, please note that any //TODO sections in the following code snippets are parts that you will need to fill in yourself later.

**Don't forget to complete all remaining TODOs before submitting the tutorial (the submitted tutorial must not contain any TODOs)!**

:::

## Input and Forms in Flutter

Just like on the web, an application can interact with users through input and forms. Flutter provides a `Form` widget that can serve as a container for multiple input field widgets. Similar to input fields on the web, Flutter also has various types of input fields, one of which is the `TextField` widget.

To try a sample of the `Form` widget, run the following command:

```bash
flutter create --sample=widgets.Form.1 form_sample
```

To learn more about the `Form` widget, you can refer to the following documentation: [Flutter Form Class](https://api.flutter.dev/flutter/widgets/Form-class.html).

## Tutorial: Adding a Drawer Menu for Navigation

To make navigation easier in our Flutter application, we can add a *drawer menu*. A drawer menu is a panel that slides from the left or right side of the screen, typically containing navigation links to different pages in the app.

1. Open the project you created in Tutorial 6 using your preferred IDE.

2. Create a new file inside a new `widgets` directory named `left_drawer.dart`. Add the following code into `left_drawer.dart`.

   ```dart
   import 'package:flutter/material.dart';

   class LeftDrawer extends StatelessWidget {
     const LeftDrawer({super.key});

     @override
     Widget build(BuildContext context) {
       return Drawer(
         child: ListView(
           children: [
             const DrawerHeader(
               // TODO: Drawer header section
             ),
             // TODO: Routing section
           ],
         ),
       );
     }
   }
   ```

3. Next, add imports for the pages you want to include in the drawer menu. In this example, we will add navigation to `MyHomePage` and `NewsFormPage`.

   ```dart
   import 'package:flutter/material.dart';
   import 'package:football_news/menu.dart';
   // TODO: Import the NewsFormPage if already created
   ```

4. After importing, insert the routing code into the `TODO: Routing section`.

   ```dart
   ...
   ListTile(
     leading: const Icon(Icons.home_outlined),
     title: const Text('Home'),
     // Redirect to MyHomePage
     onTap: () {
       Navigator.pushReplacement(
           context,
           MaterialPageRoute(
             builder: (context) => MyHomePage(),
           ));
     },
   ),
   ListTile(
     leading: const Icon(Icons.post_add),
     title: const Text('Add News'),
     // Redirect to NewsFormPage
     onTap: () {
       /*
       TODO: Add routing to NewsFormPage here
       once the page is created.
       */
     },
   )
   ...
   ```

5. Then, style the drawer by adding a drawer header inside `TODO: Drawer header section`.

   ```dart
   ...
   const DrawerHeader(
     decoration: BoxDecoration(
       color: Colors.blue,
     ),
     child: Column(
       children: [
         Text(
           'Football News',
           textAlign: TextAlign.center,
           style: TextStyle(
             fontSize: 30,
             fontWeight: FontWeight.bold,
             color: Colors.white,
           ),
         ),
         Padding(padding: EdgeInsets.all(10)),
         Text(
           "All the latest football updates here!",
           // TODO: Add text style with center alignment, font size 15, white color, and normal weight
         ),
       ],
     ),
   ),
   ...
   ```

6. Great! Now add the drawer to the page where you want it to appear. Below is an example for `menu.dart`.

   ```dart
   ...
   // Import drawer widget
   import 'package:football_news/widgets/left_drawer.dart';
   ...
   return Scaffold(
     appBar: AppBar(
       // Application title "Football News" in bold white text
       title: const Text(
         'Football News',
         style: TextStyle(
           color: Colors.white,
           fontWeight: FontWeight.bold,
         ),
       ),
       backgroundColor: Theme.of(context).colorScheme.primary,
     ),
     drawer: LeftDrawer(),
   ...
   ```

7. Congratulations! Your drawer and navigation are now ready. Run the app to see the result.

:::danger
Don’t forget to complete all remaining `TODO`s **before submitting the tutorial** (the submitted tutorial must **not contain any TODOs**). Also, make sure to add the drawer to the `NewsFormPage` once that page has been created.
:::

## Tutorial: Adding a Form and Input Elements

Now, we will create a simple form to input news data into the application so that later you can add new items to be displayed.

1. Create a new file in the `lib` directory named `newslist_form.dart`. Add the following code inside `newslist_form.dart`.

   ```dart
   import 'package:flutter/material.dart';
   // TODO: Import the drawer you created earlier

   class NewsFormPage extends StatefulWidget {
       const NewsFormPage({super.key});

       @override
       State<NewsFormPage> createState() => _NewsFormPageState();
   }

   class _NewsFormPageState extends State<NewsFormPage> {
       @override
       Widget build(BuildContext context) {
           return Placeholder();
       }
   }
   ```

2. Replace the `Placeholder` widget with the code below.

   ```dart
   Scaffold(
     appBar: AppBar(
       title: const Center(
         child: Text(
           'Add News Form',
         ),
       ),
       backgroundColor: Colors.indigo,
       foregroundColor: Colors.white,
     ),
     // TODO: Add the drawer here
     body: Form(
       child: SingleChildScrollView(),
     ),
   );
   ```

   Explanation:

   1. The `Form` widget acts as a container for the input field widgets that we will create later.
   2. The `SingleChildScrollView` widget ensures that its child widgets become scrollable.

3. Create a new variable named `_formKey` and add it to the `key` attribute of the `Form` widget. This `key` will handle the form state, form validation, and form value storage.

   ```dart
   ...
   class _NewsFormPageState extends State<NewsFormPage> {
       final _formKey = GlobalKey<FormState>();
   ...
   ```

   ```dart
   ...
   body: Form(
        key: _formKey,
        child: SingleChildScrollView(),
   ),
   ...
   ```

4. Next, we will begin adding fields to the `Form` widget. Create several variables to store the input values for each field.

   ```dart
     ...
     class _NewsFormPageState extends State<NewsFormPage> {
     
     final _formKey = GlobalKey<FormState>();
     String _title = "";
     String _content = "";
     String _category = "update"; // default
     String _thumbnail = "";
     bool _isFeatured = false; // default

     final List<String> _categories = [
       'transfer',
       'update',
       'exclusive',
       'match',
       'rumor',
       'analysis',
     ];
     ...
   ```

5. Create a `Column` widget as the child of `SingleChildScrollView`.

   ```dart
   ...
   body: Form(
         key: _formKey,
         child: SingleChildScrollView(
           child: Column()
         ),
   ...
   ```

6. Add a `TextFormField` wrapped in a `Padding` widget as one of the children of the `Column`. Then, set the `crossAxisAlignment` attribute to control the alignment of the `Column` children.

   ```dart
   ...
   child: Column(
     crossAxisAlignment: CrossAxisAlignment.start,
     children:[
       // === Title ===
       Padding(
         padding: const EdgeInsets.all(8.0),
         child: TextFormField(
           decoration: InputDecoration(
             hintText: "News Title",
             labelText: "News Title",
             border: OutlineInputBorder(
               borderRadius: BorderRadius.circular(5.0),
             ),
           ),
           onChanged: (String? value) {
             setState(() {
               _title = value!;
             });
           },
           validator: (String? value) {
             if (value == null || value.isEmpty) {
               return "Title cannot be empty!";
             }
             return null;
           },
         ),
       ),
   ...
   ```
   Code Explanation:

    1. `onChanged` will be executed every time the content of the `TextFormField` changes.
    2. `validator` will validate the content of the `TextFormField` and return a `String` if there is an error.
    3. There is null-safety implementation in `String?` and `value!`.
    The `?` operator indicates that the variable can contain either a `String` or `null`, while the `!` operator indicates that the variable is guaranteed not to be `null`.

    To learn more about null-safety, you can read the documentation at the following link: [Dart Null Safety](https://dart.dev/null-safety/understanding-null-safety)


7. Create two `TextFormField` widgets wrapped in `Padding` as the next children of the `Column`, similar to before, for the `content` and `thumbnail` fields.

```dart
...
  // === Content ===
  Padding(
    padding: const EdgeInsets.all(8.0),
    child: TextFormField(
      maxLines: 5,
      decoration: InputDecoration(
        hintText: "News Content",
        labelText: "News Content",
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
      ),
      onChanged: (String? value) {
        setState(() {
          _content = value!;
        });
      },
      validator: (String? value) {
        if (value == null || value.isEmpty) {
          return "Content cannot be empty!";
        }
        return null;
      },
    ),
  ),

  // === Category ===
  Padding(
    padding: const EdgeInsets.all(8.0),
    child: DropdownButtonFormField<String>(
      decoration: InputDecoration(
        labelText: "Category",
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
      ),
      value: _category,
      items: _categories
          .map((cat) => DropdownMenuItem(
                value: cat,
                child: Text(cat[0].toUpperCase() + cat.substring(1)),
              ))
          .toList(),
      onChanged: (String? newValue) {
        setState(() {
          _category = newValue!;
        });
      },
    ),
  ),

  // === Thumbnail URL ===
  Padding(
    padding: const EdgeInsets.all(8.0),
    child: TextFormField(
      decoration: InputDecoration(
        hintText: "Thumbnail URL (optional)",
        labelText: "Thumbnail URL",
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(5.0),
        ),
      ),
      onChanged: (String? value) {
        setState(() {
          _thumbnail = value!;
        });
      },
    ),
  ),

  // === Is Featured ===
  Padding(
    padding: const EdgeInsets.all(8.0),
    child: SwitchListTile(
      title: const Text("Mark as Featured News"),
      value: _isFeatured,
      onChanged: (bool value) {
        setState(() {
          _isFeatured = value;
        });
      },
    ),
  ),
...
```

8. Create a button as the next child of the `Column`. Wrap the button in `Padding` and `Align`. This time, we will not store the data in a database, but instead display it in a pop-up once the button is pressed.

```dart
...
    // === Save Button ===
    Align(
      alignment: Alignment.bottomCenter,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: ElevatedButton(
          style: ButtonStyle(
            backgroundColor:
                MaterialStateProperty.all(Colors.indigo),
          ),
          onPressed: () {
            if (_formKey.currentState!.validate()) {
              showDialog(
                context: context,
                builder: (context) {
                  return AlertDialog(
                    title: const Text('News saved successfully!'),
                    actions: [
                      TextButton(
                        child: const Text('OK'),
                        onPressed: () {
                          Navigator.pop(context);
                          _formKey.currentState!.reset();
                        },
                      ),
                    ],
                  );
                },
              );
            }
          },
          child: const Text(
            "Save",
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    ),
  ],
...
```

:::danger
Don’t forget to complete all remaining `TODO`s **before submitting the tutorial** (the submitted tutorial must **not contain any TODOs**). Also, make sure to add the drawer to the `NewsFormPage` once that page has been created.
:::

## Tutorial: Displaying Data

1. Add the `showDialog()` function inside the `onPressed()` section and display an `AlertDialog` widget within it. Then, also add a function to reset the form.

    ```dart
    ...
    child: ElevatedButton(
              style: ButtonStyle(
                backgroundColor:
                    MaterialStateProperty.all(Colors.indigo),
              ),
              onPressed: () {
                if (_formKey.currentState!.validate()) {
                  showDialog(
                    context: context,
                    builder: (context) {
                      return AlertDialog(
                        title: const Text('News saved successfully!'),
                        content: SingleChildScrollView(
                          child: Column(
                            crossAxisAlignment:
                                CrossAxisAlignment.start,
                            children: [
                              Text('Judul: $_title'),
                              Text('Content: $_content'),
                              Text('Category: $_category'),
                              Text('Thumbnail: $_thumbnail'),
                              Text(
                                  'Featured: ${_isFeatured ? "Yes" : "No"}'),
                            ],
                          ),
                        ),
                        actions: [
                          TextButton(
                            child: const Text('OK'),
                            onPressed: () {
                              Navigator.pop(context);
                              _formKey.currentState!.reset();
                            },
                          ),
                        ],
                      );
                    },
                  );
                }
              },
              child: const Text(
                "Save",
                style: TextStyle(color: Colors.white),
              ),
            ),
    ...
    ```

2. Try running your program, use the form you have created, and observe the result.

:::info
After following the instructions above, your app should look like this:

![main_view](/img/t7-1.png)
:::

:::danger
Don’t forget to complete all remaining `TODO`s **before submitting the tutorial** (the submitted tutorial must **not contain any TODOs**). Also, make sure to add the drawer to the `NewsFormPage` once that page has been created.
:::

## Tutorial: Adding Navigation Features to Buttons

Up to this point, we have successfully created a drawer that can navigate to other pages in the application, as well as a form page. In the previous tutorial, we also created three button widgets that can perform certain actions when pressed. Now, we will add navigation functionality to those buttons so that when pressed, the user will be shown a different page.

1. In the `ItemCard` widget inside `menu.dart` that was created in the previous tutorial, we will modify the code inside the `onTap` attribute of `InkWell` so it can navigate to another route (add the code below the `ScaffoldMessenger` code that displays the snackbar).

   ```dart
   ...
     // Responsive area for touch
     onTap: () {
       // Show SnackBar when clicked
       ScaffoldMessenger.of(context)
         ..hideCurrentSnackBar()
         ..showSnackBar(SnackBar(
             content: Text("You pressed the ${item.name} button!")));

       // Navigate to the appropriate route (depending on the button type)
       if (item.name == "Add News") {
         // TODO: Use Navigator.push to navigate to a MaterialPageRoute that contains NewsFormPage.
       }

     },
   ...
   ```

   Note that for this button, we use `Navigator.push()` so the user can press the **Back** button to return to the menu page. Additionally, if we use `Navigator.pop()`, the code can return to the menu page programmatically.

2. Try running your program, use the button that has been made functional, and observe what happens. Compare this behavior to navigation via the drawer (after finishing all TODOs in the drawer).


:::danger
Don’t forget to complete all remaining `TODO`s **before submitting the tutorial** (the submitted tutorial must **not contain any TODOs**). Also, make sure to add the drawer to the `NewsFormPage` once that page has been created.
:::

:::info
After following the instructions above, your webpage should look like this:

![snackbar_view](/img/t7-2.png)
:::

## Tutorial: *File Refactoring*

After creating the `newslist_form.dart` page, our project now has more pages. Therefore, let's move the pages we have created into a `screens` folder to make our structure cleaner moving forward.

1. Before starting, make sure you already have the **Flutter extension installed** in your IDE or text editor.

2. Create a new file named `news_card.dart` inside the `widgets` directory.

3. Move the contents of the `ItemCard` widget from `menu.dart` into the `widgets/news_card.dart` file.

4. Make sure to import `newslist_form.dart` in the `news_card.dart` file and import `news_card.dart` in the `menu.dart` file.

5. Create a new folder named `screens` inside the `lib` directory.

6. Move the `menu.dart` and `newslist_form.dart` files into the `screens` folder.

:::danger
Make sure to move the files **using an IDE or text editor that has the Flutter extension or plugin**, and not through a regular file manager (such as File Explorer or Finder). This ensures that your IDE or text editor can perform automatic refactoring.
![Contoh Refactoring](/img/t7-3.png)
:::

:::info
After the file refactoring is completed, the structure of the `lib` directory should be as follows.

![Struktur file di akhir](/img/t7-4.png)
:::

## Final Words

Congratulations! You have completed Tutorial 7! Hopefully, this tutorial helped you understand *navigation*, *forms*, *input*, and *layouts* well. 😄

1. Review and fully understand the code you wrote above. **Don’t forget to complete all the TODOs!**

2. Run `add`, `commit`, and `push` to update your GitHub repository.

   ```shell
   git add .
   git commit -m "<commit_message>"
   git push -u origin <main_branch>
   ```

   * Replace `<commit_message>` as you like. Example: `git commit -m "finished tutorial 7"`.
   * Replace `<main_branch>` with the name of your main branch. Example: `git push -u origin main` or `git push -u origin master`.


## Additional References

- [Flutter Navigation Basics Cookbook](https://docs.flutter.dev/cookbook/navigation/navigation-basics)
- [Add Drawer to a Screen in Flutter](https://docs.flutter.dev/cookbook/design/drawer)
- [Flutter Icons](https://fonts.google.com/icons)

## Contributors

- Valentino Kim Fernando (SOY)
- Clarence Grady (GRD)
- Malvin Scafi (UMA)
- Danniel (DAN)
- Grace Karina (GAE)

## Credits

This tutorial was developed based on [PBP Odd Semester 2025](https://github.com/pbp-fasilkom-ui/ganjil-2025) and [PBP Odd Semester 2024](https://github.com/pbp-fasilkom-ui/ganjil-2024), written by the Teaching Team and Teaching Assistants of the **Platform-Based Programming** course in 2025 and 2024. All tutorials and instructions in this repository are specifically designed to help students enrolled in the **Platform-Based Programming** course complete the tutorials during their lab sessions.