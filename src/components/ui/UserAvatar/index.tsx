import React from 'react';

import { Image, Container, Placeholder } from './styles';

// ts
import { IUser } from 'types/common';

interface IProps {
  user: IUser;
  className?: string;
  size?: number;
}

export const UserAvatar: React.FC<IProps> = ({
  user,
  className,
  size = 20,
  ...props
}) => {
  if (!user) return null;

  const placeholder = `${user.name[0]}${user.surname[0]}`;

  return user.avatar ? (
    <Image src={user.avatar} size={size} {...props} />
  ) : (
    <Container className={className} size={size} {...props}>
      <Placeholder size={size}>{placeholder}</Placeholder>
    </Container>
  );
};
