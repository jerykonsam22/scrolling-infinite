import React from "react";

const ListOfProduct = ({ movieInfo }) => {



  return (
    <div
    className="container px-4"
      style={{ marginTop: "70px" }}
    >
      <div className="row  gx-5">
        {movieInfo.map((val, id) => {
          return <div key={id} className="col-md-3 col-sm-6 col-12 text-center p-3 box_style">
            <img src={val.image} height={150} width={130} />
            <div className="text-start">
              <div className="overflow_text_ellipsis_one_lines">{val.title}</div>
              <div className="d-flex justify-content-between align-items-center ">
                <div>Price ₹{val.price}</div>
                <button type="button" className="btn btn-success">Buy</button>
              </div>
            </div>
          </div>;
        })}
      </div>


    </div>
  );
};

export default ListOfProduct;
