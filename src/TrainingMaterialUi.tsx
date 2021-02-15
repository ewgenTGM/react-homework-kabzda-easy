import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Icon } from '@material-ui/core';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

type PropsType = {};
const TrainingMaterialUi = ( props: PropsType ) => {
  return (
      <>
        <div>
          <Accordion>
            <AccordionSummary>
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Button
              disableElevation
              variant={ 'contained' }
              color={ 'primary' }
              onClick={ () => alert( 'Pressed!' ) }>
            <AddToQueueIcon fontSize={'large'}/>
          </Button>
        </div>
      </>
  );
};

export default TrainingMaterialUi;