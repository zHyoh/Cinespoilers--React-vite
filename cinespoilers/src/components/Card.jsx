const Card = ({title}) => {
    return (
        <div className="card">
            <header>
                {title}
            </header>
            <div>
                Card Body
            </div>
            <footer>
                Card footer
            </footer>
        </div>
    );
};

export default Card