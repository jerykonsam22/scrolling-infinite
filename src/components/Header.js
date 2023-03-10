import React from "react";

const Header = ({handleSearch}) => {
//   const myStyle={
//     ,
//     // marginTop:'-70px',
//     // fontSize:'50px',
//     // backgroundSize: 'cover',
  
// };
  return (
    <div>
    <div>
      <div className="d-flex justify-content-around align-items-center"
            style={{
            height: "60px",
            position: "fixed",
            width: "100%",
            top: "0px",
            backgroundColor: "rgb(240, 241, 241)",
            }}
        > 
            <div className="fst-italic display-5 text-primary fs-1">Online</div>

            <div className="form-outline d-flex ">
                <input  type="search" id="form1" className="form-control" placeholder="Search" onChange={handleSearch} />
                {/* <button type="button" className="btn  btn-primary">
                <i className="fas fa-search"></i>
                </button>
                 */}
                
            </div>
           
            <div className="d-flex  ">
            <div className=" ">Login</div>
            <i className="fa-solid fa-user m-1"></i>
            </div>
      </div>
     
    </div>
     {/* <div style={{backgroundImage: "url('https://media.tenor.com/bSSCPe92FzUAAAAd/supermarket-granny.gif')",height:"250px" }}></div> */}
     </div>
  );
};

export default Header;
