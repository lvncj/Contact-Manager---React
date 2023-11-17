const NAME_REGEX = /^[A-Za-z\s]*$/;
const PHONE_REGEX = /^\s*\d*\s*$/;
const EMAIL_REGEX = /\S+@\S+\.\S+|^$/;

const validateField = (key: string, value: string) => {
  let isValid = true;
  // to be refactored
  switch (key) {
    case "phone":
      isValid = PHONE_REGEX.test(value) && !!value.trim().length;
      break;
    case "email":
      isValid = EMAIL_REGEX.test(value) && !!value.trim().length;
      break;
    case "name":
      isValid = NAME_REGEX.test(value) && !!value.trim().length;
      break;
    default:
      break;
  }

  return isValid;
};

export { validateField };
