const vm = require('@microflows/nodevm')
const createRequires = vm.createRequires
const createLoadRemoteModule = vm.default

const requires = createRequires({})
module.exports = createLoadRemoteModule({ requires })
