import React, { memo, useCallback, useMemo, useState } from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import uniq from 'lodash/uniq';

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
} from './styles';
import _useEffect from 'hooks/_useEffect';

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
  approved: boolean;
}

export const AddSelectorStepsModal: React.FC<IAddSelectorStepsModalProps> = ({
  textForParse,
  onSubmit,
  url,
  isOpen,
  onClose,
  approved,
  ...props
}) => {
  const [step, setStep] = useState<'exclude' | 'title'>('exclude');
  const [title, setTitle] = useState('');
  const loading = useFlagManager(true);

  // const [excludedSelectorsId, setExcludedSelectorsId] = useState<number[]>([]);
  const [excludedSelectors, setExcludedSelectors] = useState<string[]>([]);

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
    if (step === 'exclude') {
      setStep('title');
      return;
    }

    onSubmit(
      title,
      response.selector,
      response.parent,
      uniq(excludedSelectors)
    );
  }, [excludedSelectors, step, onSubmit, response, title]);

  _useEffect(() => {
    if (!isOpen) return;

    if (!approved) {
      setResponse(null);
      setStep('exclude');
      loading.turnIn();
      (async () => {
        try {
          const result = await templateService.parseByTextQuery({
            url,
            selectorQuery: textForParse,
          });

          setResponse(result);
          loading.turnOff();
        } catch (e) {
          loading.turnOff();
        }
      })();
    }
  }, [isOpen]);

  const handleToggleExclude = useCallback(
    (selector: string, excluded: boolean) => {
      if (excluded) {
        setExcludedSelectors((prev) =>
          filter(prev, (item) => item !== selector)
        );
      } else {
        setExcludedSelectors((prev) => [...prev, selector]);
      }
    },
    []
  );

  const allTextsExcluded = useMemo(() => {
    if (response?.sameInfo?.length && excludedSelectors.length) {
      return !response.sameInfo.some(
        (item) => !excludedSelectors.includes(item.selector)
      );
    }
    return false;
  }, [response, excludedSelectors]);

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
            {map(response.sameInfo, ({ text, id, selector }) => {
              const excluded = excludedSelectors.includes(selector);

              return (
                <ExcludeText
                  key={id}
                  same={text.includes(textForParse)}
                  text={text}
                  excluded={excluded}
                  toggleValue={() => handleToggleExclude(selector, excluded)}
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
      case 'exclude': {
        return renderApproveStep();
      }
      case 'title': {
        return renderTitleStep();
      }
      default:
        return renderApproveStep();
    }
  };
  return (
    <Modal
      size={step === 'title' ? 'sm' : 'md'}
      isOpen={isOpen}
      onClose={onClose}
      {...props}
    >
      <Container>
        <Title>
          {step === 'exclude'
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
        {response?.sameInfo?.length ? (
          <SubmitButton disabled={allTextsExcluded} onClick={handleSubmit}>
            Confirm
          </SubmitButton>
        ) : (
          <SubmitButton onClick={onClose}>Close</SubmitButton>
        )}
      </Container>
    </Modal>
  );
};

export default memo(AddSelectorStepsModal);
