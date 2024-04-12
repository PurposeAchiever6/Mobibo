
import BlogContent from "@/Components/Blog/Content";
import React from "react";
const page = ({ params}) => {
  return <BlogContent id={params.id}/>
}

export default page