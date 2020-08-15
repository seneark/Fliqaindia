import React from 'react';

const HomeScreenBtn = props => {
    return (
        <div style={{
            width: props.Width,
            backgroundColor: props.Color,
            borderRadius: 100
        }}>
           {props.title} 
        </div>
    );
};


export default HomeScreenBtn;