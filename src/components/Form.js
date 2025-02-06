import * as React from "react";

export default function Form() {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone_image"
            ></img>
          </div>
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12"></div>
        </div>
      </div>
    </section>
  );
}
