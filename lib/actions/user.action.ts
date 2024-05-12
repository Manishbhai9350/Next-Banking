"use server";
import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export async function SignUp(userData: SignUpParams) {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUser);
  } catch (error) {
    console.log("Error", error);
  }
}
export async function SignIn({ email, password }: signInProps) {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(session);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.log("error while getting logged user", error);
    return null;
  }
}

export const logoutUser = async () => {
  try {
    const {account} =  await createSessionClient()
    cookies().delete('appwrite-session')
    await account.deleteSession('current')
    return true
  } catch (error) {
    return null
  }
};
