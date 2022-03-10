import { BottomNavigation, BottomNavigationAction} from "@mui/material";
import { useState } from "react";
import { ReactComponent as Basket } from './basket.svg';
import { ReactComponent as Credit } from './credit-card.svg';
import { ReactComponent as Egg } from './egg-fried.svg';
import "./NavbarClient.css"

 

const NavbarClient = () => {
 
    const [value, setValue] = useState(0);

return (
    
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        
    >
        <BottomNavigationAction label="Pago" icon={  <Credit />} />
        <BottomNavigationAction label="Menu" icon={<Egg />} />
        <BottomNavigationAction label="Cesta" icon={<Basket />} />
    </BottomNavigation> 
                   
)
}
export default NavbarClient