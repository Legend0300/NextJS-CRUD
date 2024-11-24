import Link from 'next/link';
import db from '../../modules/db';

export default async function Page({ params }) {
  try {
    const account = await db.account.findUnique({
      where: { id: params.id },
    });

    if (!account) {
      return (
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Account not found</h1>
            <Link href="/" className="text-blue-600 hover:underline">
              Back to accounts
            </Link>
          </div>
        </div>
      );
    }

    return (
             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto transform transition-all hover:shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-4">
            Account Details
          </h1>
          
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-500 dark:text-gray-400">ID</label>
              <p className="text-lg font-mono bg-gray-50 dark:bg-gray-900 p-2 rounded">
                {account.id}
              </p>
            </div>
        
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-500 dark:text-gray-400">Name</label>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {account.name || 'No name set'}
              </p>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500 dark:text-gray-400">Created</label>
                <p className="text-gray-700 dark:text-gray-300">
                  {new Date(account.createdAt).toLocaleString()}
                </p>
              </div>
        
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500 dark:text-gray-400">Updated</label>
                <p className="text-gray-700 dark:text-gray-300">
                  {new Date(account.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        
          <div className="mt-8 flex space-x-4">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Back to Accounts
            </Link>
            <Link
              href={`/accounts/${account.id}/edit`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Edit Account
            </Link>
          </div>
        </div>   );
  }
    catch (error) {
        console.error('Error loading account:', error);
        return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error loading account</h1>
            <p>{error.message}</p>
            </div>
        </div>
        );
    }
}