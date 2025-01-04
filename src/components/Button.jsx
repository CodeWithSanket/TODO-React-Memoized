function Button({ type, text, onButtonClick }) {
    return (
        <button
            type={type}
            onClick={onButtonClick}
            className="bg-gray-400 rounded p-3 text-white hover:bg-sky-700 transition-all inline-block"
        > {text}
        </button>
    )
}

export default Button;