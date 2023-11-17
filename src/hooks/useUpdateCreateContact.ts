import axios from "axios";
import { useEffect, useReducer } from "react"
import { useNavigate } from "react-router-dom";

import { validateField } from "../utils/validation";
import { CONTACT_URL } from "../constants";
import { INITIAL_STATE, contactReducer } from "../reducer";
import useValidateFields from "./useValidateFields";

const useUpdateCreateContact = (id: string | undefined) => {
  const navigate = useNavigate();
  const [contact, dispatch] = useReducer(contactReducer, INITIAL_STATE);
  const { isError, isValid, handleSetError } = useValidateFields(contact);

  //* effects
  useEffect(() => {
    // update
    if (id) {
      const fetchContactById = async () => {
        try {
          const contact = await axios.get(`${CONTACT_URL}${id}`);
          dispatch({
            type: 'SET_CONTACT',
            data: contact.data,
          })
        } catch (error) {
          console.log(error);
        }
      };
      fetchContactById();
    }
  }, [id]);

  //* handlers
  // TODO
  const handleSubmitContact = async (event: any) => {
    event.preventDefault(); 
    try {
      if (id) {
        // update the selected contact
        await axios.put(`${CONTACT_URL}${id}`, contact);
      } else {
        // create a contact
        await axios.post(`${CONTACT_URL}`, contact);
      }
      dispatch({
        type: 'SET_CONTACT',
        data: {
          name: '',
          email: '',
          phone: '',
        }
      })
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  };

  const handleUpdateField = (key: string, value: string) => {
    const isValid = validateField(key, value);
    handleSetError(key, isValid)

    dispatch({
      type: 'UPDATE_FIELD',
      data: value,
      key,
    })
  }
 
  return {
    isError,
    isValid,
    contact,
    handleSubmitContact,
    handleUpdateField,
  }
}

export default useUpdateCreateContact;