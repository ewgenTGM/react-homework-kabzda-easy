import React, { useState } from 'react';
import styles from './Accordion.module.css';

type PropsType = {
  name: string
  items: Array<string>
};

const Accordion = ( props: PropsType ) => {

  const [ collapsed, setCollapsed ] = useState<boolean>( false );

  const accordionContent = (
      <>
        { props.items.map( ( item, index ) => <li
            key={ index }
            className={ styles.li }>{ item }</li> ) }
      </>
  );

  return (
      <div className={styles.accordion}>
        <div className={styles.accordion_name} onClick={ () => setCollapsed( !collapsed ) }>{ `${ props.name } ${ collapsed ? '↓' : '↑' }` }</div>
        <ul className={ styles.ul }>
          { !collapsed && accordionContent }
        </ul>
      </div>
  );
};

export default Accordion;