module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
    },
    // transform: {
    //   '^.+\\.(js|jsx)$': 'babel-jest',
    // }
  };