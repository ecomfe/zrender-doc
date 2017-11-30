# ZRender Documentation

## Build

For the first time:

```
npm i
npm i -g gulp
cd src
bundle install
```

> If you have problem installing Jekyll, please refer to [Jekyll's official site](https://jekyllrb.com/docs/installation/).

Watch asset files (css, js, ...) changes:

```
gulp       # copies and compresses assets
```

Open another terminal window and:

```
cd src
jekyll b --config _config_release.yml   # build documentation to dist
```
