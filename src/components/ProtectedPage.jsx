import React, { useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

const ProtectedPage = () => {
  // Using the useUser hook from Clerk
  const { isSignedIn, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Log the values of isLoaded and isSignedIn
    console.log('isLoaded:', isLoaded);
    console.log('isSignedIn:', isSignedIn);

    // Wait until Clerk session is fully loaded
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded, isSignedIn]); // Adding isSignedIn to the dependency array

  if (loading) {
    // Display loading message while Clerk is loading session info
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // If user is not signed in, redirect to sign-in page
    return <RedirectToSignIn />;
  }

  return (
    <div>
      {/* Display protected content */}
      Welcome to the protected page, you are logged in!
    </div>
  );
};

export default ProtectedPage;
