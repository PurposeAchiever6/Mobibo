import React from 'react'

const CompanyCard = (props) => {
  return (
    <div>
      <div className="" style={{backgroundImage: `url(${props.image.src})`,backgroundRepeat:"no-repeat",backgroundSize:'100%'}}>
        <div className="company-name">
            <p className=''>{props.companyName}</p></div>
      </div>
    </div>
  )
}

export default CompanyCard
