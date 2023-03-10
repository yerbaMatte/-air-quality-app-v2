import {
  Flex,
  Spacer,
  ButtonGroup,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react';

export const CustomPopUp = ({ station }) => {
  console.log(station);
  return (
    <>
      <Flex w='100%' flexDirection={'column'} bg='red'>
        <Box p='min-content' w='100%' bg=''>
          <Heading size='sm'>{station.name}</Heading>
        </Box>
        <Box flex='1'>AIR QUALITY NUMBER + SMILE + GREAT/NOT</Box>
        <Box flex='1'>WHEN DATA WAS UPDATED</Box>
        <Box flex='1'>DISPLAY HISTORICAL DATA</Box>
        <Spacer />
      </Flex>
    </>
  );
};
