function Input({ type, value, placeholder, onChangeHandler }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            className="m-4 p-2 w-2/5 h-12 border-2 rounded"
            value={value}
        >
        </input>
    )
}

export default Input;