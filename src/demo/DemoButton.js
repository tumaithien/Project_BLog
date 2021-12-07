import Button from "../components/shared/Button"

function DemoButton(){
    return(
        <div className="text-center">
            <Button className="custom" as="a" href="https:/google.com" target="_blank" title="Google">Nội dung ở giữa 1</Button>
            <Button onClick={() => console.log("click me!")}>Nội dung ở giữa 2</Button>
            <Button className="custom" type="default">Nội dung ở giữa 3</Button>
            <Button type="category" Loading LoadingPos="right">Nội dung ở giữa 4</Button>
            <Button type="primary">Nội dung ở giữa 5</Button>
            <Button type="primary" size="large">Nội dung ở giữa 6</Button>
            <Button type="primary" htmlType="submit">Nội dung ở giữa 7</Button>
            <Button type="primary" htmlType="submit" Loading={true}>Nội dung ở giữa 8</Button>
        </div>
    );
}

export default DemoButton

