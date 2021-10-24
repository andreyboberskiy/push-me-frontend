import React, { useEffect, useState } from 'react';

import { Container, MainInfoContainer, Row, StatsCard } from './styles';
import { useParams } from 'react-router-dom';
import { ITemplate } from 'types/templates';
import TemplateDetailsService from 'modules/TemplateDetails/services';
import { safely } from 'libs/axios/utils';
import { useDispatch, useSelector } from 'react-redux';
import { updateTemplatesLibrary } from 'store/libraries/actions';
import { getTemplatesLibrary } from 'store/libraries/selectors';

const TemplateDetails = () => {
  const dispatch = useDispatch();

  const templatesLibrary = useSelector(getTemplatesLibrary);

  const { id } = useParams<{ id: string }>();

  const [template, setTemplate] = useState<ITemplate | null>(
    templatesLibrary[id]
  );

  useEffect(() => {
    if (template) return;

    (async () => {
      await safely(async () => {
        const templateFromReq = await TemplateDetailsService.getTemplateById(
          id
        );

        setTemplate(templateFromReq);
        dispatch(updateTemplatesLibrary(templateFromReq));
      });
    })();
  }, []);

  return (
    <Container>
      <MainInfoContainer />
      <Row>
        <StatsCard />
      </Row>
    </Container>
  );
};

export default TemplateDetails;
