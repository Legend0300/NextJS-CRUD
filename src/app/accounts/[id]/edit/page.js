// /app/accounts/[id]/edit/page.js
import db from "../../../modules/db";
import EditAccountForm from "./EditAccountForm";

export default async function EditAccountPage({ params }) {
  const account = await db.account.findUnique({
    where: { id: params.id }
  });

  return <EditAccountForm account={account} />;
}