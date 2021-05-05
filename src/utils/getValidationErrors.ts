import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
// key: pode ser qualquer coisa, sendo uma string

export default function getValidationErrors(err: ValidationError) {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
