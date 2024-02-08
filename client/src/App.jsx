
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div  >
      {/* <Register/>
        */}
        {/* <Navbar/> */}
        {/* <Login/> */}
        {/* <DashBoard/> */}
        {/* <ListApplications/> */}
        {/* <NewApplication/> */}
{/* <AddStudent/> */}
{/* <AdminLogin/> */}
<ToastContainer position="top-center" />
<AuthProvider>
      <Routes />
    </AuthProvider>
    </div>
  )
}

export default App
