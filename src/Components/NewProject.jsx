import { useRef, useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function NewProject() {
    // const name = useRef(null);
    // const description = useRef(null);
    // const date = useRef(null);
    // const [projects, setAddProject] = useState([{
    //     name: "",
    //     description: "",
    //     date: ""
    // }]);

    // function handleCancel() {
    //     name.current.value = "";
    //     description.current.value = "";
    //     date.current.value = "";
    // }

    // function handleSave() {
    //     setAddProject((projects) => {
    //         return [...projects, {
    //             name: name.current.value,
    //             description: description.current.value,
    //             date: date.current.value
    //         }];
    //     })
    // }
    return (
        < div className="w-[35rem]">
            <menu className="flex item-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input label={"Name"} />
                <Input label={"Description"} textarea/>
                <Input label={"Due Date"}/>
            </div>
        </div>
    )
}
