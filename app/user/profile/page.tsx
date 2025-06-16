import { Metadata } from "next";

// This SessionProvider is used to provide the session to the <ProfileForm> in this page
// Then the <ProfileForm> can call `const { data: session, update } = useSession();`
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

import ProfileForm from "./profile-form";

export const metadata: Metadata = {
  title: "Customer Profile",
};

const Profile = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="h2-bold">Profile</h2>
        <ProfileForm />
      </div>
    </SessionProvider>
  );
};

export default Profile;
