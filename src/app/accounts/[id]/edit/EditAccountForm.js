// /app/accounts/[id]/edit/EditAccountForm.js
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { updateAccount } from "../../../actions/accounts";

export default function EditAccountForm({ account }) {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Edit Account
      </h1>

      <form action={updateAccount} className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-gray-500 dark:text-gray-400">
            Account Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={account?.name}
            className="w-full px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        <input type="hidden" name="id" value={account?.id} />

        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
          <Link
            href={`/accounts/${account?.id}`}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}