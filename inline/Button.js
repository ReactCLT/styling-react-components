import React from 'react';

const color = '#00DDFF';
const accent = '#070709';

const styles = {
  background: accent,
  border: `0.1em solid ${color}`,
  borderRadius: '0.25em',
  color: color,
  fontFamily: 'Open Sans',
  fontSize: '1.5em',
  padding: '0.5em 1em',
  // hover ?
};

class Button extends React.Component {
  render() {
    return (
      <button style={styles}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
