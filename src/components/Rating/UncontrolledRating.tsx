import React, { useState } from 'react';
import styles from './Rating.module.css';

const Rating = () => {
  const [ rating, setRating ] = useState<number>( 0 );
  const [ maxRating, setMaxRating ] = useState<number>( 10 );
  const stars: Array<JSX.Element> = [];
  for ( let i = 0; i < maxRating; i++ ) {
    stars.push( <Star
        selected={ rating > i }
        key={ i }
        onClick={ () => setRating( i + 1 ) }/>
    );
  }
  return (
      <div className={ styles.rating }>
        { stars }
      </div>
  );
};

type StarPropsType = {
  selected: boolean
  onClick: () => void
};

const Star = ( props: StarPropsType ) => {
      return (
          <>
            { <span onClick={ props.onClick }>{ props.selected ? '★' : '☆' }</span> }
          </>
      );
    }
;

export default Rating;