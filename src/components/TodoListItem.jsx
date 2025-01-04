function TodoListItem({ keyProp, listItem }) {
    return (
        <ul key={keyProp}>
            <li className='m-4 p-2 font-bold border-2 text-blue-500 w-2/3 hover:bg-gray-300'>{listItem}</li>
        </ul>
    )
}

export default TodoListItem;