import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import map from 'lodash/map';

import { Header, Filter, Container, Skeleton, ItemsContainer } from './styles';

// Interfaces
interface IConfigItem {
  name: string;
  field: string;
  width: number;
}

interface ITableProps {
  loading?: boolean;
  list: any[];
  config: IConfigItem[];
  renderItem: (listItem: any, config: IConfigItem[], key: any) => ReactElement;
}

const skeletonArray = new Array(10);

export const Table: React.FC<ITableProps> = ({
  list,
  config,
  loading,
  renderItem: RenderComponent,
}) => {
  const [sortedList, updateList] = useState<any[]>(list);
  const [filteredBy, setFilteredBy] = useState<string | null>(null);

  const handleFilter = useCallback((byField, newList) => {
    setFilteredBy(byField);
    updateList(newList);
  }, []);

  useEffect(() => {
    if (sortedList.length === 0) {
      updateList(list);
    }
  }, [list]);

  return (
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
      {loading ? (
        map(skeletonArray, () => <Skeleton />)
      ) : (
        <ItemsContainer>
          {map(sortedList, (item) => (
            <RenderComponent key={item.id} item={item} config={config} />
          ))}
        </ItemsContainer>
      )}
    </Container>
  );
};
