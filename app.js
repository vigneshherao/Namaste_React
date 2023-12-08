import React from 'react';
import ReactDOM  from 'react-dom/client';

const heading = React.createElement(
    "div",
    {
        id: "parent"
    },
    [
        
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {},
            "Hai this is vignesh 1",
        ),
        React.createElement(
            "h1",
            {},
            "Hai this is vignesh 2",
        )
    ]
    ),
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {},
            "Hai this is vignesh 1",
        ),
        React.createElement(
            "h1",
            {},
            "Hai this is vignesh 2",
        )
    ]
    )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

