import { useRef } from 'react';

import useFlagManager from 'hooks/useFlagManager';

import { Container, Badge, Icon, Popover } from './styles';

export const Notifications = () => {
  const popover = useFlagManager(false);

  const iconRef = useRef();
  return (
    <>
      <Container ref={iconRef} onClick={popover.turnIn}>
        <Badge badgeContent={100} size={18} max={99}>
          <Icon name="bell" size="md" />
        </Badge>
      </Container>
      <Popover
        open={popover.state}
        anchorEl={iconRef.current}
        onClose={popover.turnOff}
      >
        Закрыл быстро
      </Popover>
    </>
  );
};
