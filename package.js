Package.describe({
  summary: "Mailgun contact and subscribe forms. Supports settings.json and orion.config settings.",
  version: "0.0.2",
  name: "dvc:mailgun",
  git: "https://github.com/dvc94ch/meteor-mailgun.git",
  documentation: "README.md"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

  api.use([
    'meteor-platform',
    'http',
    'aldeed:autoform@4.0.0 || 5.0.0'
  ]);

  api.addFiles([
      'config.js'
  ]);

  api.addFiles([
      'methods.js'
  ], 'server');

  api.addFiles([
      'contactform/contactform.html',
      'contactform/contactform.js',
      'optinform/optinform.html',
      'optinform/optinform.js'
  ], 'client');
});
