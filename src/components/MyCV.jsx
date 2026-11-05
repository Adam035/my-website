const MyCV = () => {
    return(
        <embed src={`${process.env.PUBLIC_URL}/adam-lipian-cv.pdf`}  width="100%" height={window.innerHeight} type="application/pdf" />
    );
}

export default MyCV;
