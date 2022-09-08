import { DiagnosticServices } from "components/DiagnosticServices";
import { Faq } from "components/Faq";
import { InfrastructureDetails } from "components/InfrastructureDetails";
import { MyProfile } from "components/MyProfile";
import { PaymentDetails } from "components/PaymentDetails";
import { ProfileDetails } from "components/ProfileDetails";
import { ProfileVerification } from "components/ProfileVerification";
import { StaffDetails } from "components/StaffDetails";
import { Verification } from "components/Verification";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verification" element={<Verification />} />

        <Route path="/home" element={<Home />}>
          <Route path="/home/my-profile" element={<MyProfile />} />
          <Route path="/home/profile-details" element={<ProfileDetails />} />
          <Route
            path="/home/profile-verification"
            element={<ProfileVerification />}
          />
          <Route
            path="/home/infrastructure-details"
            element={<InfrastructureDetails />}
          />
          <Route
            path="/home/diagnostic-services"
            element={<DiagnosticServices />}
          />
          <Route path="/home/staff-details" element={<StaffDetails />} />
          <Route path="/home/payment-details" element={<PaymentDetails />} />
          <Route path="/home/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
