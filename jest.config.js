module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
