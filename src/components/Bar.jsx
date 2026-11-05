import {useEffect, useState} from 'react';
import '../styles/Bar.css'
import axios from 'axios';

const Bar = () => {

    const [serverIp, setServerIp] = useState('');
    const [clientIp, setClientIp] = useState('');

    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                setClientIp(response.data.ip);
                const dnsResponse = await axios.get('https://dns.google/resolve?name=github.io');
                const githubIp = dnsResponse.data.Answer[0].data;
                setServerIp(githubIp);
            } catch (error) {
                console.error(error);
            }
        };
        fetchIP();
    }, []);

    return (
        <nav>
            <a href='/my-website'><p>{'adamlipian@'.concat(serverIp)}</p></a>
            <p>{clientIp}</p>
        </nav>
    );
};

export default Bar;
