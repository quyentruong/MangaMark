const cheerio = require('cheerio')
const minify = require('html-minifier').minify

const routeMeta = {
  '/profile': {
    name: 'Profile',
    description: 'Modify your name, email, and password'
  },
  '/': {
    name: 'Index',
    description: 'Have you ever wonder how to keep tracking your progress in reading manga ? This webapp will help you about it.'
  },
  '/guest/login': {
    name: 'Login',
    description: 'Ready to explore new world of MangaMark'
  },
  '/guest/register': {
    name: 'Register',
    description: 'Sign up to explore new world of MangaMark'
  },
  '/guest/forgot-password': {
    name: 'Forgot Password',
    description: 'Don\'t worry if you forgot your password'
  },
  '/guest/reset-password': {
    name: 'Reset Password',
    description: 'Reset password to get access again'
  }

}

function metaMarkup ({ name, description, image, url }) {
  return `
    <meta name="description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${name}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta itemprop="name" content="${name}">
    <meta itemprop="description" content="${description}">
    <meta itemprop="url" content="${url}">
    <meta itemprop="image" content="${image}">
  `
}

function meta ({ route, html }) {
  // meta tags (fill in your info here / dynamic per route)
  const metaTags = {
    name: routeMeta[route].name,
    description: routeMeta[route].description,
    image: process.env.URL + '/favicon.png',
    url: process.env.URL + route
  }

  // Load Nuxt generared HTML
  const $ = cheerio.load(html)

  // Generate meta markup
  const tags = metaMarkup(metaTags)

  // Append them to <head>
  $('head').append(tags)
  // minify result
  // Return new HTML
  return minify($.html(), {
    collapseWhitespace: true })
}

exports.meta = meta
