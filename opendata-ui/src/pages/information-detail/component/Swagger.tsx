import React from 'react'
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Swagger = ({url}:{url:string}) => {
  return (
    <div>
         <div className="App">
        <SwaggerUI url={url} />
      </div>
    </div>
  )
}

export default Swagger