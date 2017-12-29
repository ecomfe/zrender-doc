# ZRender Documentation

## Installation

Before you start and run this project, make sure you have `Nodejs` and `gulp` installed. And if you want to build the source on Windows, you will also need to install `Ruby` and `Bundler`

> If you have problems installing Jekyll, please refer to [Jekyll's official site](https://jekyllrb.com/docs/installation/).

Install `gulp`

```
npm i -g gulp
```

Install dependencies

```
npm i
```

Copy asset files (css, js, ...) to source directory:

```
gulp
```

## Preview

To preview docs, simply run `npm start`, then open [http://localhost:4000/](http://localhost:4000/) in your browser, you can change the default url and port in `./src/_config.yml`

## Build

Open another terminal window and:

```
npm run build  # build documentation to dist
```
