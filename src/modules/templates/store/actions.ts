import templateService from 'modules/templates/service';

export const getListAction = () => async (dispatch) => {
  try {
    const list = await templateService.getList({ sort: 'newest', offset: 0 });

    console.log({ list });
  } catch (e) {
    console.log(e);
  }
};
