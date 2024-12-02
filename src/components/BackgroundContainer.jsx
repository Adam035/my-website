import '../styles/BackgroundContainer.css'

const BackgroundContainer = props => {
    const disableContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <video autoPlay loop muted onContextMenu={disableContextMenu}>
                <source src={props.video}/>
                Your browser does not support the video tag.
            </video>
            <div className="children-container">
                {props.children}
            </div>
        </div>
    );
};

export default BackgroundContainer;