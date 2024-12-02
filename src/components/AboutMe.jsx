import { useEffect, useRef, useState } from "react";
import Bar from "./Bar";
import '../styles/AboutMe.css'

const AboutMe = () => {

    const margin = 80;
    const ref = useRef();
    const [width, setWidth] = useState(margin);

    useEffect(() => {
        if (ref.current)
            setWidth(ref.current.offsetWidth);
    }, [])

    const n = Math.floor((width - margin) / 11.25);
    const line = '-'.repeat(n);

    return (
        <div>
            <Bar />
            <div className='container' ref={ref}>
                <p>{line}</p>
                <p id='about-me'>About me</p>
                <p>{line}</p>
                <p>I am a cybersecurity student at <a href="https://www.pw.edu.pl" target="_blank" rel="noopener noreferrer">Warsaw University of Technology</a> with a strong interest in technology and programming. On this website, I will occasionally upload the projects I work on, which I mainly create in my spare time.</p>
                <p>{line}</p>
                <p></p>
            </div>
        </div>
    );
};

export default AboutMe;
