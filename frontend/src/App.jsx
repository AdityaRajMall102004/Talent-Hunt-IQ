import './App.css'
import {SignedIn, SignedOut,SignInButton, SignOutButton, UserButton} from "@clerk/clerk-react";
function App() {
  return (
    <>
     <header>
      <h1>Welcome to TalentHunt</h1>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
};
export default App
