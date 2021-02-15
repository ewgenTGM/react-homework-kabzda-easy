import React, { useState } from 'react';
import Rating from './Rating';
import { action } from '@storybook/addon-actions';


export default {
  title: 'Rating',
  component: Rating
};

export const Default = () => <Rating
    maxRating={ 8 }
    rating={ 4 }
    setRating={ () => {} }/>;

export const ChangeRating = () => {
  const [ rating, setRating ] = useState<number>( 3 );
  return <Rating
      maxRating={ 10 }
      rating={ rating }
      setRating={ setRating }/>;
};