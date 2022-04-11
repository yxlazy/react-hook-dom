const fabric = require('@umijs/fabric');
module.exports = {
  ...fabric.default,
  rules: {
    ...fabric.default.rules,
  },
  plugins: [...fabric.default.plugins, 'react-hook'],
};
