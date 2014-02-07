Package.describe({
  summary: "A Test Package"
});

Npm.depends({
    "colors": "0.6.2"
});

Package.on_use(function (api) {
  api.export('TestPack'); // `api.export` introduced in Meteor 0.6.5
  api.add_files("test-package.js", "client");
  api.add_files("server-test.js","server");
});
