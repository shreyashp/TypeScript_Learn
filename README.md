# TypeScript Learn
 My TypeScript Learning HandsOn programs

## For setup and DIY :

 1. Install VS Code (Preffered) : https://code.visualstudio.com/
 2. Clone the repo (either download zip or by url or fork)
 3. Install Node (for executing transpiled JS code) : https://nodejs.org/en/ (check node -v, npm -v)
 4. Install TypeScript (npm install -g typescript)
 5. Good to go !

## To Run a code on console:

 1. Navigate to folder of desired TS (typescript) file
 2. Press 'ctrl + ` ' to open VS code integrated terminal
 3. Transpile TS file to JS : on terminal 
   ### tsc <file_name>.ts or tsc <file_name> (ts extention is optional)
 4. After this a <file_name>.js file will be created.
    Note: for executing .ts file in watch mode, refer "WATCH MODE EXECUTION SECTION"
 5. Run .js file using node: on terminal node 
   ### <file_name>.js or node <file_name>
 6. Check output on the console

## WATCH MODE EXECUTION

To avoid hassle of saving , transpiling and then running the js file, 
the ts file can be executed in watch mode, so that after saving the changes in it, they get directly transpiled and saved in the .js file. You then only have to run the .js file using node

To do this, While executing the .ts file :

### tsc <file_name>.ts --watch 
file will get executed in watch mode (live console, cannot be used for other commands).
Then Open another terminal in respective .js file directory and execute

#### node <file_name>.js or node <file_name>


That's It for now, will keep adding more things when learned.

