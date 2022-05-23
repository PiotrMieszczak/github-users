module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/github-users',
  transformIgnorePatterns: ['/node_modules/?!@angular'],
};
