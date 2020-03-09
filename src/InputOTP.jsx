import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const KEY = {
  delete: 8,
  left: 37,
  right: 39,
};

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
    } = this.props;

    const focusOn = i => {
      if (this.doms[i]) this.doms[i].focus();
    };

    const handleChange = (e, i) => {
      e.target.value = e.target.value.replace(
        pattern || (numberOnly ? /[^0-9]/gi : /[^0-9a-zA-Z]/gi),
        '',
      );
      if (e.target.value !== '') focusOn(i + 1);
      const otpCode = this.doms.map(d => d.value).join('');
      onChange(otpCode);
    };

    const handleKeyDown = (e, i) => {
      if (e.keyCode === KEY.delete && e.target.value === '') focusOn(i - 1);
      if (e.keyCode === KEY.left) focusOn(i - 1);
      if (e.keyCode === KEY.right && e.target.value !== '') focusOn(i + 1);
    };

    const codeBoxItems = [...Array(otpLength).keys()].map(i => (
      <div
        className={`${styles.otpInputWrapper} ${error ? styles.error : ''}`}
        key={i}
      >
        <input
          type="tel"
          maxLength="1"
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
          disabled={disabled}
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
