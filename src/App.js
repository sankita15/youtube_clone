import Header from "./components/Header";
import {Provider} from "react-redux";
import store from "./utils/store";
import Body from "./Body";

const App = () => (
    <Provider store={store}>
        <div>
            <Header/>
            <Body/>
        </div>
    </Provider>
);

export default App;
