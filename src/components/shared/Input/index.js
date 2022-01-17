import './input.css'
import cls from 'classnames'
import { useState } from 'react'
import IconSearch from '../IconSearch'

function Input({
    Label,
    type= 'text',
    className,
    error,
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
                    className={classesSearch } 
                    type="text"
                    {...restProps}
                />
            </div>

        );
    }

    return (
            <div className={cls("form-control",{
                'form-control_haserror': error
            })}>
                { Label && <label>{ Label }</label>}
                <div className="form-control_wrapper">
                    {type === 'password' && <i className={classesIconShow} onClick={handleShowPass}></i>}
                    <input 
                        type={localType}
                        className={className}
                        {...restProps} 
                    />
                </div>
                {error && <span className="form-control_error">{ error }</span>}
            </div>
    );
}

export default Input