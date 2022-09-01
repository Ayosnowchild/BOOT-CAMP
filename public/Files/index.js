import React from 'react';
import ReactDOM from 'react-dom';

function Image() {
    return (
        <img src="./react-logo.png" alt='' width= '40px'/>
    )
}

function Body() {
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li> Was first Released in 2013</li>
                <li> Was originally created by Jordan Walke</li>
                <li> Has well over 100k stars on GitHub</li>
                <li> Is maintained by Facebook</li>
                <li> Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Image/>
        <Body/>
    </div>,
    document.getElementById('root')
)