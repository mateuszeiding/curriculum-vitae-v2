<script lang="ts" setup>
import github from '@assets/github-dark.png'
import linkedin from '@assets/linkedin.png'
import vercel from '@assets/vercel-dark.png'
import old from '@assets/old.png'

type Link = {
  href: string
  alignment: 'start' | 'center' | 'end'
  imgSrc: string
  imgAlt: string
  text: string
}
const links: Link[] = [
  {
    text: 'LinkedIn',
    imgAlt: 'LinkedIn profile',
    imgSrc: linkedin,
    alignment: 'start',
    href: 'https://www.linkedin.com/in/mateusz-eiding/',
  },
  {
    text: 'GitHub',
    imgAlt: 'GitHub profile',
    imgSrc: github,
    alignment: 'center',
    href: 'https://github.com/mateuszeiding/',
  },
  {
    text: 'Resume',
    imgAlt: 'Resume as a web application',
    imgSrc: vercel,
    alignment: 'end',
    href: 'https://mateusz-eiding.dev/',
  },
  {
    text: 'OLD Resume',
    imgAlt: 'OLD Resume as a web application',
    imgSrc: old,
    alignment: 'end',
    href: 'https://mateusz-eiding-cv.vercel.app/',
  },
]

const imgHeight = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.6
</script>
<template>
  <div class="fs-xs d-flex flex-row gap-4 justify-content-end pt-6">
    <div v-for="l in links" :key="l.text">
      <a :href="l.href" target="_blank" className="d-flex align-items-center" rel="noreferrer">
        <img :height="imgHeight" :alt="l.imgAlt" :src="l.imgSrc" />
      </a>
    </div>
  </div>
</template>
