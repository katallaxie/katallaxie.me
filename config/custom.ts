/**
 * Custom Configuration
 *
 * You can customize almost every crucial aspect of your setup here.
 *
 * - Common Configuration
 * - Dev Configuration
 * - Production Configuration
 * - Head Tags
 * - Folders
 * - Sourcemaps
 * - Dev Server Configuration
 *
 */
import { root } from './helpers';

import * as Autoprefixer from 'autoprefixer';
import * as CssNano from 'cssnano';

import * as PreloadWebpackPlugin from 'preload-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlCriticalPlugin from 'html-critical-webpack-plugin';
import * as PrerenderSpaPlugin from 'prerender-spa-plugin';

const bootCss = new ExtractTextPlugin('boot.css');

// common
export const CustomCommonConfig: CustomConfig = {
  plugins: [bootCss, new PreloadWebpackPlugin()],
  rules: [
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoader: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [Autoprefixer(), CssNano({ zindex: false })]
          }
        },
        'sass-loader'
      ],
      exclude: /boot\.scss/
    },
    {
      test: /boot\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [Autoprefixer(), CssNano()]
            }
          },
          'sass-loader'
        ]
      })
    }
  ]
};

// dev
export const CustomDevConfig: CustomConfig = {
  plugins: [],
  rules: []
};

// production
export const CustomProdConfig: CustomConfig = {
  plugins: [
    new PrerenderSpaPlugin(root(`public`), ['/'], {
      captureAfterTime: 2000,
      ignoreJSErrors: false,
      postProcessHtml: context => {
        return context.html.replace(
          /<div id=\"app\"\>/i,
          '<div id="app" class="fade-in">'
        );
      }
    }),
    new HtmlCriticalPlugin({
      base: root(`public`),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      penthouse: {
        blockJSRequests: false
      }
    })
  ],
  rules: []
};

// head
export const CustomHeadTags: HeadTags = {
  link: [
    // this will be mapted to a type of head elements (e.g. link)
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/icon/apple-icon-57x57.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/icon/apple-icon-60x60.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/icon/apple-icon-72x72.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/icon/apple-icon-76x76.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/icon/apple-icon-114x114.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/icon/apple-icon-120x120.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/icon/apple-icon-144x144.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/icon/apple-icon-152x152.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icon/apple-icon-180x180.png'
    },

    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/icon/android-icon-192x192.png'
    },

    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icon/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/icon/favicon-96x96.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icon/favicon-16x16.png'
    },

    { rel: 'manifest', href: '/manifest.json' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#00bcd4' },
    {
      name: 'msapplication-TileImage',
      content: '/icon/ms-icon-144x144.png',
      '=content': true
    },
    { name: 'theme-color', content: '#00bcd4' },
    {
      name: 'description',
      content: 'Sebastian Döll is a Solutions Architect @ AWS'
    },
    { name: 'twitter:site', content: '@katallaxie' },
    { name: 'twitter:content', content: '@katallaxie' },
    { name: 'og:site_name', content: 'Sebastian Döll' },
    {
      name: 'og:description',
      content: 'Sebastian Döll is an Solutions Architect @ AWS'
    },
    { name: 'og:url', content: 'http://katallaxie.me' },
    { name: 'og:title', content: 'Sebastian Döll' }
  ],
  title: 'Sebastian Döll'
};

// copy folders
export const CustomCopyFolders = [];

// webpack-dev-server
export const DevServerConfig = {
  options: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  port: 3000
};
