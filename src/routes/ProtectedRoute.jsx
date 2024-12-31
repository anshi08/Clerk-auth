import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn, useClerk } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  // Using the useClerk hook to get the signOut method
  const { signOut } = useClerk();

  // sign out button
  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      {/* Render children if the user is signed in */}
      <SignedIn>
        {children}
        <button onClick={handleSignOut}>Sign Out</button>
      </SignedIn>
      
      {/* Redirect to sign-in if the user is signed out */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;
