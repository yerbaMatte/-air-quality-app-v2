import moment from 'moment';
import { Flex, Spacer, Heading, Box, Text } from '@chakra-ui/react';

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
      <Flex w='100%' flexDirection={'column'} m='-1'>
        <Box w='100%' p='1'>
          <Heading as='h2' size='sm'>
            {station.name}
          </Heading>
        </Box>
        <Box
          bg={colorAndComment.color}
          p='1'
          textAlign={'center'}
          fontSize='lg'
        >
          <Flex
            gap='7'
            justify='center'
            align='center'
            color={colorAndComment.comment === 'Moderate' ? '#000' : '#FFF'}
          >
            <Text>
              {aq} - {colorAndComment.comment}
            </Text>
            <Text fontSize='30px'>{colorAndComment.emoji}</Text>
          </Flex>
        </Box>
        <Box textAlign={'center'}>
          <Text as='i' fontSize='xs'>
            updated {dist} minutes ago
          </Text>
          <Text>({dateString})</Text>
        </Box>
        <Box>DISPLAY HISTORICAL DATA</Box>
        <Spacer />
      </Flex>
    </>
  );
};
