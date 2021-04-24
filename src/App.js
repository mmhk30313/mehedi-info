import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import WhatsAppWidget from 'react-whatsapp-widget';
import Navigation from './Components/Navigation/Navigation';
// import 'react-whatsapp-widget/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
    return (
    <div className="App">
      <Navigation/>
        
            {/* <MessengerCustomerChat pageId="109101847984556" appId="481173423298646" />
            <WhatsAppWidget textReplyTime='Typically replies within a day' phoneNumber='+8801521108858' companyName="Md. Mehedi Hasan Khan" message="Hello! 👋🏼 What can I do for you?" sendButton="Send" /> */}
    </div>
  );
}

export default App;
