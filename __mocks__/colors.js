const colors = jest.createMockFromModule('colors')

const mock = s => s

colors.yellow = mock
colors.blue = mock

module.exports = colors