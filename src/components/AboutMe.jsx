import Bar from "./Bar";
import '../styles/Page.css'

const AboutMe = () => {
    return (
        <div>
            <Bar />
            <main className='container'>
                <hr className='separator' />
                <h1 className='title'>About me</h1>
                <hr className='separator' />
                <p>I am a cybersecurity student at <a href="https://www.pw.edu.pl" target="_blank" rel="noopener noreferrer">Warsaw University of Technology</a> with a strong interest in technology and programming. On this website, I will occasionally upload the projects I work on, which I mainly create in my spare time.</p>
                <hr className='separator' />
            </main>
        </div>
    );
};

export default AboutMe;
