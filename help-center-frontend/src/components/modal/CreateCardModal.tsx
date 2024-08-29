import React from 'react';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { useCreateCardMutation } from '../../redux/api/card/cardApi';
import { toast } from 'sonner';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    handleCloseModal: () => void
}

type TFormInputs = {
    title: string
    description: string,
}

const CreateCardModal: React.FC<ModalProps> = ({ title, isOpen, onClose, handleCloseModal }) => {
    const [createCard] = useCreateCardMutation();
    const {
        register,
        handleSubmit
    } = useForm<TFormInputs>()
    if (!isOpen) return null;


    // create card
    const onSubmit: SubmitHandler<FieldValues> = async (cardData) => {
        console.log(cardData);
        const toastId = toast.loading("Processing...")
        try {
            const res = await createCard(cardData);
            console.log(res);
            if (res?.data?.data?.id) {
                toast.success("Card created successfully", { id: toastId, duration: 1000 });
                handleCloseModal();


            }
            else {
                toast.error("Something went wrong", { id: toastId, duration: 1000 });
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            console.log(error?.message);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <button
                    type="button"
                    className="absolute top-0 right-0 mt-2 mr-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <div className="flex  items-start">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register("title", { required: true })}
                            className="input input-bordered input-primary w-full" />

                        <textarea
                            className="textarea textarea-primary mt-5 w-full"  {...register("description", { required: true })} placeholder="Description"></textarea>

                        <div className="flex justify-center mt-2">
                            <button type='submit' className='btn btn-outline btn-sm'>Create</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default CreateCardModal;
