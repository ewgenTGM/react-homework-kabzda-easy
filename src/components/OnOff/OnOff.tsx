import React from 'react';
import styles from './OnOff.module.css';

type propsType = {
  on: boolean
  setOn: ( on: boolean ) => void
};

const OnOff = ( props: propsType ) => {

  return (
      <div className={ styles.onOff }>
        <div
            className={ `${ styles.indicator } ${ props.on && styles.on }` }
            onClick={ () => props.setOn( true ) }>
          ON
        </div>
        <div
            className={ `${ styles.indicator } ${ !props.on && styles.off }` }
            onClick={ () => props.setOn( false ) }>
          OFF
        </div>
        <div className={ `${ styles.indicator } ${ styles.round_indicator } ${ props.on ? styles.on : styles.off }` }/>
      </div>
  );
};

export default OnOff;