---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CSEC Notes"
  tagline: Documentation over all the ethical hacker tools!
  image:
    src: https://utacsec.org/static/media/michi.576d038960feac1cb458.png
  actions:
    - theme: brand
      text: Kali-Linux
      link: CTF Notes/Kali-Linux/what-is-kali.md
    - theme: alt
      text: OSINT
      link: CTF Notes/OSINT/what-is-osint.md
    - theme: alt
      text: Cryptography
      link: CTF Notes/Cyptography/what-is-crypto.md
    - theme: alt
      text: Password Cracking
      link: CTF Notes/Password-Cracking/what-is-password-cracking.md
    - theme: alt
      text: Forensics
      link: CTF Notes/Forensics/what-is-forensics.md
    - theme: alt
      text: Log Analysis
      link: CTF Notes/Log-Analysis/what-is-log-analysis.md
    - theme: alt
      text: Network Traffic Analysis
      link: CTF Notes/Network-Traffic-Analysis/what-is-NTA.md
    - theme: alt
      text: Binary Exploitation
      link: CTF Notes/BinaryExploitation/what-is-BE.md
    - theme: alt
      text: View on Github
      link: https://github.com/Betim-Hodza/CSEC-CTF-REP

features:
  - icon: 🛠️
    title:  Tools & Techniques
    details: Documentation of tools and techniques used in CTFs, such as web scraping, API interaction, cryptanalysis etc.
  - icon: 🐱
    title: Open-souce
    details:  All of our work is open source and free to use for everyone. You can contribute if you want or simply read the notes
  - icon: 🌍
    title: Beginner Friendly
    details: This site contains beginner tutorials on how to learn/do CTFs and use the tools needed to solve problems!
---

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
