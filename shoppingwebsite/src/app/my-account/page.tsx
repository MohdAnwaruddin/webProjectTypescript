import "./index.css"

const Page = () => {
    return(

        <div className="formpage">

            <div className="title">
                <h1 className="header"> Your Account Details </h1>
            </div>


        <form className="form-container">


        <div  className="form">
              
        <div className="fullName">
            <label >Full Name :</label>
            <input type="text" id="fullName" name="fullName"   />
        </div>
        
        <div className="emailId">
            <label > Email Id : </label>
            <input type="text" id="emailId" name="emailId"  />
        </div>

        <div className="contactNo">
            <label > Contact No : </label>
            <input type="text" id="contactNo" name="contactNo"   />
        </div>

        <div className="gender">
            <label > Gender : </label>
            <input type="text" id="gender" name="gender"  />
        </div>

        </div>  
        </form>   
           

        </div>

     

    )
};

export default Page;