
## How to Contribute 
To contribute, simply fork this repository and create a new branch for your changes. 

- Betim's note: I recommend that you make small changes at a time and make sure you  have tested them before pushing them up. 
This will make sure the site is up and running, without any huge problems!


### How to run on local machine <Badge type="info" text="You can run this on github codespaces to make it easier!" />
1. Clone the repo using `git clone https://github.com/Betim-Hodza/CSEC-CTF-REP` in your terminal or command prompt.
2. Install NodeJS from [here](https://nodejs.org/) if you haven't already installed it.
3. Install NPM &  VitePress by using these commands in terminal or cmd :
bash
```
sudo apt update / upgrade (if needed)
sudo apt install nodejs
sudo apt install npm
npm install -g vitepress
```
4. Once all dependencies installed you can run the dev site by
```
npm run docs:dev
```
and you can build / preview public site by running 
```
npm run docs:build
npm run docs:preview
```
1. Now you can start editing the site
  * You can add folders to the /CTF Notes/ folder
  * Create Markdown files to write your notes
  * You can link your files inside of index.md in the root (follow the format there)
  * You can also link it to the navbar by going to /.vitepress/config.mjs and update the nav bar <Badge type="tip" text="follow the formatting and test often!" />

### Please follow these guidelines when adding content:

1. Make sure all the markdown is formatted  correctly (use VS Code or similar). 
2. When working on the website run npm run docs:dev
   * when you are done with your changes check that it builds w/ npm run docs:build and also preview it too w/ npm run docs:preview
3. Add an index file in the relevant section of the repo if you want it to be searchable by the search bar at the top right
4. Use `#` for headers (`####`, `###`, etc.) instead of underlines. <Badge type="tip" text="Also if you want clickable tabs make sure to use `##` in your MD file" />
5. Make sure you open a pull request once all your changes are done, good git commits are greatly appreciated!
