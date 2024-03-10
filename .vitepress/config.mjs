import { defineConfig } from 'vitepress'

/*Site is being hosted on cloudflare
https://dash.cloudflare.com/f782fed6dbb9630d9a2b2eb8a5f26847/pages/view/csec-ctf-rep 
*/

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "CSEC CTF Notes",
  description: "repo for all your ctf needs",
  
  themeConfig: {
    logo: 'https://utacsec.org/static/media/michi.576d038960feac1cb458.png',
    siteTitle: 'CSEC',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Our Team', link: 'team.md' },
      { text: 'Kali-Linux', link: 'CTF Notes/Kali-Linux/what-is-kali.md' },
    ],

    // https://vitepress.dev/reference/default-theme-sidebar
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      'CTF Notes/Kali-Linux/': [
        { text: 'What is Kali?', link: 'CTF Notes/Kali-Linux/what-is-kali.md'},
        {
          text: 'Setting up Kali',
          collapsed: false,
          items: [
            { text: 'Virtual Machine', link: 'CTF Notes/Kali-Linux/setup-kali.md' },
            { text: 'Windows Subsystem Linux', link: 'CTF Notes/Kali-Linux/setup-kali-wsl.md' },
          ]
        },
      ],

      'CTF Notes/Cyptography/': [
        { text: 'What is cryptography?', link: 'CTF Notes/Cyptography/what-is-crypto.md'},
        {
          text: 'Cryptography tools/code',
          collapsed: false,
          items: [
            { text: 'Various Tools', link: 'CTF Notes/Cyptography/crypto-tools.md' },
          ]
        },
        {
          text: 'Cryptography Topics',
          collapsed: false,
          items: [
            { text: 'OneTimePad', link: 'CTF Notes/Cyptography/Onepad.md' },
          ]
        },
      ],
      
      'CTF Notes/Password-Cracking/': [
        { text: 'What is Password Cracking?', link: 'CTF Notes/Password-Cracking/what-is-password-cracking.md'},
        {
          text: 'Password Cracking Tools and info',
          collapsed: false,
          items: [
            { text: 'Password-Cracking Tools', link: 'CTF Notes/Password-Cracking/tools.md' },
            { text: 'Hashcat Options', link: 'CTF Notes/Password-Cracking/hashcat-options.md'},
          ]
        },
      ],

      'CTF Notes/Forensics': [
        { text: 'What is Forensics?', link: 'CTF Notes/Forensics/what-is-forensics.md'},
        {
          text: 'Forensics Tools and info',
          collapsed: false,
          items: [
            { text: 'Forensics Tools', link: 'CTF Notes/Forensics/tools.md' },
          ]
        },
      ],

      'CTF Notes/Log-Analysis': [
        { text: 'What is Log analysis?', link: 'CTF Notes/Log-Analysis/what-is-log-analysis.md'},
        {
          text: 'Log Analysis Tools and info',
          collapsed: false,
          items: [
            { text: 'Log Tools', link: 'CTF Notes/Log-Analysis/tools.md' },
          ]
        },
      ],

      'CTF Notes/OSINT': [
        { text: 'What is OSINT?', link: 'CTF Notes/OSINT/what-is-osint.md'},
        {
          text: 'OSINT Tools and info',
          collapsed: false,
          items: [
            { text: 'OSINT Tools', link: 'CTF Notes/OSINT/tools.md' },
          ]
        },
      ],

      'CTF Notes/Network-Traffic-Analysis': [
        { text: 'What is Network-Traffic-Analysis?', link: 'CTF Notes/Network-Traffic-Analysis/what-is-NTA.md'},
        {
          text: 'NTA Tools and info',
          collapsed: false,
          items: [
            { text: 'NTA Tools', link: 'CTF Notes/Network-Traffic-Analysis/tools.md' },
            { text: 'NCL-NTA-walkthrough', link: 'CTF Notes/Network-Traffic-Analysis/NCL-NTA-solutions.md'}
          ]
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/Betim-Hodza/CSEC-CTF-REP/',
      text: 'Edit this page on github!',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Betim-Hodza/CSEC-CTF-REP/' }
    ]
  }
})
