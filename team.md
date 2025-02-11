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


import Brett from './assets/officers/Brett.jpg'
import DiegoM from './assets/officers/Diego.jpg'
import Javier from './assets/officers/Javier.jpg'
import Rose from './assets/officers/Rose.jpg'
import Jocelyn from './assets/officers/Jocelyn.jpg'
import Monika from './assets/officers/Monika.jpg'
import Nicole from './assets/officers/Nicole.jpg'
import Jeremiah from './assets/officers/Jeremiah.jpg'
import Gino from './assets/officers/Gino.jpg'
import Anne from './assets/officers/Anne.jpg'
import DiegoV from './assets/officers/DiegoVester.jpg'
import Betim from './assets/officers/Betim.jpeg'
import Devrat from './assets/officers/Devrat.jpg'
import Fawaz from './assets/officers/Fawaz.jpg'
import Summer from './assets/officers/SummerBarnes.jpeg'

const members = [
    {
      avatar: Rose,
        name: 'Rose Ramirez',
        title: 'President',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/rose-ramirez/'},
        ]
    },
    {
        avatar: Betim,
        name: 'Betim Hozda',
        title: 'Vice President',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/betim-hodza-17bb46253/'},
        ]
    },
    {
        avatar: Brett,
        name: 'Christian Brown',
        title: 'Treasurer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/christian-t-brown/'},
        ]
    },
    {
      avatar: Brett,
        name: 'Richard Olu Jordan',
        title: 'Treasurer Trainee',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/richardolujordan/'},
        ]
    },
        {
        avatar: Fawaz,
        name: 'Fawaz Asif',
        title: 'Web Developer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/fawaz-asif/'},
        ]
    },
    {
      avatar: Summer,
        name: 'Summer Barnes',
        title: 'Event Coordinator',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/summer-rae-barnes/'},
        ]
    },
    {
      avatar: Jeremiah,
        name: 'Jeremiah Pitts',
        title: 'Research Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jeremiahpitts/'},
        ]
    },
    {
      avatar: Brett,
        name: 'Brett Boggs',
        title: 'Outreach Director',
        desc: '',
        org: 'CSEC',
    },
    {
        avatar: Brett,
        name: 'Basmlh Elsayed',
        title: 'Social Media Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/basmlh-elsayed/'},
        ]
    },
    {
      avatar: Brett,
        name: 'Phillip Lenguyen',
        title: 'CTF Captain',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/philliplenguyen/'},
        ]
    },
    {
        avatar: Brett,
        name: 'Rohita ',
        title: 'Fundraising Director',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/rohita-k/'},
        ]
    },
    {
      avatar: Brett,
        name: 'Wesley Cadiz',
        title: 'Membership Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/wescadiz/'},
        ]
    },
    {
        avatar: Brett,
        name: 'Safal Karki',
        title: 'Recruitment Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/safal-karki-8a0aa22b1/'},
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