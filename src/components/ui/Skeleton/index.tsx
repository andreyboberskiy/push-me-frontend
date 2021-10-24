import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

import { Box } from 'components/ui/Box';
import useStyleProperties from 'hooks/useStyleProperties';

// Interface
interface IProps extends IContentLoaderProps {
  variant: 'rect' | 'circle';
}

export const Skeleton = memo<IProps>(({ variant, className, ...props }) => {
  const renderInner = () => {
    switch (variant) {
      case 'rect': {
        return <rect x="0" y="0" rx="15" ry="15" width="100%" height="100%" />;
      }
      default: {
        return <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />;
      }
    }
  };

  const [styles, otherProps] = useStyleProperties(props);
  return (
    <Box {...styles} className={className}>
      <ContentLoader
        speed={2}
        interval={0.3}
        width="100%"
        height="40px"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...otherProps}
      >
        {renderInner()}
      </ContentLoader>
    </Box>
  );
});
