import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "CSEC CTF Notes",
  description: "repo for all your ctf needs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kali-Linux', link: 'CTF Notes/Kali-Linux/what-is-kali.md' },
      { text: 'Cryptography', link: 'CTF Notes/Cyptography/what-is-crypto.md' },
      { text: 'Password Cracking', link: 'CTF Notes/Password-Cracking/what-is-password-cracking.md' },
    ],

    // https://vitepress.dev/reference/default-theme-sidebar
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      'CTF Notes/Kali-Linux/': [
        { text: 'What is Kali?', link: 'CTF Notes/Kali-Linux/what-is-kali.md'},
        {
          text: 'Setting up Kali',
          collapsed: true,
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
          collapsed: true,
          items: [
            { text: 'Various Tools', link: 'CTF Notes/Cyptography/what-is-crypto.md' },
          ]
        },
      ],

      'CTF Notes/Password-Cracking/': [
        { text: 'What is Password Cracking?', link: 'CTF-Notes/Password-Cracking/what-is-password-cracking.md'},
        {
          text: 'Password Cracking tools/code',
          collapsed: true,
          items: [
            { text: 'Various Tools', link: 'CTF Notes/Cyptography/what-is-crypto.md' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mobiclub' }
    ]
  }
})
