import moment from 'moment';
import {
  Flex,
  Spacer,
  ButtonGroup,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react';

export const CustomPopUp = ({
  station,
  color,
}: {
  station: { time: string; name: string };
  color: string;
}) => {
  let updateTime = moment(station.time);
  let now = moment();
  const dist = now.diff(updateTime, 'minutes');
  let dateString = moment().format('dddd, MMMM Do YYYY, h:mm a');
  console.log(dist);

  return (
    <>
      <Flex w='100%' flexDirection={'column'} m='-1'>
        <Box p='min-content' w='100%' bg='rgba(67, 78, 102, 0.131)'>
          <Heading size='sm'>{station.name}</Heading>
        </Box>
        <Box bg={color}>AIR QUALITY NUMBER + SMILE + GREAT/NOT</Box>
        <Box textAlign={'center'}>
          <h2>updated {dist} minutes ago</h2>
          <p>({dateString})</p>
        </Box>
        <Box>DISPLAY HISTORICAL DATA</Box>
        <Spacer />
      </Flex>
    </>
  );
};
