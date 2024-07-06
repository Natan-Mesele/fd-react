import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import { RestaurantDetail } from './component/Restaurant/RestaurantDetail';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
         {/* <Navbar/> */}
         {/* <Home/> */}
         {/* <RestaurantDetail/> */}
         {/* <Cart/> */}
         {/* <Profile/> */}
         <CustomerRoute/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
