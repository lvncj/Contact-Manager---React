import { Link } from "react-router-dom";

import useUpdateCreateContact from "@hooks/useUpdateCreateContact";
import { contactFormConfig } from "@config/contacts";


const ContactForm = (props: any) => {
  const { id } = props;

  const { 
    isError, 
    isValid, 
    contact, 
    handleUpdateField, 
    handleSubmitContact 
  } = useUpdateCreateContact(id);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>{`${id} ? 'Edit' : 'Add'} Contact`}</h1>
        <form onSubmit={handleSubmitContact}>
          {/* <form onSubmit={onSubmit}> */}
          {Object.entries(contactFormConfig).map((item: any) => {
            const [key, value] = item;
            const { 
              id, 
              placeholder, 
              title, 
              errorText 
            } = value;

            return (
              <div key={id} className="mb-2">
                <label htmlFor="name">
                  {title}
                  <span className="text-danger"> *</span>
                </label>
                <input
                  key={id}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder={placeholder}
                  value={contact[key]}
                  onChange={(event) =>
                    handleUpdateField(key, event.target.value)
                  }
                />
                {(isError as any)[key] && <small className="text-danger">{errorText}</small>}
              </div>
            );
          })}
          <button disabled={!isValid} className="btn btn-success">
            Save
          </button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
