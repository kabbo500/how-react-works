import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect(() => {
        console.log('hello')
    }, [steps])

    return (
        <div style={{ border: '3px solid purple', margin: '20px' }}>
            <h2>This is my watch</h2>
            <h3>My current setps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour......</button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;