Package.describe({
  name: '19degrees:scope-permission-demo',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'An in-depth look into scoping and permissions of Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/19degrees/meteor-scope-permission-demo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('scope-permission-demo.js');
  api.export(['ScopePermissionDemo'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('19degrees:scope-permission-demo');
  api.addFiles('scope-permission-demo-tests.js');
});
