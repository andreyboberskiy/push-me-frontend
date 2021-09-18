import React, { memo, useCallback, useEffect, useState } from 'react';
import map from 'lodash/map';

import templateService from 'modules/templates/service';
import useFlagManager from 'hooks/useFlagManager';

import {
  SubmitButton,
  RowBetween,
  Column,
  ApproveTitle,
  Title,
  StepContent,
  SameText,
  Modal,
  SmallTitle,
  RowAround,
  ColumnHalf,
  ListWrapper,
  TitleInput,
  TitleContainer,
} from './styles';

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
  ...props
}) => {
  const [step, setStep] = useState('approve');
  const [title, setTitle] = useState('');
  const {
    state: loading,
    turnOff: handleSetLoaded,
    turnIn: handleStartLoading,
  } = useFlagManager(true);

  const [parseResponse, setParseResponse] = useState(null);

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
    onSubmit(title, parseResponse.selector, parseResponse.parent);
  }, [step, onSubmit, parseResponse, title]);

  useEffect(() => {
    if (!isOpen) return;
    try {
      (async () => {
        handleStartLoading();
        console.log(1, approvedQueries);
        const response = await templateService.parseByTextQuery({
          url,
          selectorQuery: textForParse,
          approvedQueries,
        });

        setParseResponse(response);
        handleSetLoaded();
      })();
    } catch (e) {
      console.log(e);
    }
  }, [
    handleStartLoading,
    approvedQueries,
    url,
    textForParse,
    handleSetLoaded,
    isOpen,
  ]);

  const renderApproveStep = () => {
    return (
      <>
        <Column>
          <RowAround>
            <SmallTitle>You enter:</SmallTitle>
            <SmallTitle>We find:</SmallTitle>
          </RowAround>
        </Column>
        <RowBetween>
          <ColumnHalf pr={4}>
            <SameText same>{textForParse}</SameText>
          </ColumnHalf>
          <ColumnHalf>
            <ListWrapper>
              {map(parseResponse.sameTexts, (text) => (
                <SameText same={text === textForParse}>{text}</SameText>
              ))}
            </ListWrapper>
          </ColumnHalf>
        </RowBetween>
      </>
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
    <Modal size="md" isOpen={isOpen} {...props}>
      <Title>
        {step === 'approve'
          ? 'Is this texts same to your?'
          : 'Enter title for this info'}
      </Title>
      <StepContent>
        {loading ? (
          <ApproveTitle>Loading...</ApproveTitle>
        ) : (
          renderCurrentStep()
        )}
      </StepContent>
      <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
    </Modal>
  );
};

export default memo(AddSelectorStepsModal);
