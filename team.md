---
layout: page
---
<script setup>
import{
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers,
    VPTeamPageSection
} from 'vitepress/theme'

const members = [
    {
        avatar: 'assets/officers/Hussain.jpg',
        name: 'Hussain Alkatheri',
        title: 'President',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/hussain-alkatheri/'},
        ]
    },
    {
      avatar: 'assets/officers/Brett.jpg',
        name: 'Brett',
        title: 'Vice President',
        desc: '',
        org: 'CSEC',
    },
    {
        avatar: 'assets/officers/Diego.jpg',
        name: 'Diego Martinez',
        title: 'Secretary',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/diemar20'},
        ]
    },
    {
        avatar: 'assets/officers/Javier.jpg',
        name: 'Javier Cardoso',
        title: 'Web Master',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/cardoso-javier/'},
        ]
    },
    {
        avatar: 'assets/officers/Rose.jpg',
        name: 'Rose Ramireze',
        title: 'Infra. Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/rose-ramirez/'},
        ]
    },
    {
        avatar: 'assets/officers/Jocelyn.jpg',
        name: 'Jocelyn Vazquez',
        title: 'Infra. Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jocelyn-vazquez'},
        ]
    },
    {
      avatar: 'assets/officers/Monika.jpg',
        name: 'Monika Sutaria',
        title: 'Tech Devt. Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/monika-sutaria7/'},
        ]
    },
    {
      avatar: 'assets/officers/Nicole.jpg',
        name: 'Nicole Rodriguez',
        title: 'Event Coordinator',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://utacsec.org/www.linkedin.com/in/nicoleceline'},
        ]
    },
    {
      avatar: 'assets/officers/Jeremiah.jpg',
        name: 'Jeremiah Pitts',
        title: 'Event Planner',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jeremiahpitts/'},
        ]
    },
    {
        avatar: 'assets/officers/Gino.jpg',
        name: 'Gino De Luna',
        title: 'Social Media Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/gino-de-luna/'},
        ]
    },
    {
      avatar: 'assets/officers/Anne.jpg',
        name: 'Anne Nguyen',
        title: 'CTF Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/anne-h-nguyen/'},
        ]
    },
    {
        avatar: 'assets/officers/DiegoVester.jpg',
        name: 'Diego Vester',
        title: 'Director of Fundraising',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/diegovester/'},
        ]
    },
    {
      avatar: 'assets/officers/Betim.jpg',
        name: 'Betim Hodza',
        title: 'Membership Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/betim-hodza-17bb46253/'},
        ]
    },
    {
        avatar: 'assets/officers/Devrat.jpg',
        name: 'Devrat Patel',
        title: 'Membership Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/devratpatel/'},
        ]
    },
    // ... other team members
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      CSEC's Team!
    </template>
    <template #lead>
      The CyberSecurity Clubs current members! Feel free to contact us on discord for any questions or just say hi!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>