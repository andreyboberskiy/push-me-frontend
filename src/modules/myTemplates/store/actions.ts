import templateService from 'modules/myTemplates/service';
import { TEMPLATES_SET_LIST } from 'modules/myTemplates/store/constants';

export const setListAction = (list) => ({
  type: TEMPLATES_SET_LIST,
  payload: list,
});

export const getListAction = () => async (dispatch) => {
  try {
    const { list } = await templateService.getList({
      sort: 'newest',
      offset: 0,
    });
    console.log(list);
    dispatch(setListAction(list));
  } catch (e) {
    console.log(e);
  }
};
