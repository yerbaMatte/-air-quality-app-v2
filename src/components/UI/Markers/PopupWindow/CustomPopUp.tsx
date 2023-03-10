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

  let date = new Date(station.time);

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  let dateString = date.toLocaleString('en-US', options);
  console.log(dateString);

  return (
    <>
      <Flex w='100%' flexDirection={'column'} m='-1'>
        <Box p='min-content' w='100%' bg='rgba(67, 78, 102, 0.131)'>
          <Heading size='sm'>{station.name}</Heading>
        </Box>
        <Box flex='1' bg={color}>
          AIR QUALITY NUMBER + SMILE + GREAT/NOT
        </Box>
        <Box flex='1'>
          <h2>updated </h2>
          <p>({dateString})</p>
        </Box>
        <Box flex='1'>DISPLAY HISTORICAL DATA</Box>
        <Spacer />
      </Flex>
    </>
  );
};
