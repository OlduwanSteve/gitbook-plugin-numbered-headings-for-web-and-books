var RESET_TEMPLATE = [
  '<style>',
  'body {',
  '  counter-reset: h1 SECTION_NUM chapter-number CHAPTER_NUM;',
  '}',
  '</style>'
].join('\n') + '\n';

module.exports = {
  website: {
    assets: './assets',
    css: [
      'numbered-headings-website.css'
    ]
  },
  ebook: {
    assets: './assets',
    css: [
      'numbered-headings.css'
    ]
  },
  hooks: {
    'page:before': function(page) {
      var levelParts = page.level.split('.');
      var sectionNum = Number(levelParts[1] - 1);
      var chapterNum = Number(levelParts[0]);
      var counterReset = RESET_TEMPLATE.replace(/SECTION_NUM/, sectionNum).replace(/CHAPTER_NUM/, chapterNum);
      page.content = counterReset + page.content;

      return page;
    }
  }
};
