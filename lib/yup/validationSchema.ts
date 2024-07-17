import * as yup from "yup";

export const userSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(10).max(10).required(),
  password: yup.string().min(8).max(32).required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character'),
  confirm_password: yup.string().min(8).max(32).required(),
})

export const contactSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})