import "../styles/globals.css";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "@material-tailwind/react/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
