import React from "react";
import NewsPreviewItem from './NewsPreviewItem/NewsPreviewItem'
const Layout = (props) => {
  // console.log(props);
  return (
    <div>
      <NewsPreviewItem personalInfo={props.personalInfo} />
    </div>
  );
};

export default Layout;
