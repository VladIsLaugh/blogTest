import React from "react";
import NewsPreviewItem from './NewsPreviewItem/NewsPreviewItem'
const Layout = (props) => {
  // console.log(props);
  return (
    <div>

    {
      props.personalInfo.map((item, index)=>{
        return(
          <NewsPreviewItem personalInfo={props.personalInfo[index]} key={index} handleOpen={props.handleOpen}/>
        )
      })
    }
      
    </div>
  );
};

export default Layout;
