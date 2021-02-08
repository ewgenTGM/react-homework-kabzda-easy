import React from 'react';
import styles from './Rating.module.css';

type PropsType = {
  maxRating: number
  rating: number
  setRating: ( rating: number ) => void
};


const Rating = ( props: PropsType ) => {
  if ( props.maxRating < 0 || props.maxRating > 10 || props.rating < 0 || props.rating > props.maxRating )
    return <span className={ styles.badRating }>Bad initial rating values</span>;
  const stars: Array<JSX.Element> = [];
  for ( let i = 0; i < props.maxRating; i++ ) {
    stars.push( <Star
        selected={ props.rating > i }
        key={ i }
        onClick={ () => props.setRating( i + 1 ) }/>
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