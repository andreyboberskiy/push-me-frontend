import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';

import useFlagManager from 'hooks/useFlagManager';

import {
  RowBetween,
  TextInput,
  ApproveBtn,
  AddSelectorStepsModal,
} from './styles';

// interface

export interface IParseFieldState {
  approved: boolean;
  query: string;
  title: string;
  selector: string;
  excludedSelectors: string[];
}

interface IParseFieldProps
  extends FieldRenderProps<IParseFieldState, HTMLElement> {
  placeholder?: string;
  className?: string;
  url: string;
  approvedQueries: string[];
  changeParentSelector: (selector: string) => void;
}

function stateToVariant(
  state: string
): 'green' | 'errorFilled' | 'lightOutlined' {
  switch (state) {
    case 'valid': {
      return 'green';
    }
    case 'invalid': {
      return 'errorFilled';
    }
    default:
      return 'lightOutlined';
  }
}

export const ParseField: React.FC<IParseFieldProps> = ({
  input: { value, onChange },
  meta,
  placeholder,
  className,
  url,
  approvedQueries,
  changeParentSelector,
  ...props
}) => {
  const [fieldState, setFieldState] = useState<IParseFieldState>(value);

  const {
    state: modalOpen,
    turnOff: handleCloseModal,
    turnIn: handleOpenModal,
  } = useFlagManager(false);

  const hasError = useMemo(() => meta.visited && meta.error, [meta]);
  const textValue = useMemo(() => value.title || value.query, [value]);

  const handleChangeQuery = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFieldState((prev) => ({ ...prev, query: event.target.value }));
    },
    []
  );

  const onSubmitModal = useCallback(
    (
      title: string,
      selector: string,
      parent: string | null,
      excludedSelectors: string[]
    ) => {
      setFieldState((prev) => ({
        ...prev,
        title,
        approved: true,
        selector,
        excludedSelectors,
      }));
      if (parent) {
        changeParentSelector(parent);
      }
      handleCloseModal();
    },
    [handleCloseModal, changeParentSelector]
  );

  useEffect(() => {
    onChange(fieldState);
    // eslint-disable-next-line
  }, [fieldState]);

  const inputState = useMemo(() => {
    if (fieldState.approved) {
      return 'valid';
    }
    if (fieldState.query?.length) {
      return 'invalid';
    }
    return 'default';
  }, [fieldState]);

  return (
    <>
      <RowBetween className={className} {...props}>
        <TextInput
          value={textValue}
          onChange={handleChangeQuery}
          error={hasError}
          helperText={meta.error}
          label={placeholder}
          state={inputState}
        />
        <ApproveBtn
          variant={stateToVariant(inputState)}
          disabled={!url || !fieldState.query}
          onClick={handleOpenModal}
        >
          {fieldState.approved ? 'Approved' : 'Approve'}
        </ApproveBtn>
      </RowBetween>
      <AddSelectorStepsModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        url={url}
        approvedQueries={approvedQueries}
        textForParse={fieldState.query}
        approved={fieldState.approved}
        onSubmit={onSubmitModal}
      />
    </>
  );
};
