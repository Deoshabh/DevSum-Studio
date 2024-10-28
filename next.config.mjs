// next.config.mjs

const config = {
    // ... other Next.js config options
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.snapshot = {
        ...config.snapshot,
        managedPaths: [
          /^(.+?[\\/]node_modules[\\/](?!@next|@img))/, // Exclude @next and @img from managed paths
        ],
      };
      return config;
    },
  };
  
  export default config;
  