import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navigate, useLocation } from "react-router-dom";
import { uiConfig, auth } from "../lib/firebase";

function FirebaseLogin() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // 現在のURLの確認(無限ループ防止)
  const location = useLocation();
  const isOnLoginPage = location.pathname === "/login";

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // 本来いるページと異なる場合はNavigateを返す
  if (!isSignedIn && !isOnLoginPage) return <Navigate replace to="/login" />;
  if (isSignedIn && isOnLoginPage) return <Navigate replace to="/" />;

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
      <div onClick={() => auth.signOut()}>Sign-out</div>
    </div>
  );
}

export default FirebaseLogin;
