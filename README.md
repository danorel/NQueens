# NQueens
Project meant for Prolog subject as coursework

Hi! Welcome to my repo. 
Let me show you a short instruction how to launch the application.

The whole application is written in such stack:
- Backend: **Python** + **Prolog** insertions.
- Front-end: **React**.

### Development configurations:
1. You need to install all dependencies in three core modules:
  - **/client**: ```npm install --save```
  - **/server**: ```pip3 install -r requirements.txt```
  - **/(root)**: ```npm install --save```
  
2. Then return back to the root of the application and launch this command: ```npm run development:local```. 
In such way you will launch simultaneously both of back-end and front-end code. 

### Production configurations:
1. In the root of the application run the command: ```npm run prod:local```.
This will completele install all required dependencies in all service and start the app in production mode.

### What is the code structure?
1. **/server/src/pl/\*.pl** - all
