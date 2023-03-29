export const checkTitleValid = (value: string) => {
  const isValidText = /^[a-z\s]+$/i;

  return value[0].toUpperCase() === value[0]
     && value.length > 2
      && value.match(isValidText);
};

export const isCostValid = (value: string) => value.length < 5 && +value > 0;

export const isDescriptionValid = (value: string) => {
  const isValidText = /^[a-z\s]+$/i;

  return value[0].toUpperCase() === value[0]
    && value.match(isValidText);
};
