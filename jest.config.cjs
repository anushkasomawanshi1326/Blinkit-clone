module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",  // Added ts/tsx support
  },

  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Added ts/tsx support

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",  
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "\\.jsx\\.txt$": "<rootDir>/src/$1", // Allows UTG .txt placeholders to be mapped if needed
  },
};
