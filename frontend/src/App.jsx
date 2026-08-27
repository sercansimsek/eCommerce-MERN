import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./screens/HomeScreen";

import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};
