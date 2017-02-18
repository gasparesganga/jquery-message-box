# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).


## v2.2.1 - 2017-02-18
### Fixed
- Minor bugfix that addresses event bubbling when keyboard is used



## v2.2.0 - 2017-01-24
### Added
- Filters (`filterDone` and `filterFail` options)
- Error message capabilities
- Input `autotrim` option for type "text and "password"

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
