# react-input-otp

[![NPM](https://img.shields.io/npm/v/@onefifteen-z/react-input-otp.svg)](https://www.npmjs.com/package/@onefifteen-z/react-input-otp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Kapture 2020-03-12 at 9 47 16](https://user-images.githubusercontent.com/35680082/76476865-dc9d3500-6446-11ea-8380-f414270976aa.gif)
## Install

```bash
npm install --save @onefifteen-z/react-input-otp
```

## Usage

[Example](https://onefifteen-z.github.io/react-input-otp)

```jsx
import React, { Component } from 'react';

import InputOtp from '@onefifteen-z/react-input-otp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otpCode: '',
    };
  }

  render () {
    const handleChange = otpCode => {
      this.setState({ otpCode });
    };

    return (
      <InputOtp onChange={handleChange} value={this.state.otpCode} />
    )
  }
};

```

## Properties
| Name       | Type   | Default | Description |
|------------|--------|---------|-------------|
| otpLength | number | `6` | Number of OTP length |
| numberOnly | bool | `false` | Restrict to digit only (only valid when pattern is `null`) |
| type | string | `'tel'` | `type` property of `<input>` eg. `password` |
| pattern | RegExp | `null` | Pattern of characters available to the inputs |
| disabled | bool | `false` | Disable all the inputs |
| error | bool | `false` | Whether has error in OTP inputted |
| errorMessage | string | `null` | Error messaged showed when `error` is true |
| onChange | func | `() => {}` | Return OTP value |
| autoFocus | bool | `false` | Auto focus on the first OTP input |
| value | string | `''` | Default value |
| wrapperClass | string | `styles.otpWrapper` | `Class` appended to the whole wrapper |
| inputWrapperClass | string | `styles.otpInputWrapper` | `Class` appended to the wrapper of inputs |
| inputClass | string | `styles.otpInput` | `Class` appended to the inputs |
| errorMessageClass | string | `styles.errorMessage` | `Class` appended to the error message |

## Development

To run the development server:
```bash
npm start # runs rollup with watch flag
```

To run the example:
```bash
cd example
npm start
```

## Contributing
Feel free to open [issues](https://github.com/onefifteen-z/react-input-otp/issues/new/choose) and [pull requests](https://github.com/onefifteen-z/react-input-otp/pulls).


## License
![NPM](https://img.shields.io/npm/l/@onefifteen-z/react-input-otp)

MIT © [onefifteen-z](https://github.com/onefifteen-z)
