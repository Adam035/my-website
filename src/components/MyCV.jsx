const MyCV = () => {
    return(
        <iframe title="Adam Lipian CV" src={`${process.env.PUBLIC_URL}/adam-lipian-cv.pdf`} style={{ display: 'block', width: '100%', height: '100dvh', border: 0 }} />
    );
}

export default MyCV;
