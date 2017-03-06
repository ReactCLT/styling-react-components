import React from 'react';
import styles from './Button.css';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.base}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
