import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { safely } from 'libs/axios/utils';
import TemplateDetailsService from 'modules/TemplateDetails/services';
import { updateTemplatesLibrary } from 'store/libraries/actions';
import { getTemplatesLibrary } from 'store/libraries/selectors';
import { parseTimeToText } from 'utils/parseTimeToText';

import { ITemplate } from 'types/templates';

import {
  Container,
  MainInfoContainer,
  Row,
  StatsCard,
  Column,
  TemplateAvatar,
  InfoLabel,
  InfoValue,
  StatusCircle,
  Switcher,
  SwitcherContainer,
  SwitcherLabel,
} from './styles';

const InfoItem = ({ label, value }) => {
  return (
    <Row>
      <InfoLabel>{label}</InfoLabel>
      {typeof value === 'boolean' ? (
        <StatusCircle active={value} />
      ) : (
        <InfoValue
          as={label === 'Website' ? 'a' : 'span'}
          href={value}
          target="_blank"
          rel="noreferrer noopener"
        >
          {value}
        </InfoValue>
      )}
    </Row>
  );
};

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

  const handleToggle = useCallback(
    async (_, checked) => {
      await safely(async () => {
        const newTemplate = await TemplateDetailsService.turnSubscribe(
          id,
          checked
        );
        setTemplate(newTemplate);
        dispatch(updateTemplatesLibrary(newTemplate));
      });
    },
    [id]
  );

  const handleChangeImage = useCallback(
    async (file) => {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('id', id);

      await safely(() => {
        return TemplateDetailsService.updateAvatar(formData);
      });
    },
    [id]
  );

  return !template ? (
    <InfoLabel>Loading...</InfoLabel>
  ) : (
    <Container>
      <MainInfoContainer>
        <Column>
          <TemplateAvatar src={template.image} onChange={handleChangeImage} />
          <SwitcherContainer>
            <SwitcherLabel>
              {template.working ? 'Turn off' : 'Turn in'}
            </SwitcherLabel>
            <Switcher checked={template.enabled} onChange={handleToggle} />
          </SwitcherContainer>
        </Column>
        <Column ml={20}>
          <InfoItem label="Title" value={template.title} />
          <InfoItem label="Website" value={template.url} />
          <InfoItem
            label="Refresh time"
            value={parseTimeToText(template.parseTime)}
          />
          <InfoItem label="Enabled" value={template.enabled} />
          <InfoItem
            label="Created at"
            value={format(new Date(template.dateCreated), 'dd.MM.yyyy')}
          />
          <InfoItem
            label="Subscribed people"
            value={template.subscribers.length}
          />
        </Column>
      </MainInfoContainer>
      <Row>
        <StatsCard />
      </Row>
    </Container>
  );
};

export default TemplateDetails;
