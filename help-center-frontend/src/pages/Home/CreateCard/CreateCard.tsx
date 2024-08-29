import { useState } from "react";
import CreateCardModal from "../../../components/modal/CreateCardModal";

const CreateCard = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    return (
        <div>
            <button className="btn btn-outline" onClick={handleOpenModal}>Create Card</button>
            <CreateCardModal
                title="Create A New Card"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                handleCloseModal={handleCloseModal}
            />
        </div>
    );
};

export default CreateCard;