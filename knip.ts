import type { KnipConfig } from 'knip'
const compiler = /<script\b[^>]*>([\s\S]*?)<\/script>/gm

const config: KnipConfig = {
  entry: ['src/main.ts', 'vite.config.ts'],
  project: ['**/*.{ts,vue,mjs,cjs,tsx}'],
  compilers: {
    vue: (text) => {
      const scripts = []
      let match
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      while ((match = compiler.exec(text))) scripts.push(match[1])
      return scripts.join(';')
    }
  },
  ignoreDependencies: ['@tsconfig/node18', '@vue/tsconfig']
}

export default config
