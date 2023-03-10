import moment from 'moment';
import {
  Flex,
  Spacer,
  ButtonGroup,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react';

export const CustomPopUp = ({ station, color }) => {
  console.log(station);

  let date = moment(station.time);
  let now = moment();
  const dist = now.diff(date, 'minutes');
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  let dateString = date.toLocaleString('en-US', options);
  console.log(dist);

  return (
    <>
      <Flex w='100%' flexDirection={'column'} m='-1'>
        <Box p='min-content' w='100%' bg='rgba(67, 78, 102, 0.131)'>
          <Heading size='sm'>{station.name}</Heading>
        </Box>
        <Box bg={color}>AIR QUALITY NUMBER + SMILE + GREAT/NOT</Box>
        <Box textAlign={'center'}>
          <h2>updated </h2>
          <p>({dateString})</p>
        </Box>
        <Box>DISPLAY HISTORICAL DATA</Box>
        <Spacer />
      </Flex>
    </>
  );
};
