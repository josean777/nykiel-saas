import { Route, Switch } from "wouter";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Team from "./pages/Team";
import Booking from "./pages/Booking";
import PatientDashboard from "./pages/PatientDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/team" component={Team} />
            <Route path="/booking" component={Booking} />
            <Route path="/dashboard/patient" component={PatientDashboard} />
            <Route path="/dashboard/professional" component={ProfessionalDashboard} />
            <Route path="/dashboard/admin" component={AdminDashboard} />
            <Route component={NotFound} />
          </Switch>
          <Toaster />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
