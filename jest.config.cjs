module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
};
