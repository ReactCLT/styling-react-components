import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const color = '#00DDFF';
const accent = '#070709';

const styles = StyleSheet.create({
  base: {
    background: accent,
    border: `0.1em solid ${color}`,
    borderRadius: '0.25em',
    color: color,
    fontFamily: 'Open Sans',
    fontSize: '1.5em',
    padding: '0.5em 1em',
    ':hover': {
      background: color,
      color: accent
    }
  }
});

class Button extends React.Component {
  render() {
    return (
      <button className={css(styles.base)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
