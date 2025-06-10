import createValidators from './createValidators';

function validateAllFields({ refs }) {
  const validators = createValidators(refs);
  const errors = {};

  Object.entries(refs).forEach(([key, ref]) => {
    if (!ref?.current) return;

    const value = ref.current.value;
    const { isValid, message } = validators[key](value);

    console.log(validators[key](value));

    if (!isValid) errors[key] = message;
  });
  return errors;
}

export default validateAllFields;
