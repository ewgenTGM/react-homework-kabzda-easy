import React, { useState } from 'react';
import styles from './OnOff.module.css';


const UncontrolledOnOff = () => {
  const [ on, setOn ] = useState<boolean>( false );

  return (
      <div className={ styles.onOff }>
        <div
            className={ `${ styles.indicator } ${ on && styles.on }` }
            onClick={ () => setOn( true ) }>
          ON
        </div>
        <div
            className={ `${ styles.indicator } ${ !on && styles.off }` }
            onClick={ () => setOn( false ) }>
          OFF
        </div>
        <div className={ `${ styles.indicator } ${ styles.round_indicator } ${ on ? styles.on : styles.off }` }/>
      </div>
  );
};

export default UncontrolledOnOff;