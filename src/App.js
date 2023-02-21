import Header from "./components/Header";
import {Provider} from "react-redux";
import store from "./utils/store";
import Body from "./Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./WatchPage";

const App = () => (
    <Provider store={store}>
        <div>
            <Header/>
            <RouterProvider router={router}>
            <Body/>
            </RouterProvider>
        </div>
    </Provider>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children: [
            {
                path: '/',
                element: <MainContainer />
            },
            {
                path: '/watch',
                element: <WatchPage />
            }
        ]
    }
])

export default App;
