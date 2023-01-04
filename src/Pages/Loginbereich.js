import { useEffect, useNavigate } from "react";

const Loginbereich = ({login}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if (!login)
            {navigate.push('/');
            }
            },[login,navigate]);
    return (
      
            <h1>Loginseite</h1>
       
    )
};
export default Loginbereich;