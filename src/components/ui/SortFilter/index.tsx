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
type TSortType = 'date';

interface ISortFilterProps {
  name: string;
  field: string;
  width: number;
  onFilter: (field: string, newList: any[]) => void;
  list: any[];
  active: boolean;
  sortType?: TSortType;
}

const toggleSort = ({ a, b, field, sortType }, sortTo) => {
  const aValue = a[field];
  const bValue = b[field];

  if (sortType === 'date') {
    if (sortTo === 'up') {
      return new Date(aValue) < new Date(bValue) ? -1 : 1;
    }
    return new Date(aValue) > new Date(bValue) ? -1 : 1;
  }

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
  onFilter,
  list,
  active,
  sortType,
  ...props
}) => {
  const [sorted, setSorted] = useState<'up' | 'down' | false>(false);

  const handleSort = useCallback(() => {
    const copyList = [...list];

    if (sorted === 'up' || !sorted) {
      copyList.sort((a, b) => toggleSort({ a, b, field, sortType }, 'down'));
      setSorted('down');
    } else {
      copyList.sort((a, b) => toggleSort({ a, b, field, sortType }, 'up'));
      setSorted('up');
    }

    onFilter(field, copyList);
  }, [sortType, field, onFilter, sorted, list]);

  return (
    <Container onClick={handleSort} {...props}>
      <InnerContainer>
        <Name>{name}</Name>
        <ArrowContainer>
          <ArrowUp $active={active && sorted === 'up'} />
          <ArrowDown $active={active && sorted === 'down'} />
        </ArrowContainer>
      </InnerContainer>
    </Container>
  );
};
