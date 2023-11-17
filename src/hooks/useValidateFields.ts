import { useEffect, useState } from "react";
import { isObject } from "../utils/datatype";
import { validateField } from "../utils/validation";

// TODO
const getDefaultData = (data: any) => {
  return Object.keys(data).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: false,
    };
  }, {})
}

// TODO
const useValidateFields = (data: any) => {
  const [isValid, setIsValid] = useState(true);
  //* initializer function
  const [isError, setIsError] = useState(getDefaultData(data));

  const handleSetError = (key: string, isValid: boolean) => {
    setIsError((prev) => {
      return {
        ...prev,
        [key]: !isValid,
      };
    });
  };

  useEffect(() => {
    if (isObject(data)) {
      const keyValuePairs = Object.entries(data);
      const isFieldInvalid = keyValuePairs.some((item: any) => {
        const [key, value] = item;
        const isValid = validateField(key, value as string);
        return !isValid;
      });
      setIsValid(!isFieldInvalid);
    }
  }, [data]);

  return {
    isValid,
    isError,
    handleSetError,
  };
};

export default useValidateFields;
