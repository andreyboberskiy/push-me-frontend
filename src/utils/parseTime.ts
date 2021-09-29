import { IParseTimeValue } from 'components/ui/ParseTimePicker';

export const parseTimeToText = (time: IParseTimeValue) => {
  let text = '';

  if (time.s) {
    text += `Seconds: ${time.s}; `;
  }
  if (time.m) {
    text += `Minutes: ${time.m}; `;
  }
  if (time.h) {
    text += `Hours: ${time.h}; `;
  }
  if (time.d) {
    text += `Days: ${time.d}; `;
  }

  return text;
};
