import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

export const useResultContext = () => useContext(ResultContext);

export const ResultProvider = (props) => {
    const [result, setResult] = useState({
        c: 0,
        g: 0,
        n: "Name",
        tho: 0,
        thy: 0,
        tc: 0
    });
    return (
        <ResultContext.Provider
            value={{
                result,
                setResult,
            }}
        >
            {props.children}
        </ResultContext.Provider>
    );
};
