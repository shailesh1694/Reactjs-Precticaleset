import React from "react";


const ShoData=(props)=>{
        return(
            
        <div className="row g-2 my-3">
            <div className="col-md-3">
                <div className="form-floating">
                <p className="form-control">{props.username}</p>
                <label htmlFor="floatingInputGrid">Username</label>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-floating">
                <p className="form-control" >{props.email}</p>
                <label htmlFor="floatingInputGrid">Email</label>
                </div> 
            </div> 
            <div className="col-md-3">
                <div className="form-floating">
                <p className="form-control" >{props.phone}</p>
                <label htmlFor="floatingInputGrid">Phone</label>
                </div> 
            </div> 
            <div className="col-md-3">
                <div className="form-floating">
                <p className="form-control" >{props.password}</p>
                <label htmlFor="floatingInputGrid">Password</label>
                </div> 
            </div> 
    </div>
    


        );





}


export default ShoData;