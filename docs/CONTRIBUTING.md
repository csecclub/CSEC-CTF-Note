# Contributing

To contribute, simply fork this repository and create a new branch for your changes.

- Betim's note: I recommend that you make small changes at a time and make sure you  have tested them before pushing them up.
This will make sure the site is up and running, without any huge problems!

When contributing to this repository, Please double check that your build doesn't crash by running the command
```
npm run docs:build
npm run docs:preview
```
- this way it ensures that you don't cause crashes :}


## Development environment setup

### How to run on local machine <Badge type="info" text="You can run this on github codespaces to make it easier!" />
1. Clone the repo using `git clone https://github.com/Betim-Hodza/CSEC-CTF-REP` in your terminal or command prompt.
2. Install NodeJS from [here](https://nodejs.org/) if you haven't already installed it.
3. Install NPM &  VitePress by using these commands in terminal or cmd :
bash
```
sudo apt update && upgrade
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
5. Now you can start editing the site
  * You can add folders to the /CTF Notes/ folder
  * Create Markdown files to write your notes
  * You can link your files inside of index.md in the root (follow the format there)
  * You can also link it to the navbar by going to /.vitepress/config.mjs and update the nav bar

### Please follow these guidelines when adding content:

1. Make sure all the markdown is formatted  correctly (use VS Code or similar).
2. When working on the website run npm run docs:dev
   * when you are done with your changes check that it builds w/ npm run docs:build and also preview it too w/ npm run docs:preview
3. Add an index file in the relevant section of the repo if you want it to be searchable by the search bar at the top right
4. Use `#` for headers (`####`, `###`, etc.) instead of underlines. 
5. Make sure you open a pull request once all your changes are done, good git commits are greatly appreciated!

## Issues and feature requests

You've found a bug in the source code, a mistake in the documentation or maybe you'd like a new feature? You can help us by [submitting an issue on GitHub](https://github.com/Betim-Hodza/note/issues). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

**Even better: Submit a pull request with a fix or new feature!**

### How to submit a Pull Request

1. Fork the project
2. Create your feature branch (`git checkout -b feat/amazing_feature`)
3. Commit your changes (`git commit -m 'feat: add amazing_feature'`) CSECNote uses [conventional commits](https://www.conventionalcommits.org), so please follow the specification in your commit messages.
4. Push to the branch (`git push origin feat/amazing_feature`)
5. [Open a Pull Request](https://github.com/Betim-Hodza/note/compare?expand=1)
