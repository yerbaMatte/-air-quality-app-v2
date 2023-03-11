import moment from 'moment';
import { Flex, Spacer, Heading, Box, Text } from '@chakra-ui/react';
import '../../../Map/Map.css';

export const CustomPopUp = ({
  station,
  colorAndComment,
  aq,
}: {
  station: { time: string; name: string };
  colorAndComment: { color: string; comment: string; emoji: string };
  aq: number;
}) => {
  let updateTime = moment(station.time);
  let now = moment();
  const dist = now.diff(updateTime, 'minutes');
  let dateString = moment().format('dddd, MMMM Do YYYY, h:mm a');
  console.log(dist);

  return (
    <>
      <Flex w='100%' flexDirection='column' m='-0.5' gap={1.5}>
        <Box w='100%' p='1'>
          <Flex justify='space-between' align='center' m='-0'>
            <Heading as='h2' fontSize='16px' color='#343434' bg='#fffffff2'>
              {station.name}
            </Heading>
            <Text p={1} fontSize='30px'>
              {colorAndComment.emoji}
            </Text>
          </Flex>
        </Box>
        <Box
          bg={colorAndComment.color}
          p='1'
          textAlign='center'
          fontSize='lg'
          className='custom-bar'
        >
          <Flex
            justify='center'
            align='center'
            color={
              colorAndComment.comment === 'Moderate' ? '#000000e0' : '#FFF'
            }
            p='1'
          >
            <Text>
              {aq} - {colorAndComment.comment}
            </Text>
          </Flex>
        </Box>
        <Box textAlign='center' w='100%'>
          <Text as='i' fontSize='s'>
            <Text color='#707070' as='span'>
              updated
            </Text>{' '}
            {dist} minutes ago
          </Text>
          <Text fontSize='xs' whiteSpace='nowrap' color='#707070'>
            ({dateString})
          </Text>
        </Box>
        {/* <Box>DISPLAY HISTORICAL DATA</Box> */}
      </Flex>
    </>
  );
};
