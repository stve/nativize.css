# nativize.css

[![npm][npm-image]][npm-url] [![license][license-image]][license-url]

A collection of [styles](https://github.com/stve/nativize.css/blob/master/nativize.css) for making [electron](http://electron.atom.io) applications appear and act more like plain old native apps

## Installation

### NPM

`npm install --save nativize.css`

### Bower

`bower install --save nativize.css`

## Features

* Prevents rubber-band scrolling of the page
* Disables dragging of images and form elements
* Disables text selection
* Defaults cursors
* Remove autofocus glow from form elements

### How is this different from normalize.css?

[normalize.css](https://github.com/necolas/normalize.css) does an amazing job of normalizing browser inconsistencies. nativize.css is a simpler project aimed at electron apps. It does not perform any resets of any kind and both normalize.css and nativize.css should be able to coexist happily within your project.

## Hat-tip

Many of these features are sourced from [Jessica Lord's](https://github.com/jlord) presentation [Nativize is the new Normalize](https://speakerdeck.com/jllord/nativize-is-the-new-normalize).

## Going even further

[Ben Gotow's](https://github.com/bengotow) presentation [Building "Native Experiences" with Electron](http://www.slideshare.net/bengotow/building-native-experiences-with-electron) is a must watch for additional techniques to create a more native-feel to your electron app.

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the contribution process easy and effective for everyone involved.

## Copyright

Copyright (c) Steve Agalloco. See [LICENSE](https://github.com/stve/nativize.css/blob/master/LICENSE.md) for details.

[license-image]: https://img.shields.io/npm/l/nativize.css.svg?style=flat-square
[license-url]: LICENSE.md
[npm-image]: https://img.shields.io/npm/v/nativize.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/nativize.css
