const mix = require('laravel-mix');
// require('laravel-mix-purgecss');

const postcssConfig = {
  plugins: [require('autoprefixer')],
};

mix.setPublicPath('dist'); // Production

if (mix.inProduction()) {
  postcssConfig.plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.twig', './purgesafelist.txt'],
      variables: true
    }),
    require('cssnano')({
      preset: ['default', { discardComments: { removeAll: true } }]
    })
  );
}

mix.js('src/scripts/app.js', '').sass('src/styles/app.scss', '', {}, postcssConfig.plugins);

if (mix.inProduction()) {
  mix.version();
}

// Set proxy same as site domain from server ex: localhost:3000
if (!mix.inProduction()) {
  mix.browserSync({
    proxy: 'http://flow.test/',
    files: ['src/**/*.twig', 'src/**/*.scss', 'src/**/*.js'],
    reloadDelay: 100
  });
}

mix.disableSuccessNotifications();

mix.extend('addWebpackLoaders', (webpackConfig, loaderRules) => {
  loaderRules.forEach((loaderRule) => {
    webpackConfig.module.rules.push(loaderRule);
  });
});

mix.addWebpackLoaders([
  {
    test: /\.(glsl|vs|fs|vert|frag)$/,
    exclude: /node_modules/,
    use: ['raw-loader', 'glslify-loader']
  }
]);
