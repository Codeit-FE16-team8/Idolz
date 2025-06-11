import createValidators from './createValidators';

function validateField({ key, value, refs }) {
  const validators = createValidators(refs);

  const { isValid, message } = validators[key](value);
  return { isValid, message };
}

export default validateField;
