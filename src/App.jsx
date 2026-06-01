import AppRoutes from "./routes/AppRoutes";
import AuthEffects from "./components/auth/AuthEffects/AuthEffects";

function App() {
  return (
    <>
      <AuthEffects />
      <AppRoutes />
    </>
  );
}

export default App;