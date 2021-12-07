import Input from "../shared/Input";
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function HeaderSearch() {

    const history = useHistory();

    const [queryStr, setQueryStr] = useState('')

    function handleOnChage(evt) {
        setQueryStr(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(queryStr);

        if(!queryStr){
            return
        }
        const queryStrURI = encodeURIComponent(queryStr);
        history.push('/search?q=' + queryStrURI)
    }

    return (
        <div className="tcl-col-4">
            {/* Header Search */}
            <form onSubmit={handleSubmit}>
                <div className="header-search">
                    <Input
                    name="query" 
                    type="search" 
                    className
                    placeholder="Search articles here ..."
                    value={queryStr}
                    onChange={handleOnChage}
                    />
                </div>
            </form>
        </div>
    );
}

export default HeaderSearch