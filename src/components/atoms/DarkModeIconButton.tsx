import { BsMoon, BsSun } from 'react-icons/bs'
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function DarkModeIconButton({
  ...rest
}: React.ComponentPropsWithoutRef<typeof IconButton>) {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={isDark ? <BsMoon /> : <BsSun />}
      aria-label={'dark-mode-toggle'}
      {...rest}
    />
  );
}

export default DarkModeIconButton;
