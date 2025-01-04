import { memo, useState } from "react";
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
        if (inputVal.length != 0) {
            setList([...list, inputVal]);
            setInputVal('');
        }
    }

    return (
        <>
            <Input type={"text"} value={inputVal} placeholder={"Enter Your Todo..."} onChangeHandler={onChangeHandler} />
            <Button type={"click"} text={"Submit"} onButtonClick={onButtonClick} />
            {list.map((listItem, index) => {
                return (
                    <MemoizedComponent key={index} listItem={listItem} />
                )
            })}
        </>
    )
}


