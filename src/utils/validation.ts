export function checkMinMaxLength(
  fieldValue: string,
  minLength: number,
  maxLength?: number
): string | null {
  if (fieldValue?.length < minLength) {
    return `Minimal length is ${minLength} symbols`;
  }
  if (maxLength && fieldValue?.length > maxLength) {
    return `Maximal length is ${maxLength} symbols`;
  }

  return null;
}

interface IErrors {
  [key: string]: string;
}
export function pushError(...errors): IErrors {
  const allErrors: IErrors = {};
  errors.forEach((err) => {
    if (err.error?.length) {
      allErrors[err.field] = err.error;
    }
  });

  return allErrors;
}
