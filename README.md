# karang
Developed by: Alex Chan and Darryl Laiu

Project: 
On-demand Karang Guni app
We intend to build a platform that connects consumers and a potential recycling business that provides a “modern” karang kuni service. Users will be able to simply submit a request on their phone and indicate the kind of things they need to be collected. A “karang guni man” will then come to your house to collect it.

Scope of Project:
Mobile App: Using the React Native framework and library. Focusing only on Android for now. 

After feedback from our mentor, the other teams, and various people we’ve met throughout the course of mission control, we decided to create a mobile app instead. The main reason for this is to improve the user experience, making it even more convenient for users to file a request for collection of second hand goods.

Hence, we decided to create a mobile app instead of a web app. We decided to use the React Native framework as it provided the most flexibility in terms of target users’ platforms, as well the framework with comparatively the most transferable skills from web development. 

Also based off feedback, we decided to focus only on the core features of our app. Hence we removed our proposed idea of including a “thrift store” in order to prevent clutter to the user experience. 

Core features developed:
As we had to pick up a new framework at the last minute, we did not have time to build all core features we intended to build. However, we feel we have created the core skeleton of what our app needs, and what it will be.

Log in page and authentication: We wired Firebase to React Native to provide simple email authentication and log in.

Sign up page: Similarly using Firebase, we created a sign up page for new users to create accounts with their emails.

Existing orders page: Upon log in, if the user has pending orders, they will be able to view all of it on this page. 
- Users can also tap on the existing order to view and change details.

Add Orders: On this page, users can create new orders by filling out the form. Details include address, date of collection, item types to be collected, and collection timeslot.

Basic database management and security: We used Firebase as our data store, to store user’s accounts, and collection of pending orders.

Extensions Developed:
Mark order as completed:
We decided to put order completion verification on the client end. This way, it requires the user to “check” that a karang guni has completed the order. When the order is completed, the user simply has to press the completed button to mark it as done and delete the order from their list.

Admin privileges:
We have assumed that there will be a central admin who will assign the available jobs to karang gunis on standby. This means that we would require a dashboard where the admin can view the details of all orders by all users.

Bugs squashed:
State management: The states for the log-ing and sign-up page, as well as the order form and order create page is now individualised such that previously entered data will not reappear when component is restarted.

Problems encountered:
Database management and permissions: it took a while to understand how to customise privileges according to the account and extract only the relevant data according to the requirements on firebase. Also because we were using react-native and firebase, the documentation and online forums were not specifically for these platforms, making it a bit difficult to resolve errors we would run into while coding. This was resolved through persistent googling and constant try-and-error.

Proposed features not implemented
Photo upload and camera integration: Could not successfully implement module in app, and pulling information from database.

User Testing:
User 1: “The app is simple to use and intuitive. I like that it requires very few steps from sign-up to placing an order. The aesthetics of the app could still be improved though as it’s currently using a very minimalist design at the moment.”

User 2: “Simple and easy to use. Some of the application still feels a bit clunky. The presentation of the data could be better”

List of technologies learned:
- React
- React-native
- Redux
- Javascript ES6
- Firebase
- Node.js


