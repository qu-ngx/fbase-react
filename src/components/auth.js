import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const logout = async () => {
        try {
            await signOut(auth);
            alert("Log Out Successfully");
        } catch (err) {
            console.log(err);
            alert("Nobody to log out");
        }

    }


    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert(`Signed In`);
        } catch (err) {
            console.error(err);
        }

    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert(`Signed In`);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>

            <input
                placeholder="Email.."
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="Password.."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}> Sign In </button>

            <button onClick={signInWithGoogle}> Sign In With Google</button>

            <button onClick={logout}> Sign Out</button>

        </div>
    );
}