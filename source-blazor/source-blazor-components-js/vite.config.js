import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssPrefixSelector from 'postcss-prefix-selector';
import path from 'path';

export default defineConfig({
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: './src/index.ts',
            output: {
                dir: '../source-blazor-components/wwwroot',
                entryFileNames: 'index.js', 
                assetFileNames: (assetInfo) => {
                    const extType = path.extname(assetInfo.name);
                    if (['.woff', '.woff2', '.eot', '.ttf', '.otf'].includes(extType)) {
                        return 'fonts/[name][extname]';
                    }
                    if (['.svg', '.jpg', '.png', '.webp'].includes(extType)) {
                        return 'img/[name][extname]';
                    }
                    if (extType === '.css') {
                        return 'styles.css';
                    }
                    return '[name][extname]';
                },
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
                postcssImport(),
                postcssPrefixSelector({
                    prefix: '.blazor-costum-scope',
                }),
            ],
        },
    },
}); 