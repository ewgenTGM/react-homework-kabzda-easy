import React from 'react';
import styles from './App.module.css';
import OnOff from "./components/OnOff";

type propsType = {
    title: string
}

function App(props: propsType) {
    return (
        <div className="App">
            <div className={styles.app_title}>
                {props.title}
            </div>
            <OnOff on={true}/>
            <OnOff on={false}/>
        </div>
    );
}

export default App;
