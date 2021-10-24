import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import _useEffect from 'hooks/_useEffect';

import {
  myTemplateList,
  myTemplatesLoading,
  myTemplatesSearchParams,
} from 'modules/MyTemplates/store/selectors';

import { getMyTemplateListAction } from 'modules/MyTemplates/store/actions';

import { Container, TemplatesTable } from './styles';

const MyTemplates = () => {
  const dispatch = useDispatch();

  const listLoading = useSelector(myTemplatesLoading);
  const templatesList = useSelector(myTemplateList);
  const searchParams = useSelector(myTemplatesSearchParams);

  _useEffect(() => {
    if (templatesList.length === 0 && !listLoading) {
      dispatch(getMyTemplateListAction(searchParams, true));
    }
  }, []);

  return (
    <Container>
      <TemplatesTable templates={templatesList} loading={listLoading} />
    </Container>
  );
};

export default MyTemplates;
