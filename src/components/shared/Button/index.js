import './button.css'
import cls from 'classnames'
import IconLoading from '../IconLoading'

 function Button({
    type = 'default',
    Loading,
    LoadingPos = 'left',
    as = 'button',
    className,
    size,
    htmlType,
    children,
    ...restProps
 }){
    const classes = cls('btn',{
        'btn-default': type === 'default',
        'btn-category': type === 'category',
        'btn-primary': type === 'primary',
        'btn-size-large': size === 'large'
    }, className)

    const content = (
        <>
            {Loading && LoadingPos === 'left' && <IconLoading />}
            {children}
            {Loading && LoadingPos === 'right' && <IconLoading />}
        </>
    );

    const injectedProps = {
        className: classes,
        type: htmlType,
        ...restProps
    }

    if(as === 'a'){
        return(
            <>
                <a { ...injectedProps }>
                    { content }
                </a>
    
            </>
         );
    }

     return(
        <>
            <button { ...injectedProps }>
                { content }
            </button>

        </>
     );
 }

export default Button