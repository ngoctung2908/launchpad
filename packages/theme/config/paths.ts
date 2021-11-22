const path = require('path')

const paths = (exports.PATHS = {
    root: path.resolve('.'),
    public: path.resolve('./public'),
    src: path.resolve('./src'),
    base: path.resolve('./src/base'),
    styles: path.resolve('./src/styles'),
    
    dist: path.resolve('./lib'),
    distBase: path.resolve('./lib/base'),
    plugins: path.resolve('./plugins'),
    node_modules: path.resolve('./node_modules'),
})

export default paths
