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
    //  let classes = 'btn';
    //  if(type === 'default'){
    //      classes += ' btn-default';
    //  }
    //  else if(type === 'category'){
    //     classes += ' btn-category';
    //  }else if(type === 'primary'){
    //      classes += ' btn-primary';
    //  }
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