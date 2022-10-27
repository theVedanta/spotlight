import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BASE_API_URL from "../constants";

function App({ Component, pageProps }) {
    const [authed, setAuthed] = useState("check");
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            try {
                if (localStorage.getItem("authToken")) {
                    const userJson = await fetch(
                        `${BASE_API_URL}/auth?authToken=${localStorage.getItem(
                            "authToken"
                        )}`
                    );
                    const user = await userJson.json();

                    if (user.user) {
                        setAuthed(true);
                        setUser(user.user);
                    } else if (user.expired) {
                        setAuthed(false);
                        localStorage.removeItem("authToken");
                    } else {
                        setAuthed(false);
                        localStorage.removeItem("authToken");
                    }
                } else {
                    setAuthed(false);
                    localStorage.removeItem("authToken");
                }
            } catch (err) {
                setAuthed(false);
                localStorage.removeItem("authToken");
            }
        };

        getUser();
    }, []);

    return (
        <GoogleOAuthProvider clientId="648187133960-4j6he18lentn5dhed1fiiks755gc7d9j.apps.googleusercontent.com">
            <ChakraProvider>
                <Component
                    authed={authed}
                    setAuthed={setAuthed}
                    setUser={setUser}
                    user={user}
                    {...pageProps}
                />
            </ChakraProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
