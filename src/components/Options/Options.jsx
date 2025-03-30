import styles from './Options.module.css';

const Options = ({ totalFeedback, updateFeedback }) => {    
    return (
        <div  className={ styles.optionsMain }>            
            <ul className={ styles.optionsList }>
                <li>
                    <button onClick={()=>updateFeedback('good')}>Good</button>
                </li>
                <li>
                    <button onClick={()=>updateFeedback('neutral')}>Neutral</button>
                </li>
                <li>
                    <button onClick={()=>updateFeedback('bad')}>Bad</button>
                </li>
                {totalFeedback != 0  &&
                    (<li>
                        <button onClick={()=>updateFeedback('reset')}>Reset</button>
                    </li>
                    )}
            </ul>
        </div>
    );
};

export default Options;
