import React from "react";

const ContactCard = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 h-100 ">
      <div className="my-4 bg-white flex-column " style={{ height: "75vh" }}>
        <div className="blueOverlay h-75 flex-column position-relative ">
          <div className="overlay w-100 h-100 position-absolute">
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2021/02/crabss-750x750.jpg"
              alt=""
              className="img-fluid h-100 w-100"
            />
          </div>
          <img
            className="content img-fluid rounded-circle w-25"
            src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg"
            alt=""
          />
          <h5 className="">John doe</h5>
          <p className="fs-6"> info@myadmin.com </p>
        </div>
        <div className="info flex-between h-25 px-5 text-center">
          <div>
            <h5>12K</h5>
            <h6>Followers</h6>
          </div>
          <div>
            <h5>420</h5>
            <h6>Following</h6>
          </div>
          <div>
            <h5>128</h5>
            <h6>Tweets</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
