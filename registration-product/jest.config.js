/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@modules/(.*)": "<rootDir>/src/modules/$1",
    "@config/(.*)": "<rootDir>/src/shared/config/$1",
    "@errors/(.*)": "<rootDir>/src/shared/errors/$1",
    "@containers/(.*)": "<rootDir>/src/shared/containers/$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/__tests__/config"],
};
