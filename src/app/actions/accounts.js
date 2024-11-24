"use server";
import db  from "../modules/db";
import {redirect} from 'next/navigation';
import { revalidatePath } from 'next/cache'


export const createNewAccount = async (formData) => {
    const name = formData.get('name');
  const account = await db.account.create({
    data: { name },
  });

  revalidatePath(`/accounts/${account.id}`);
};


export async function updateAccount(formData) {
    try {
        
      const name = formData.get('name')
      const id = formData.get('id')
      const account = await db.account.update({
        where: { id },
        data: { name },
      })
      console.log(account);

      revalidatePath(`/accounts/${account.id}`)
      
    //   revalidate(`/accounts/${account.id}`)
    } catch (error) {
      throw new Error('Failed to update account')
    }
  }

export async function deleteAccount(formData) {
    try {
        const id = formData.get('id')
        await db.account.delete({
            where: { id }
        })
        revalidatePath(`accounts/${id}`)
    } catch (error) {
        throw new Error('Failed to delete account')
    }
}


export async function getAccounts() {
    try {
        const accounts = await db.account.findMany({
            select: { id: true, name: true },
            orderBy: { name: 'asc' }
        })
        return accounts
    } catch (error) {
        throw new Error('Failed to load accounts')
    }
}

export async function getAccount(id) {
    try {
        const account = await db.account.findUnique({
            where: { id }
        })
        return account
    } catch (error) {
        throw new Error('Failed to load account')
    }
}

