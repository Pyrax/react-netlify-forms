// @ts-check

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'react-netlify-forms',
      description:
        'React components and hooks giving you the power of Netlify Forms',
      logo: {
        src: './src/assets/logo.png',
        alt: 'react-netlify-forms'
      },
      favicon: '/favicon.png',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/pyrax/react-netlify-forms'
        }
      ],
      sidebar: [
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' }
        },
        { slug: 'playground' },
        { slug: 'reference' },
        { slug: 'license' }
      ]
    }),
    mdx(),
    react()
  ],
  site: 'https://pyrax.github.io/react-netlify-forms',
  base: '/react-netlify-forms'
})
