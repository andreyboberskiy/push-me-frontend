import { useMemo } from 'react';
import { format } from 'date-fns';

import { RowBetween, TabButton, Label, Value } from './styles';

const totalTemplates = 100;
const totalNotifications = 4322;
const enabledTemplates = 3;
const lastNotified = 1694324234323;
export const Statistic = () => {
  const statsInfo = useMemo(() => {
    return [
      {
        value: totalTemplates,
        label: 'Total templates',
        icon: 'table',
      },
      {
        value: totalNotifications,
        label: 'Total Notifications',
        icon: 'bell',
      },
      {
        value: enabledTemplates,
        label: 'Enabled templates',
        icon: 'bell',
      },
      {
        value: format(new Date(lastNotified), 'dd.MM.yyyy'),
        label: 'Last notified at',
        icon: 'bell',
      },
    ];
  }, []);
  return (
    <RowBetween>
      {statsInfo.map((item) => (
        <TabButton active name={item.icon}>
          <>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </>
        </TabButton>
      ))}
    </RowBetween>
  );
};
