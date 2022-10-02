import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./css/App.css";
import "./css/Home.css";
import { RouterConfig } from "./RouterConfig";
// For test
// import { auth } from "./lib/firebase";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="phone_size">
        <ChakraProvider>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </ChakraProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
