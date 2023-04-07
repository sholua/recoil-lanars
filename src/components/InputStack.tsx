import { FC, ReactNode } from 'react';
import { Box, HStack, Icon } from '@chakra-ui/react';
import { ArrowRight } from 'react-feather';

interface InputStackProps {
  children: ReactNode;
}

const InputStack: FC<InputStackProps> = ({ children }) => {
  return (
    <HStack
      width="300px"
      mb={4}
      spacing={4}
      divider={
        <Box
          border="0 !important"
          height="40px"
          alignItems="center"
          display="flex"
        >
          <Icon as={ArrowRight} />
        </Box>
      }
      align="flex-end"
    >
      {children}
    </HStack>
  );
};

export default InputStack;
