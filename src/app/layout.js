import Link from 'next/link';
import db from './modules/db';
import './globals.css';
import { deleteAccount } from './actions/accounts';
export const metadata = {
  title: 'Next.js CRUD App',
  description: 'Account management application',
};

export default async function RootLayout({ children }) {
  try {
    const accounts = await db.account.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' }
    });

    return (
      <html lang="en">
        <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                  CRUD App
                </Link>
                <div className="flex space-x-4">
                  {accounts.map(account => (
                    <div key={account.id} className="flex items-center gap-2">
                      <Link
                        href={`/accounts/${account.id}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                      >
                        {account.name || 'Unnamed Account'}
                      </Link>
                      <form action={deleteAccount}>
                        <input type="hidden" name="id" value={account.id} />
                        <button type="submit" className="text-red-600 dark:text-red-400 hover:text-red-800">
                          Delete
                        </button>
                      </form>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto p-4">
            {children}
          </main>

          <footer className="bg-white dark:bg-gray-800 mt-auto py-4">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} CRUD App
            </div>
          </footer>
        </body>
      </html>
    );
  } catch (error) {
    console.error('Error loading accounts:', error);
    return (
      <html lang="en">
        <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto p-4">
            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
              <h1 className="text-red-600 dark:text-red-400">Error loading accounts</h1>
              <p>{error.message}</p>
            </div>
            {children}
          </div>
        </body>
      </html>
    );
  }
}