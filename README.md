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

#### Back-end structure
1. **/server/src/pl/\*.pl** - Prolog files with back-end logic. NQueens combinations and moves are generated here.
2. **/server/src/api/\*.py** - Application routes with back-end endpoints.
3. **/server/src/entities/\*.py** - Flask/Prolog library connnectivity.
4. **/server/src/modules/\*.py** - Modules for applications.
5. **/server/src/modules/queens/api.py** - Main components with all API routes for client-server connectivity.

#### Front-end structure
1. **/client/public/\*.(png|jpg|mp4)** - Public images, videos and other stuff, used in the application.
2. **/client/src/modules/\*.(ts|tsx)** - Game components with view based on Domain-Driven Design.
3. **/client/src/routes/\*.tsx** - Routes meant for web-game navigation.

### How to connect the application with Prolog?
For such purpose I used the [PySwip](https://pypi.org/project/pyswip/#description) Python library, which helped me to connect the Python back-end with Prolog logic.

Main components:
- **prolog = pyswip.Prolog()** - Basic class for Prolog-based operations.
- **prolog.consult(\*.some_path_to_prolog_file)** - Helped to read the prolog files with logic and to get the results.
- **prolog.query("n_queen(4,Y)")** - Query to prolog to get the results of the predicate. Y will contain the results.

In such way I settled powerful Python-Prolog connectivity.
