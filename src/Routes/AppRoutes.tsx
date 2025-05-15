import Landing from "../Pages/Landing";
import ChatPage from "../Pages/ChatPage";
import {  Routes, Route } from 'react-router-dom';


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/chatpage" element={<ChatPage/>}/>
        </Routes>
    )
}

export default AppRoutes