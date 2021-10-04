import React from 'react';

import { Image, Container, Placeholder } from './styles';

// ts
import { IUser } from 'types/common';

interface IProps {
  user: IUser;
  className?: string;
}

export const UserAvatar: React.FC<IProps> = ({ user, className }) => {
  const placeholder = `${user.name[0]}${user.surname[0]}`;

  return user.image ? (
    <Image src={user.image} />
  ) : (
    <Container className={className}>
      <Placeholder>{placeholder}</Placeholder>
    </Container>
  );
};
