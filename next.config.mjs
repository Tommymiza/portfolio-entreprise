/** @type {import('next').NextConfig} */

// import * as glob from 'glob';
// import path from 'path';
// import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
    // webpack: (config, { isServer }) => {
    //     if (!isServer && process.env.NODE_ENV === 'production') {
    //         config.plugins.push(
    //             new PurgeCSSPlugin({
    //                 paths: glob.sync(path.join(__dirname, 'src/**/*'), { nodir: true }),
    //             })
    //         );
    //     }
    //     return config;
    // },
};

export default nextConfig;
