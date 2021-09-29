import React, { useCallback, useState } from 'react';

import {
  Container,
  Name,
  ArrowContainer,
  ArrowUp,
  ArrowDown,
  InnerContainer,
} from './styles';

// Interface
interface ISortFilterProps {
  name: string;
  field: string;
  width: number;
  setList: (newList: any[]) => void;
  list: any[];
}

const toggleSort = ({ a, b, field }, sortTo) => {
  const aValue = a[field];
  const bValue = b[field];

  if (typeof aValue === 'number') {
    if (sortTo === 'up') {
      return aValue < bValue ? -1 : 1;
    }
    return aValue > bValue ? -1 : 1;
  }
  if (typeof aValue === 'string') {
    if (sortTo === 'up') {
      return aValue[0] < bValue[0] ? -1 : 1;
    }
    return aValue[0] > bValue[0] ? -1 : 1;
  }
  return -1;
};

export const SortFilter: React.FC<ISortFilterProps> = ({
  name,
  field,
  setList,
  list,
  ...props
}) => {
  const [sorted, setSorted] = useState<'up' | 'down' | false>(false);

  const handleSort = useCallback(() => {
    const copyList = [...list];

    if (sorted === 'up' || !sorted) {
      copyList.sort((a, b) => toggleSort({ a, b, field }, 'down'));
      setSorted('down');
    } else {
      copyList.sort((a, b) => toggleSort({ a, b, field }, 'up'));
      setSorted('up');
    }

    setList(copyList);
  }, [field, setList, sorted, list]);

  return (
    <Container onClick={handleSort} {...props}>
      <InnerContainer>
        <Name>{name}</Name>
        <ArrowContainer>
          <ArrowUp active={sorted === 'up'} />
          <ArrowDown active={sorted === 'down'} />
        </ArrowContainer>
      </InnerContainer>
    </Container>
  );
};
