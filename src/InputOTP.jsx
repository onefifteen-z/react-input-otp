import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KEY } from 'constants';
import styles from './styles.css';

class InputOTP extends Component {
  constructor(props) {
    super(props);
    this.doms = [];
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus) this.doms[0].focus();
  }

  render() {
    const {
      otpLength,
      numberOnly,
      pattern,
      disabled,
      error,
      errorMessage,
      onChange,
      autoFocus,
      value,
      ...rest
    } = this.props;

    const inputFilter = pattern || (numberOnly ? /[^0-9]/gi : /[^0-9a-zA-Z]/gi);

    const focusOn = i => {
      if (this.doms[i]) this.doms[i].focus();
    };

    const handleChange = (e, i) => {
      e.target.value = e.target.value.replace(inputFilter, '');
      if (e.target.value.length > 1)
        e.target.value = e.target.value.slice(0, 1);
      if (e.target.value !== '') focusOn(i + 1);
      const otpCode = this.doms.map(d => d.value).join('');
      onChange(otpCode);
    };

    const handleKeyDown = (e, i) => {
      if (e.keyCode === KEY.backspace && e.target.value === '') focusOn(i - 1);
      if (e.keyCode === KEY.left) focusOn(i - 1);
      if (e.keyCode === KEY.right) focusOn(i + 1);
    };

    const handlePaste = (e, i) => {
      const pastedString = e.clipboardData
        .getData('text/plain')
        .replace(inputFilter, '')
        .slice(0, otpLength - i);

      const pastedData = pastedString.split('');

      this.doms[otpLength - 1].focus();
      for (let pos = i; pos < otpLength; pos += 1) {
        this.doms[pos].value = pastedData.shift();
      }
      const otpCode = this.doms.map(d => d.value).join('');
      onChange(otpCode);
    };

    const codeBoxItems = [...Array(otpLength).keys()].map(i => (
      <div
        className={`${styles.otpInputWrapper} ${error ? styles.error : ''}`}
        key={i}
      >
        <input
          type="tel"
          autoComplete="false"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          ref={dom => {
            this.doms[i] = dom;
          }}
          onFocus={e => e.target.select()}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          onPaste={e => handlePaste(e, i)}
          disabled={disabled}
          defaultValue={value && value[i]}
          {...rest}
        />
      </div>
    ));

    return (
      <div className={styles.wrapper}>
        <div className={styles.otpWrapper}>{codeBoxItems}</div>
        {error && errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
}

InputOTP.propTypes = {
  value: PropTypes.string,
  otpLength: PropTypes.number,
  numberOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  pattern: PropTypes.instanceOf(RegExp),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

InputOTP.defaultProps = {
  value: '',
  otpLength: 6,
  numberOnly: false,
  autoFocus: false,
  pattern: null,
  disabled: false,
  error: false,
  errorMessage: null,
  onChange: () => {},
};

export default InputOTP;
