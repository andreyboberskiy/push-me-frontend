import React, { useCallback, useRef } from 'react';

import { errorToast } from 'libs/toast/functions';

import { Image, Container, Placeholder, Overlay, OverlayText } from './styles';

interface IProps {
  withChange?: boolean;
  size?: number;
  placeholder?: string;
  src?: string;
  onChange?: (file: any) => void;
}

const supportedFormats = ['image/png', 'image/jpg'];

export const Avatar: React.FC<IProps> = ({
  size = 20,
  src,
  placeholder,
  withChange,
  onChange,
  ...props
}) => {
  const inputFile = useRef(null);

  const handleOpenImageLoad = useCallback(() => {
    if (withChange && inputFile?.current?.click) {
      inputFile.current.click();
    }
  }, [withChange]);
  const handleChangeImage = useCallback(
    (event) => {
      const file = event.target.files[0];

      if (supportedFormats.includes(file.type)) {
        onChange(file);
      } else {
        errorToast('File format is not supported');
      }
    },
    [onChange]
  );

  return (
    <Container size={size} {...props} onClick={handleOpenImageLoad}>
      {src ? (
        <Image src={src} size={size} {...props} />
      ) : (
        <Placeholder size={size}>{placeholder || 'NO IMAGE'}</Placeholder>
      )}
      {withChange && (
        <Overlay size={size}>
          <OverlayText>{src ? 'Change' : 'Upload'} image</OverlayText>
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: 'none' }}
            onChange={handleChangeImage}
          />
        </Overlay>
      )}
    </Container>
  );
};
