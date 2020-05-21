# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](https://semver.org/).


## v3.2.2 - 2020-05-21
### Fixed
- Added `z-index : 9999` to `.messagebox_overlay` class in default CSS file to improve interaction with external components and plugins.



## v3.2.1 - 2019-10-16
### Fixed
- Plugin name in header description



## v3.2.0 - 2019-10-07
### Added
- Input types `"date"`, `"time"`, `"number"`, `"color"`, `"email"`
- Input `htmlAttributes` option



## v3.1.0 - 2019-04-25
### Added
- Input type `"textarea"` (alias `"memo"`)
- Input `resize` option for type `"textarea"`
- Input `rows` option for type `"textarea"`
- Customizable `messagebox_content_input_textarea` class in the external CSS file
- Enforced `strict mode`

### Changed
- Input `autotrim` option for types `"text`, `"password"` and `"textarea"` defaults to `true`
- CSS that was injected into document `head` is now included in the external CSS file

### Removed
- Direct CSS injection into document `head`



## v3.0.0 - 2018-10-08
### Added
- `customOverlayClass` option
- `title` option
- Input type `"checkbox"`
- Input type `"caption"`
- Input `customClass` option
- Inputs `message` option for type `"caption"`
- Javascript sourcemaps
- Minified default CSS file

### Changed
- Inputs `default` option renamed to `defaultValue`
- Buttons `class` option renamed to `customClass`
- Simplified default CSS which is more easily customizable
- Folder structure has changed, with source files under `src/` and production files under `dist/`

### Fixed
- Content horizontal padding is preserved also in case of horizontal overflow
- Minor CSS and code quirks



## v2.2.3 - 2018-04-22
### Fixed
- Some more browser compatibility code embellishments



## v2.2.2 - 2018-04-22
### Fixed
- Removed a comma in excess causing issues with some browsers



## v2.2.1 - 2017-02-18
### Fixed
- Minor bugfix that addresses event bubbling when keyboard is used



## v2.2.0 - 2017-01-24
### Added
- Filters (`filterDone` and `filterFail` options)
- Error message capabilities
- Input `autotrim` option for type `"text"` and `"password"`

### Changed
- Default keycodes for `buttonDone`

### Fixed
- Minor CSS fix: added `margin-bottom` for buttons and removed `padding-bottom` from `.messagebox_buttons` wrapper
- Minor code fix: don't remove the focus from an existing MessageBox input if another MessageBox is created and queued



## v2.1.0 - 2016-11-12
### Added
- Bower and npm support
- Changelog


## v2.0.1 - 2016-10-18
### Fixed
- Vertical positioning: spacer element instead of `margin-top` when top is not set to "auto"



## v2.0.0 - 2016-08-09
### Added
- Custom buttons
- Custom inputs
- `buttonsOrder` option
- `queue` option

### Changed
- Required CSS is provided by Javascript, customizable classes are in the external CSS file
- Complete CSS rewrite: Flexbox is used extensively



## v1.1 - 2016-01-07
### Added
- Custom element support
- Fail handler gets data parameter the same way done handler does

### Changed
- CSS organization (required rules are separated from customizable ones)



## v1.0 - 2015-04-29
*First public release*
