module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions"]
    }),
    require("postcss-pxtorem")({
      rootValue:100,     //100px  ==  1rem
      propWhiteList:[]
    })
  ]
}