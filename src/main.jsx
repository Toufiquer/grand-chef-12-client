import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/router";

// Import Swiper styles
import "swiper/css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
//import 
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
