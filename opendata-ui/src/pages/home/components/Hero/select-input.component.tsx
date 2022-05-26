import { ISelectProps, Option } from 'pages/home/types/types'
import React, { useState } from 'react'

export const SelectInputComponent = ({ data, select, selected_item }: ISelectProps) => {
    const [show, setShow] = useState(false);

    const selectOption = (item: Option) => {
        setShow(false)
        select(item)
    }
    return (
        <div className="select_component" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <div className="input" >
                {selected_item.value}
            </div>
            <div className={`options ${show ? 'show' : ''}`}>
                <ul className="options_list">
                    {data.map(opt =>
                        <li className="options_list_item"
                            key={opt.key}
                            onClick={() => selectOption(opt)}
                        >
                            {opt.value}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
