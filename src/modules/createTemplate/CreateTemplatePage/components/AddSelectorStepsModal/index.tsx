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
} from 'modules/createTemplate/CreateTemplatePage/components/AddSelectorStepsModal/styles';

// Interface

interface IAddSelectorStepsModalProps {
  textForParse: string;
  onSubmit: (
    title: string,
    selector: string | null,
    parent: string | null
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
    onSubmit(title, response.selector, response.parent);
  }, [step, onSubmit, response, title]);

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

  const renderApproveStep = () => {
    return response?.sameTexts?.length ? (
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
            {map(response.sameTexts, (text) => (
              <SameText same={text === textForParse}>{text}</SameText>
            ))}
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
      <>
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
        {response?.sameTexts ? (
          <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
        ) : (
          <SubmitButton onClick={onClose}>Close</SubmitButton>
        )}
      </>
    </Modal>
  );
};

export default memo(AddSelectorStepsModal);
