import React, { memo, useCallback, useEffect, useState } from 'react';
import map from 'lodash/map';

import templateService, {
  IParseByTextQueryResponse,
} from 'modules/createTemplate/service';

import useFlagManager from 'hooks/useFlagManager';

import {
  SubmitButton,
  Column,
  ApproveTitle,
  Title,
  StepContent,
  SameText,
  Modal,
  SmallTitle,
  RowCenter,
  ListWrapper,
  TitleInput,
  TitleContainer,
  Container,
  ExcludeText,
} from 'modules/createTemplate/CreateTemplatePage/components/AddSelectorStepsModal/styles';
import { filter, find } from 'lodash';

// Interface

interface IAddSelectorStepsModalProps {
  textForParse: string;
  onSubmit: (
    title: string,
    selector: string | null,
    parent: string | null,
    excludedSelectors: string[]
  ) => void;
  isOpen: boolean;
  onClose: () => void;
  url: string;
  approvedQueries: string[];
}

export const AddSelectorStepsModal: React.FC<IAddSelectorStepsModalProps> = ({
  textForParse,
  onSubmit,
  url,
  isOpen,
  approvedQueries,
  onClose,
  ...props
}) => {
  const [step, setStep] = useState('approve');
  const [title, setTitle] = useState('');
  const loading = useFlagManager(true);

  const [excludedSelectorsId, setExcludedSelectorsId] = useState<number[]>([]);

  const [response, setResponse] = useState<IParseByTextQueryResponse | null>(
    null
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    if (step === 'approve') {
      setStep('enterTitle');
      return;
    }

    const excludedSelectors = [
      ...new Set(
        map(
          excludedSelectorsId,
          (selectorId) =>
            find(response.sameInfo, ({ id }) => id === selectorId)?.selector
        )
      ),
    ];
    onSubmit(title, response.selector, response.parent, excludedSelectors);
  }, [excludedSelectorsId, step, onSubmit, response, title]);

  useEffect(() => {
    if (!isOpen) return;
    loading.turnIn();
    (async () => {
      try {
        const result = await templateService.parseByTextQuery({
          url,
          selectorQuery: textForParse,
          approvedQueries,
        });

        setResponse(result);
        loading.turnOff();
      } catch (e) {
        console.log(e);
        loading.turnOff();
      }
    })();
  }, [isOpen]);

  const handleToggleExclude = useCallback((id: number, excluded: boolean) => {
    if (excluded) {
      setExcludedSelectorsId((prev) => filter(prev, (item) => item !== id));
    } else {
      setExcludedSelectorsId((prev) => [...prev, id]);
    }
  }, []);

  const renderApproveStep = () => {
    return response?.sameInfo?.length ? (
      <>
        <RowCenter>
          <SmallTitle>You entered:</SmallTitle>
          <SameText same mt={0} ml={4}>
            {textForParse}
          </SameText>
        </RowCenter>

        <Column>
          <SmallTitle mt={7} mb={5}>
            We have found:
          </SmallTitle>
          <ListWrapper>
            {map(response.sameInfo, ({ text, id }) => {
              const excluded = excludedSelectorsId.includes(id);
              return (
                <ExcludeText
                  key={id}
                  same={text === textForParse}
                  text={text}
                  excluded={excluded}
                  toggleValue={() => handleToggleExclude(id, excluded)}
                />
              );
            })}
          </ListWrapper>
        </Column>
      </>
    ) : (
      <SmallTitle>
        We have not found this text on page, please, try another
      </SmallTitle>
    );
  };
  const renderTitleStep = () => {
    return (
      <TitleContainer>
        <TitleInput
          label="Title"
          placeholder="Enter title for this info"
          value={title}
          onChange={handleTitleChange}
        />
      </TitleContainer>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 'approve': {
        return renderApproveStep();
      }
      case 'enterTitle': {
        return renderTitleStep();
      }
      default:
        return renderApproveStep();
    }
  };
  return (
    <Modal
      size={step === 'enterTitle' ? 'sm' : 'md'}
      isOpen={isOpen}
      onClose={onClose}
      {...props}
    >
      <Container>
        <Title>
          {step === 'approve'
            ? 'Is this texts same to your?'
            : 'Enter title for this info'}
        </Title>
        <StepContent>
          {loading.state ? (
            <ApproveTitle>Loading...</ApproveTitle>
          ) : (
            renderCurrentStep()
          )}
        </StepContent>
        {response?.sameInfo.length ? (
          <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
        ) : (
          <SubmitButton onClick={onClose}>Close</SubmitButton>
        )}
      </Container>
    </Modal>
  );
};

export default memo(AddSelectorStepsModal);
