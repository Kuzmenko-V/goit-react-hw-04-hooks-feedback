import './App.css';
import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

function Counter() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const incStats = e => {
        const { name } = e.target;
        switch (name) {
            case 'good': setGood(good + 1); break;
            case 'neutral': setNeutral(neutral + 1); break;
            case 'bad': setBad(bad + 1); break;
            default: return;
        }
    };
    const options = ['good', 'neutral', 'bad'];
    const total = good + neutral + bad;
    const positivePercentage = Math.round(good * 100 / total);
    return (
            <div className="Counter">
                <Section title="Оставте свой отзыв.">
                    <FeedbackOptions
                    options={options}
                    onIncStats={incStats}
                    />
                </Section>
                <Section title="Статистика">
                    {total > 0 ? 
                        <Statistics
                          good={good}
                          neutral={neutral}
                          bad={bad}
                          total={total}
                          positivePercentage={positivePercentage}
                        />
                        :
                        <Notification message="Пока что нет отзывов."/>
                    }
                </Section>
                
            </div>
        );
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
