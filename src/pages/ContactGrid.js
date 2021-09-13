import React from "react";
import Avatar from "@material-ui/core/Avatar";
const contacts = [
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Johnathan Doe",
    job: "Web Designer",
    address: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    phone: "(123) 456-7890",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
];
const ContactGrid = () => {
  return (
    <section className="container-fluid bg-light pb-4">
      <div className="row mx-1 ">
        {contacts.map((contact) => (
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 bg-light">
            <div className="mt-4  p-4 bg-white d-flex">
              <div className="avatarImg">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="rounded-circle w-75  img-fluid"
                />
              </div>

              <div className="info ">
                <h2 className="m-0">{contact.name}</h2>
                <p className="m-0">{contact.job}</p>
                <address>{contact.address}</address>
                <label href="telto:#">P: {contact.phone}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactGrid;
