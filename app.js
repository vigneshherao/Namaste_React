import React from 'react';
import ReactDOM  from 'react-dom/client';

const heading = React.createElement("h6",{},"Hai Vignesh this is from react");





const HeadingComponent = () =>(
    <div className='Container'>
        {100+50}
        <h1>This is React Component </h1>
        <TitleComponent/>
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

