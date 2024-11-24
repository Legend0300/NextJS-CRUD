"use client"
import { useState } from 'react';
import {createNewAccount} from "../actions/accounts";

export default function NewAccountCreator() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
        {editMode ? (
           <form action={createNewAccount} className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
           <input
             type="text"
             name="name"
             placeholder="Account name"
             className="w-full px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
           />
           <div className="flex space-x-4 justify-end mt-6">
             <button
               type="submit"
               className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
             >
               Save
             </button>
             <button
               type="button"
               onClick={() => setEditMode(false)}
               className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
             >
               Cancel
             </button>
           </div>
         </form>
        ) : (
            <button
            onClick={() => setEditMode(true)}
            className="p-2 bg-green-600 text-white rounded-lg"
            >
            Create new account
            </button>
        )}
    </div>
  );
}