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
  <div>
    <div class="ps-9 tx-gray-500 d-flex flex-column">
      <div class="ps-8 lh-1 fs-xxs">Links</div>
      <div class="ps-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 4 C 12 8, 9 10, 6 13" />
          <path d="M6 13 L9 13 M6 13 L6 10" />
        </svg>
      </div>
    </div>
    <div class="fs-xs d-flex flex-row gap-4 justify-content-start">
      <div v-for="l in links" :key="l.text">
        <a
          :href="l.href"
          target="_blank"
          className="d-flex align-items-center"
          :title="l.imgAlt"
          rel="noreferrer"
        >
          <img :height="imgHeight" :alt="l.imgAlt" :src="l.imgSrc" />
        </a>
      </div>
    </div>
  </div>
</template>
