import {useEffect, useState} from 'react';
import '../styles/Bar.css'
import axios from 'axios';

const Bar = () => {
    const [ip, setIp] = useState('');

    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                setIp(response.data.ip);
            } catch (error) {
                console.error(error);
            }
        };
        fetchIP();
    }, []);

    const pathname = () => {
        if (window.location.pathname === '/') return 'adamlipian@'.concat(window.location.hostname);
        else return 'adamlipian@'.concat(window.location.hostname.concat(window.location.pathname));
    }

    return (
        <nav>
            <a href='/'><p>{pathname()}</p></a>
            <p>{ip}</p>
        </nav>
    );
};

export default Bar;
