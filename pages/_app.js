import UserContentProvider from "../src/context/users.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContentProvider>
      <Component {...pageProps} />
    </UserContentProvider>
  );
}

export default MyApp;
