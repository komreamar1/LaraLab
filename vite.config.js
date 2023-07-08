import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import fs from 'fs';
const host = 'my-app.test'; 

export default defineConfig({
    // server: { 
    //     host, 
    //     hmr: { host:'localhost' }, 
    //     https: { 
    //         key: fs.readFileSync(`/path/to/${host}.key`), 
    //         cert: fs.readFileSync(`/path/to/${host}.crt`), 
    //     }, 
    // }, 
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js','resources/ts/app.tsx'],
           // valetTls: 'my-app.test', 
            refresh: true,
                }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/ts',
        },
    },
});
