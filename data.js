
var pkg = require('./package.json');
var basscss = require('basscss/package.json');

module.exports = {
  title: 'Showcase',
  path: '/showcase',
  version: basscss.version,
  author: basscss.author.name,
  description: basscss.description,
  keywords: basscss.keywords,
  cdn: 'http://d2v52k3cl9vedd.cloudfront.net/basscss/assets/',
  sites: [
    {
      title: 'Nodeconf',
      url: 'http://nodeconf.com/',
      description: 'The longest running community driven conference for the Node community.',
      image: 'screenshot-nodeconf-2015-03-03-09-23-07-640.jpg '
    },
    {
      title: 'Assembly',
      url: 'http://assembly.com/',
      description: 'Turn ideas into great products with people around the world.',
      image: 'screenshot-assembly-discover-2015-03-03-09-24-09-640.jpg'
    },
    {
      title: 'Front-End United for Leokz',
      url: 'http://frontendunited.io/leokzw/index.en.html',
      description: 'Developers united for Leonardo Konarzewski',
      image: 'screenshot-frontendunited.io-leokzw-index.en.html-2015-07-07-03-48-23-640.jpg'
    },
    {
      title: 'MDI.ninja',
      url: 'http://mdi.ninja/',
      description: 'Mount Desert Island Like a Ninja',
      image: 'screenshot-mdi.ninja--2015-07-07-03-49-01-640.jpg'
    },
    {
      title: 'Noodles',
      url: 'http://www.getnoodl.es/',
      description: 'Keep, cook, and share all your recipes with Noodles.',
      image: 'screenshot-www.getnoodl.es--2015-07-07-03-41-57-640.jpg'
    },
    {
      title: 'Monodraw for Mac',
      url: 'http://monodraw.helftone.com/',
      description: 'Powerful ASCII art editor designed for the Mac.',
      image: 'monodraw-640.jpg'
    },
    {
      title: 'Singles Club',
      url: 'http://singlesclub.fm/',
      description: 'Part record club. Part music journal.',
      image: 'singlesclub-640.jpg'
    },
    {
      title: 'Lachlan Campbell',
      url: 'http://lachlanjc.me',
      description: 'Personal site of Lachlan Campbell',
      image: 'screenshot-lachlanjc--2015-02-24-12-07-33-640.jpg'
    },
    {
      title: 'Pixyll',
      url: 'http://pixyll.com/',
      description: 'A simple, beautiful theme for Jekyll that emphasizes content rather than aesthetic fluff.',
      image: 'pixyll-640.jpg'
    },
    {
      title: 'Nurturing Ability',
      url: 'http://www.nurturingability.com.au/',
      description: 'Helping our Most Helpless One Family at a Time',
      image: 'nurturingability-640.jpg'
    },
    {
      title: 'Linknest',
      url: 'https://linknest.cc/',
      description: 'Bookmarks made simple',
      image: 'Screenshot-https:--linknest.cc---2015-07-16-03-21-04-800.jpg'
    },
    {
      title: 'CSS Stats',
      url: 'http://cssstats.com/',
      description: 'Potentially interesting stats on stylesheets',
      image: 'cssstats-640.jpg'
    },
  ],
}

