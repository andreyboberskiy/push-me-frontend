import React, { ReactElement, useCallback, useState } from 'react';
import map from 'lodash/map';

import {
  TitleLabel,
  Header,
  Filter,
  Container,
  MainContainer,
  ItemsContainer,
} from './styles';

// Interfaces
interface IConfigItem {
  name: string;
  field: string;
  width: number;
}

interface ITableProps {
  list: any[];
  label?: string;
  config: IConfigItem[];
  renderItem: (listItem: any, config: IConfigItem[], key: any) => ReactElement;
}

export const Table: React.FC<ITableProps> = ({
  list,
  label,
  config,
  renderItem: RenderComponent,
}) => {
  const [sortedList, updateList] = useState<any[]>(list);
  const [filteredBy, setFilteredBy] = useState<string | null>(null);

  const handleFilter = useCallback((byField, newList) => {
    setFilteredBy(byField);
    updateList(newList);
  }, []);
  return (
    <MainContainer>
      {label && <TitleLabel>{label}</TitleLabel>}
      <Container>
        <Header>
          {map(config, (filter) => (
            <Filter
              key={filter.field}
              onFilter={handleFilter}
              list={sortedList}
              active={filteredBy === filter.field}
              {...filter}
            />
          ))}
        </Header>
        <ItemsContainer>
          {map(sortedList, (item) => (
            <RenderComponent key={item.id} item={item} config={config} />
          ))}
        </ItemsContainer>
      </Container>
    </MainContainer>
  );
};
