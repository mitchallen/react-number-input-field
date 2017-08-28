@mitchallen/react-number-input-field
==
NumberInputField React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-number-input-field">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-number-input-field.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-number-input-field">
    <img src="https://codecov.io/gh/mitchallen/react-number-input-field/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-number-input-field">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-number-input-field.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-number-input-field">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-number-input-field.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-number-input-field">
    <img src="https://img.shields.io/github/license/mitchallen/react-number-input-field.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-number-input-field --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import NumberInputField from '@mitchallen/react-number-input-field';
```

__NOTE:__ NumberInputField must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<NumberInputField />
```

* * *

## Simple Test

```
$ create-react-app react-number-input-field-test
$ cd react-number-input-field-test/
$ npm install @mitchallen/react-number-input-field --save
$ npm install --save material-ui
```

### Modify src/App.js

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Must include MuiThemeProvider!
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NumberInputField from '@mitchallen/react-number-input-field';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <NumberInputField />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
```

Run the app

```
npm start
```

* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-number-input-field.git](https://bitbucket.org/mitchallen/react-number-input-field.git)
* [github.com/mitchallen/react-number-input-field.git](https://github.com/mitchallen/react-number-input-field.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.2

* added examples folder and example

#### Version 0.1.1 

* updated test case

#### Version 0.1.0 

* initial release

* * *