var SG = require('strong-globalize');
SG.SetRootDir(__dirname);

var now = new Date();
var amount = 1250.55;
var langs = [ 'en', 'de', 'es', 'fr','it', 'pt', 'ru',
  'ja', 'ko', 'zh-Hans', 'zh-Hant',
  'ar', 'bn', 'cs', 'el', 'fi', 'hi', 'id', 'lt',
  'nb', 'nl', 'pl', 'ro', 'sl', 'sv', 'ta', 'te',
  'th', 'tr', 'uk', 'vi'];

console.log('_____________ g.f _____________');
langs.forEach(function(lang) {
  var g = new SG({language: lang});
  var text = g.f(
    'The time in language "%s" is %s.  The currency is "%s".',
    g.getLanguage(), g.d(now), g.c(amount, 'USD'));
  console.log(text);
})

console.log('_____________ g.log _____________');
var g = SG();
langs.forEach(function(lang) {
  g.setLanguage(lang);
  g.log(
    'The time in language "%s" is %s.  The currency is "%s".',
    g.getLanguage(), g.d(now), g.c(amount, 'USD'));
})
