import map from 'lodash/map';

import { parseTimeToText } from 'utils/parseTimeToText';

import {
  Container,
  Image,
  InfoContainer,
  Row,
  Value,
  Label,
  Switcher,
} from './styles';

// Interface
import { ITemplate } from 'types/templates';
import { format } from 'date-fns';
import { useCallback } from 'react';
import { templateServices } from 'modules/templates/services';

const Template = ({
  template,
  loadTemplate,
}: {
  template: ITemplate;
  loadTemplate: () => void;
}) => {
  const handleChangeEnabled = useCallback(
    async ({ target: { checked } }) => {
      try {
        if (checked) {
          await templateServices.subscribe(template.id);
        } else {
          await templateServices.unsubscribe(template.id);
        }
        await loadTemplate();
      } catch (e) {
        console.log(e);
      }
    },
    [template, loadTemplate]
  );
  return (
    <Container>
      <Image src={template.image} />
      <InfoContainer>
        <Row>
          <Label>Url</Label>
          <Value>{template.url}</Value>
        </Row>
        <Row>
          <Label>Refresh Time</Label>
          <Value>{parseTimeToText(template.parseTime)}</Value>
        </Row>
        <Row>
          <Label>Fields</Label>
          <Value>
            {map(template.selectorsData.selectors, (item) => item.title).join(
              ', '
            )}
          </Value>
        </Row>
        <Row>
          <Label>Created at</Label>
          <Value>{format(new Date(template.dateCreated), 'dd.MM.yyyy')}</Value>
        </Row>
        <Row>
          <Label mb={0}>{template.enabled ? 'Disable' : 'Enable'}</Label>
          <Switcher checked={template.enabled} onChange={handleChangeEnabled} />
        </Row>
      </InfoContainer>
    </Container>
  );
};

export { Template };
