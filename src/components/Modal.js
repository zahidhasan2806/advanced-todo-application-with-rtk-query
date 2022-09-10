import React, { useState } from 'react';
import { useEditTodoMutation } from '../features/api/apiSlice';

const Modal = ({ setShowModal, todo }) => {
    const { id, text, completed, color } = todo;
    const [todoText, setTodoText] = useState(text);
    const [editTodo] = useEditTodoMutation();

    const handleUpdateTodo = () => {
        editTodo({
            id,
            data: {
                text: todoText,
            }
        });
        setShowModal(false);
    };
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg pt-5 pb-4 sm:p-6 sm:pb-4">

                        <div className='flex justify-around items-center'>
                            <label htmlFor="title" className="block mr-2 text-sm font-medium text-gray-500">Title:</label>
                            <input
                                type="text"
                                id="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={text}
                                value={todoText}
                                onChange={(e) => setTodoText(e.target.value)}
                                required
                            />


                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleUpdateTodo}
                            >
                                Update
                            </button>

                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;