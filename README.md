# Remote Insurance Corpn

## Requirement

1. PMS contains information about departments and employees. Every employee works in some department. Few  departments can be grouped in a bigger department.  
2. For every department following information is stored in PMS:  
a. Name  
b. List of employees  
3. For every employee following information is stored in PMS:  
a. First name  
b. Last name  
c. Date of birth  
d. Speciality  

### The SPA must contain:  
1. Mock for REST API with test data  
2. Tree with dynamic data loading for showing departments and employees  
3. Details views for department and employee which are placed near the tree and showing detail information for  the selected item in the tree.  
4. Drag and drop functionality for changing department in which employee works.  
The SPA must be written with last version of Angular.  

### Install Node & NPM

This project requires latest node and npm 
node -v ==> 12.13.0
npm -v  ==> 6.12.0
ng --version   ==> 11.2.3

### Install Packages

Now you can install this project's packages by running `npm install`.

### Run the Development Server

Run `ng serve` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Structure

Project
  ├── src/app                  - Angular app
  │    ├── Components          - This folder contains all the main components of the Hacker News
  │    ├── Services            - Folder contains all the service files for this project
  │    ├── models              - contains abstract classes used to create data
  │    ├── interfaces          - Folder contains all the interfaces/models
  |    |
  │    ├── licenses            - MIT license


## Points taken care while doing this project
1. Not used any 3rd party libraries. This project is built on Angular.
2. DRY (DONT REPEAT YOURSELF)
3. Localization is taken care.
4. Written test cases. `npm run test` to test
5. Lint errors are taken care use `ng lint` to test.
6. This Project is Mobile responsive as well but for better usage use it on desktop.
7. Type casting and Type assertion at its best. Avoided using type `any`
8. Dynamically creates department table.

## I welcome Queries, questions and any suggestions :)
Please do Contact gurusamrudh@gmail.com

