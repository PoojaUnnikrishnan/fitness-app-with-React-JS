import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { Typography } from '@mui/material';
import Exercisecard from './Exercisecard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScorllbar = ({data, bodyPart,setBodypart,isBodyparts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            data.map((item) => <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m='0 40px'
            >
               {isBodyparts ? <BodyPart item={item}
               bodyPart={bodyPart}
               setBodypart={setBodypart}
               />: <Exercisecard exercise={item}/>}
            </Box>)
        }
    </ScrollMenu>
  )
}

export default HorizontalScorllbar