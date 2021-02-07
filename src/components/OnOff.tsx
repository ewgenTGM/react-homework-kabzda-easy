import React, {useState} from 'react';
import styles from './OnOff.module.css';

type propsType = {
    on: boolean
};

const OnOff = (props: propsType) => {
    const [on, setOn] = useState<boolean>(props.on);

    return (
        <div className={styles.onOff}>
            <div className={`${styles.indicator} ${on ? styles.on : ''}`}
                 onClick={()=>setOn(true)}>
                ON
            </div>
            <div className={`${styles.indicator} ${!on ? styles.off : ''}`}
                 onClick={()=>setOn(false)}>
                OFF
            </div>
            <div className={`${styles.indicator} ${styles.round_indicator} ${on ? styles.on : styles.off}`}/>
        </div>
    );
};

export default OnOff;