import React from 'react';

import { Container, Status, TextValue, ExcludeButton } from './styles';

// Interface
interface IExcludeTextProps {
  excluded: boolean;
  toggleValue: () => void;
  text: string;
  same?: boolean;
}

export const ExcludeText: React.FC<IExcludeTextProps> = ({
  excluded,
  toggleValue,
  text,
  same,
}) => {
  return (
    <Container>
      <Status excluded={excluded} />
      <TextValue same={same}>{text}</TextValue>
      <ExcludeButton onClick={toggleValue}>
        {excluded ? 'Include' : 'Exclude'}
      </ExcludeButton>
    </Container>
  );
};
