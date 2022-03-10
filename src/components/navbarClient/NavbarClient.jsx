import { BottomNavigation, BottomNavigationAction} from "@mui/material";
import { useState } from "react";

import Basket from "./basket.svg"
import Egg from "./egg-fried.svg"
import Credit from "./credit-card.svg"



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
        <BottomNavigationAction label="Pago" img={<Credit />} />
        <BottomNavigationAction label="Menu" img={<Egg />} />
        <BottomNavigationAction label="Cesta" img={<Basket />} />
    </BottomNavigation> 
                   
)
}
export default NavbarClient