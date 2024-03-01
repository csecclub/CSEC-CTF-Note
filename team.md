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
        avatar: 'assets/michi.png',
        name: 'Michi aka HackerCat',
        title: 'Mascot',
        desc: 'Meow!',
        org: 'CSEC',
        links: [
            { icon: 'github', link: 'https://github.com/Betim-Hodza/CSEC-CTF-REP'},
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