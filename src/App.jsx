import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./css/App.css";
import "./css/Home.css";
import { RouterConfig } from "./RouterConfig";
// For test
// import { auth } from "./lib/firebase";
import { AuthProvider } from "./contexts/AuthContext";
// import { TestFirebase } from "./test/TestFirebase";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <div className="phone_size">
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
