import { useState } from 'react';
import '../styles/NavigationButton.css';

const NavigationButton = ({text, href=null, target=null}) => {
    const [buttonText, setButtonText] = useState(text);

    return (
        <a className="navigation" href={href} target={target}>
            <div className='text-container'
                onMouseEnter={() => setButtonText('cd ./' + text.toLowerCase().replace(" ", "_"))}
                onMouseLeave={() => setButtonText(text)}
            >
                <p className='button-text'>
                    {buttonText}
                </p>
            </div>
        </a>
    );
}

export default NavigationButton;
