import React from 'react';
import UncontrolledAccordion from './UncontrolledAccordion';


export default {
  title: 'Uncontrolled Accordion',
  component: UncontrolledAccordion
};
const information: Array<string> = [ 'Info 1', 'Info 2', 'Info 3', 'Info 4' ];
export const Default = () => <UncontrolledAccordion
    items={ information }
    name={ 'Default accordion' }/>;