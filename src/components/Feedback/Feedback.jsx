import styles from './Feedback.module.css';

const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback }) => {    
    return (        
        <div className={ styles.feedbackMain }>            
            <ul className={ styles.feedbackList }>
                <li>
                    <span>Good: </span>
                    <span> { good }</span>
                </li>
                <li>
                    <span>Neutral: </span>
                    <span>{ neutral }</span>
                </li>
                <li>
                    <span>Bad: </span>
                    <span>{ bad }</span>
                </li>
                <li>
                    <span>Total: </span>
                    <span>{ totalFeedback }</span>
                </li>
                <li>
                    <span>Positive: </span>
                    <span>{ positiveFeedback }</span>
                    <span>%</span>
                </li>
            </ul>
        </div>
    );
};

export default Feedback;
