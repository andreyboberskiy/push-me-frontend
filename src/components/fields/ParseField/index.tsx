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

interface IFieldState {
  approved: boolean;
  query: string;
  title: string;
  selector: string;
}

interface IParseFieldProps extends FieldRenderProps<IFieldState, HTMLElement> {
  placeholder?: string;
  className?: string;
  url: string;
  approvedQueries: string[];
  changeParentSelector: (selector: string) => void;
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
  const [fieldState, setFieldState] = useState<IFieldState>(value);

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
    (title: string, selector: string, parent: string | null) => {
      setFieldState((prev) => ({
        ...prev,
        title,
        approved: true,
        selector,
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

  return (
    <>
      <RowBetween className={className} {...props}>
        <TextInput
          value={textValue}
          onChange={handleChangeQuery}
          error={hasError}
          helperText={meta.error}
          label={placeholder}
          state={fieldState.approved ? 'approved' : 'default'}
          // state="approved"
        />
        <ApproveBtn
          disabled={!url || !fieldState.query}
          onClick={handleOpenModal}
        >
          Approve
        </ApproveBtn>
      </RowBetween>
      <AddSelectorStepsModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        url={url}
        approvedQueries={approvedQueries}
        textForParse={fieldState.query}
        onSubmit={onSubmitModal}
      />
    </>
  );
};
