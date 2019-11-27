module.exports = {
  name: 'brady-bungalow',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/brady-bungalow',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
