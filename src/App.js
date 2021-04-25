import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import WhatsAppWidget from 'react-whatsapp-widget';
import Navigation from './Components/Navigation/Navigation';
// import 'react-whatsapp-widget/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
export const UserContext = createContext();
function App() {
    const [admin, setAdmin] = useState({});
    return (
    <div className="App">
      <UserContext.Provider value={[admin, setAdmin]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navigation/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
      <MessengerCustomerChat pageId="109101847984556" appId="481173423298646" />
      {/* <WhatsAppWidget textReplyTime='Typically replies within a day' phoneNumber='+8801521108858' companyName="Md. Mehedi Hasan Khan" message="Hello! 👋🏼 What can I do for you?" sendButton="Send" /> */}
    </div>
  );
}

export default App;
