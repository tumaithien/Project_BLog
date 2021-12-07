import './input.css'
import cls from 'classnames'
import { useState } from 'react'
import IconSearch from '../IconSearch'

function Input({
    Label,
    type= 'text',
    className,
    icon = <IconSearch />,
    ...restProps
}) {
    const [localType, setLocalType] = useState(type)

    function handleShowPass(){
        if(localType === 'password'){
            setLocalType('text');
        }else if(localType === 'text'){
            setLocalType('password');
        }
    }
    const classesIconShow = cls('toggle-password', {
        'ion-eye': localType === 'password',
        'ion-eye-disabled': localType === 'text'
    });

    const classesSearch = cls('input-search__input',className)

    if(type === 'search'){
        return(
            <div className="input-search">
                {icon}
                <input 
                className={classesSearch} 
                type="text"
                {...restProps}
                />
            </div>

        );
    }

    return (
            <div className="form-control">
                { Label && <label>{ Label }</label>}
                {type === 'password' && <i className={classesIconShow} onClick={handleShowPass}></i>}
                <input 
                    type={localType}
                    className={className}
                    {...restProps} 
                />
            </div>
    );
}

export default Input