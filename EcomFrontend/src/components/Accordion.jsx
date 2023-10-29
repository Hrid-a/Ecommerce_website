const Accordion = ({ data, show, handleClick }) => {
    const { id, title, desc } = data;
    return (
        <div className="flow accordion__content">
            <h3 className={`accordion__title ${show && " show"}`} onClick={() => handleClick(id)}>
                <span>{title}</span>
                <span>{show ? "-" : "+"}</span>
            </h3>
            <div className={`accordion__desc ${show && " show"}`}>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Accordion