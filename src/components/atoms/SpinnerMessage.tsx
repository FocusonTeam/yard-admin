import { Spinner } from '@chakra-ui/react';
import React from 'react';

export const SpinnerMessage = ({ text }: { text: string }) => {
  return (
    <div>
      <div>
        <Spinner size="XL" />
      </div>
      <div>{text}</div>
    </div>
  );
}