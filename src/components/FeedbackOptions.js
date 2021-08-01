import React from 'react';

const FeedbackOptions = ({options, onIncStats }) => (
    <div className="Feedback-controls">
        {options.map((option, index) => {
            return (<button type="button" name={option} key={index} onClick={onIncStats}>{Translation(option)}</button>)
        })}
    </div>        
);

function Translation(text) {
    if (text === 'good') { return "Хорошо" }
    if (text === 'neutral') { return "Нормально" }
    if (text === 'bad') { return "Плохо" }
};
export default FeedbackOptions;