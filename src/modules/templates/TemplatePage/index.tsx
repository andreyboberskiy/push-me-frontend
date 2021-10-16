import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useCallback, useMemo } from 'react';

import _useEffect from 'hooks/_useEffect';
import { useActions } from 'hooks/useActions';
import useTypedSelector from 'hooks/useTypedSelector';

import { getTemplatesMapSelector } from 'modules/templates/store/selectors';

import { loadTemplateAction } from 'modules/templates/store/actions';

import {
  UnAuthContentContainer,
  PageTitle,
  Template,
  RowBetween,
  StatusCircle,
  StatusText,
} from './styles';
import { getUserSelector } from 'modules/auth/store/selectors';

export const TemplatePage = () => {
  const actions = useActions({ loadTemplateAction });

  const loadingTemplate = useTypedSelector((state) => state.templates.loading);
  const templatesMap = useSelector(getTemplatesMapSelector);

  const user = useSelector(getUserSelector);

  const { id } = useParams<{ id?: string }>();

  const loadTemplate = useCallback(() => {
    actions.loadTemplateAction(Number(id));
  }, [id, actions]);

  _useEffect(() => {
    loadTemplate();
  }, []);

  const template = templatesMap[id];

  return (
    <UnAuthContentContainer withNavbar>
      {!loadingTemplate && template ? (
        <>
          <RowBetween>
            <PageTitle>{template.title}</PageTitle>
            <RowBetween>
              <StatusCircle active={template.enabled} />
              <StatusText>
                {template.enabled ? 'Enabled' : 'Disabled'}
              </StatusText>
            </RowBetween>
          </RowBetween>
          <Template template={template} loadTemplate={loadTemplate} />
        </>
      ) : (
        'Loading...'
      )}
    </UnAuthContentContainer>
  );
};

export default TemplatePage;
