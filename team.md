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
import Betim from './assets/officers/Betim.jpg'
import Devrat from './assets/officers/Devrat.jpg'

const members = [
    {
      avatar: Brett,
        name: 'Brett',
        title: 'President',
        desc: '',
        org: 'CSEC',
    },
    {
        avatar: Rose,
        name: 'Rose Ramireze',
        title: 'Vice President',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/rose-ramirez/'},
        ]
    },
    {
        avatar: DiegoM,
        name: 'Diego Martinez',
        title: 'Secretary',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/diemar20'},
        ]
    },
    {
        avatar: Javier,
        name: 'Javier Cardoso',
        title: 'Web Master',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/cardoso-javier/'},
        ]
    },
    {
        avatar: Jocelyn,
        name: 'Jocelyn Vazquez',
        title: 'Infra. Officer',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jocelyn-vazquez'},
        ]
    },
    {
      avatar: Monika,
        name: 'Monika Sutaria',
        title: 'Tech Devt. Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/monika-sutaria7/'},
        ]
    },
    {
      avatar: Nicole,
        name: 'Nicole Rodriguez',
        title: 'Event Coordinator',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://utacsec.org/www.linkedin.com/in/nicoleceline'},
        ]
    },
    {
      avatar: Jeremiah,
        name: 'Jeremiah Pitts',
        title: 'Event Planner',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jeremiahpitts/'},
        ]
    },
    {
        avatar: Gino,
        name: 'Gino De Luna',
        title: 'Social Media Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/gino-de-luna/'},
        ]
    },
    {
      avatar: Anne,
        name: 'Anne Nguyen',
        title: 'CTF Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/anne-h-nguyen/'},
        ]
    },
    {
        avatar: DiegoV,
        name: 'Diego Vester',
        title: 'Director of Fundraising',
        desc: '',
        org: 'CSEC',
        links: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/diegovester/'},
        ]
    },
    {
      avatar: Betim,
        name: 'Betim Hodza',
        title: 'Membership Officer',
        desc: '',
        org: 'CSEC',
        links: [
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/betim-hodza-17bb46253/'},
        ]
    },
    {
        avatar: Devrat,
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