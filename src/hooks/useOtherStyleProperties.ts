import { useMemo } from 'react';

const stylePropsKeys: string[] = [
  'mt',
  'ml',
  'mr',
  'mb',
  'mx',
  'my',
  'py',
  'px',
  'pt',
  'pb',
  'pl',
  'pr',
  'p',
  'm',
];

const useOtherStyleProperties = (props) => {
  const [styleProps, otherProps] = useMemo(() => {
    const style = {};
    const other = {};

    Object.keys(props).forEach((key) => {
      if (stylePropsKeys.includes(key)) {
        style[key] = props[key];
      } else {
        other[key] = props[key];
      }
    });

    return [style, other];
  }, [props]);

  return [styleProps, otherProps];
};

export default useOtherStyleProperties;
