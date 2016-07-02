module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more$/,
      respondwith: './livelist-more.json'
    }
  ]
};
