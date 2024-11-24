import NewAccountCreator from './components/NewAccountCreator';
export default function Home() {
  return (
    <div>
      <NewAccountCreator />
      <h1>Next.js CRUD App</h1>
      <p>
        This is a simple CRUD app built with Next.js, Prisma, and SQLite.
      </p>
    </div>
  );
}