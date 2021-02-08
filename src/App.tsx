import React, { useState } from 'react';
import styles from './App.module.css';
import OnOff from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import Rating from './components/Rating/Rating';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';

type propsType = {
  title: string
}

const information: Array<string> = [ 'Info 1', 'Info 2', 'Info 3', 'Info 4' ];

function App( props: propsType ) {
  const [ rating, setRating ] = useState<number>( 1 );
  const [ on, setOn ] = useState( false );
  const [ collapsed, setCollapsed ] = useState( false );

  return (
      <div className="App">
        <div className={ styles.app_title }>
          { props.title }
        </div>
        <OnOff
            on={ on }
            setOn={ setOn }/>
        <UncontrolledOnOff/>
        <Accordion
            name={ 'Information' }
            items={ information }
            collapsed={ collapsed }
            setCollapsed={ setCollapsed }/>
        <UncontrolledAccordion
            name={ 'Props' }
            items={ information }/>
        <Rating
            maxRating={ 8 }
            rating={ rating }
            setRating={ setRating }/>
        <UncontrolledRating/>
      </div>
  );
}

export default App;
