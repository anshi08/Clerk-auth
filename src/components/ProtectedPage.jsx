import React, { useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

const ProtectedPage = () => {

  const { isSignedIn, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log('isLoaded:', isLoaded);
    // console.log('isSignedIn:', isSignedIn);

    //wait for session loaded
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded, isSignedIn]); 

  if (loading) {
    
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // If user is not signed in, redirect to sign-in page
    return <RedirectToSignIn />;
  }

  return (
    <div>
      Welcome to the protected page, you are logged in!
    </div>
  );
};

export default ProtectedPage;
