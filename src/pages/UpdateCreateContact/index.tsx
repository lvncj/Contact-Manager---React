import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "@components/NavBar";
import ContactForm from "@components/ContactForm";

const UpdateCreateContact = () => {
  const { id } = useParams()

  return (
    <div>
      <NavBar />
      <ContactForm id={id} />
    </div>
  );
};

export default UpdateCreateContact;
