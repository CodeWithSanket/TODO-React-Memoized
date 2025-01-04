import Button from "./Button";

function TodoListItem({ keyProp, listItemVal, onDelete }) {

    return (
        <ul key={keyProp}>
            <li
                className='m-4 p-2 font-bold border-2 text-blue-500 w-2/5 hover:bg-gray-300 inline-block'>
                {listItemVal}
            </li>
            <Button type={"button"} text={"Delete"} onButtonClick={onDelete} />
        </ul>
    )
}

export default TodoListItem;