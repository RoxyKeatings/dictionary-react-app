import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={photo.photographer}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
