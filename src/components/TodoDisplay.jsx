import { memo, useCallback, useMemo, useState } from "react";
import Button from "./Button";
import TodoListItem from "./TodoListITem";
import Input from './Input'


const MemoizedComponent = memo(TodoListItem);


export default function TodoDisplay() {
    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);


    function onChangeHandler(e) {
        setInputVal(e.target.value);
    }

    function onButtonClick() {
        if (inputVal) {
            setList([...list, { id: list.length + 1, value: inputVal }])
            setInputVal('');
        }
    }



    function onDelete() {
        console.log("Button Clicked");
    }

    const memoizedDeleteComponent = useCallback(onDelete, []);
    const memoizedList = useMemo(() => {
        return list;
    }, [list]);

    return (
        <>
            <Input type={"text"} value={inputVal} placeholder={"Enter Your Todo..."} onChangeHandler={onChangeHandler} />
            <Button type={"click"} text={"Submit"} onButtonClick={onButtonClick} />
            {memoizedList.map((listItem) => {
                return (
                    <MemoizedComponent key={listItem.id} listItemVal={listItem.value} onDelete={memoizedDeleteComponent} />
                )
            })}
        </>
    )
}


