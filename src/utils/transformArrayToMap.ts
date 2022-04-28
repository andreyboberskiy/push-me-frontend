import reduce from 'lodash/reduce';

const transformArrayToMap = (list, by) => {
  return reduce(
    list,
    (acc, item) => {
      acc[item[by]] = item;

      return acc;
    },
    {}
  );
};

export default transformArrayToMap;
