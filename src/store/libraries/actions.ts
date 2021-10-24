import { TEMPLATES_LIBRARY_UPDATE } from 'store/libraries/constants';
import transformArrayToMap from 'utils/transformArrayToMap';

export const updateTemplatesLibrary = (templates) => {
  let payload = {};
  if (Array.isArray(templates)) {
    payload = transformArrayToMap(templates, 'id');
  } else {
    payload = { [templates.id]: templates };
  }

  return { type: TEMPLATES_LIBRARY_UPDATE, payload };
};
