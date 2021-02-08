import React from 'react';
import styles from './Accordion.module.css';

type PropsType = {
  name: string
  items: Array<string>
  collapsed: boolean
  setCollapsed: ( collapsed: boolean ) => void
};
const Accordion = ( props: PropsType ) => {

  const accordionContent = (
      <>
        { props.items.map( ( item, index ) => <li
            key={ index }
            className={ styles.li }>{ item }</li> ) }
      </>
  );

  return (
      <div className={ styles.accordion }>
        <div
            className={ styles.accordion_name }
            onClick={ () => props.setCollapsed( !props.collapsed ) }>{ `${ props.name } ${ props.collapsed ? '↓' : '↑' }` }</div>
        <ul className={ styles.ul }>
          { !props.collapsed && accordionContent }
        </ul>
      </div>
  );
};

export default Accordion;