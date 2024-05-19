import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/components/routes/home";
import { SignIn } from "@/components/routes/signin";
import { SignUp } from "@/components/routes/signup";
import { PrivateRoute } from "@/components/protected/protected-route";
import { Dashboard } from "@/components/routes/dashboard";
import { ForgotPassword } from "@/components/routes/forgot-password";
import { Account } from "@/components/routes/account";
import { DashboardLayout } from "./dashboard-layout";
import { Tickets } from "@/components/routes/tickets";
import { CreateTicket } from "@/data-table/create-ticket";
import { UpdateTicketComponent } from "@/data-table/update-ticket";

export function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="tickets" element={<Tickets />}>
            <Route path="new" element={<CreateTicket />} />
            <Route path="edit/:ticketId" element={<UpdateTicketComponent />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
