module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  trasform: {
    '.*\\.ts$': 'ts-jest'
  }
}
