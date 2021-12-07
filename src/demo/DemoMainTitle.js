import MainTitle from "../components/shared/MainTitle";


function DemoMainTitle(){
    return (
        <>
            <div className="tcl-container">
                <MainTitle>Tiêu đề 01</MainTitle>
                <MainTitle>Tiêu đề 02</MainTitle>
                <MainTitle btnLabel="Xem them" btnProps={{type: 'category'}}>Tiêu đề 02</MainTitle>
                <MainTitle btnLabel="Xem them" btnProps={{type: 'category', size: 'large', Loading: true, LoadingPos: "right"}}>Tiêu đề 02</MainTitle>
                <MainTitle btnLabel="Xem them" btnProps={{type: 'default', as:'a', target: "_blank", href: "https:/zendvn.com"}}>Tiêu đề 02</MainTitle>
                {/* <MainTitle btnLabel="Xem them" btnProps={{type:'category', size='large'}}>Tiêu đề 02</MainTitle> */}
                {/* <MainTitle btnLabel="Xem them" btnProps={{type:'category'}, Loading, LoadingPos = 'right'}>Tiêu đề 02</MainTitle> */}
            </div>
        </>
    );
}

export default DemoMainTitle