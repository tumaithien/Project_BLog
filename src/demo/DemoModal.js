
import Button from "../components/shared/Button"
import Modal from "../components/shared/Modal"
import useModal from "../hook/useModal"

function DemoModal() {
    const{modal, Toggle} = useModal()

    return(
        <div className="tcl-container mt-1">
            <h2>Modal</h2>
            <Button className="" onClick={() => Toggle()}>
                Open Modal
            </Button>
            <Modal show={modal} title="Test modal" close={Toggle}>This is my modal</Modal>
        </div>
    )
}

export default DemoModal