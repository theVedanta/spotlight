import Google from "../components/Google";

const Auth = ({ setAuthed, setUser, authed }) => {
    return authed === "check" ? (
        <>Loading...</>
    ) : !authed ? (
        <>
            <Google setAuthed={setAuthed} setUser={setUser} />
        </>
    ) : (
        <>Loading...{(window.location.href = "/")}</>
    );
};

export default Auth;
