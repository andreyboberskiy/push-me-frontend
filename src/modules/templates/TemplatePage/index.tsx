import { useParams } from 'react-router-dom';

import _useEffect from 'hooks/_useEffect';
import { useActions } from 'hooks/useActions';

import { loadTemplateAction } from 'modules/templates/store/actions';

import { ContentContainer, PageTitle } from './styles';

export const TemplatePage = () => {
  const actions = useActions({ loadTemplateAction });

  const { id } = useParams<{ id?: string }>();

  _useEffect(() => {
    actions.loadTemplateAction(Number(id));
  }, []);
  return (
    <ContentContainer withNavbar>
      <PageTitle>Kek</PageTitle>
    </ContentContainer>
  );
};

export default TemplatePage;
