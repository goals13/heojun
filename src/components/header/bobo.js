import React from 'react';

const bobo = ({match}) => {
    return(
    <div className='bobo'>
        <h2>Hello! {match.params.name}</h2>
    </div>
    );
}

export default bobo;