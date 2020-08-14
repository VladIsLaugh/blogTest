import React from 'react';
import AddComponent from "./AddComponent/AddComponent"
import NewsPreview from "./NewsPreview/NewsPreview"

class Admin extends React.Component{
    state = {
        personalInfo:{
            avatar: "sf",
            name:"qe",
            date:"dsds",
            msg:"ddsadsa"
        }
      

    }
    render(){
  return(
        <div>
            <AddComponent />
            Your news
            <NewsPreview personalInfo={this.state.personalInfo}/>
        </div>
    )
    }
  
}
export default Admin