import sveltePreprocess from 'svelte-preprocess'

const config = {
  preprocess: [sveltePreprocess({
    postcss: true,
    typescript: true,
  })]
};

export default config;

