import { initialValues, validationSchema } from '../constants/formConstants.ts'
import { handleSubmit } from './formHelpers.ts'

export const useRegistrationForm = () => {
  return {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
    // validateOnMount: true
  }
}
