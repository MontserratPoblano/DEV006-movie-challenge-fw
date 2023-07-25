// eslint-disable-next-line no-undef
module.exports = {
  presets: [
      [ '@babel/preset-env', { targets: { esmodules: true } } ],
      [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],
};



// const presets = [
//   "@babel/preset-env",
//   "@babel/preset-react"
// ];

// module.exports = { presets };

// module.exports =  {
//   presets: [
//     "@babel/preset-env",
//     "@babel/preset-react"
//   ]
// };


// export default {
//   presets: [['@babel/preset-env', { modules: false }]],
//   // The rest is the same ...
// }
