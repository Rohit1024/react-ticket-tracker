import { Navigate } from "react-router-dom";
import { useUser } from "reactfire";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserAccountForm } from "@/components/auth/user-account-form";

export function Account() {
  const { data: user } = useUser();
  if (!user) return <Navigate to="/signin" />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Info</CardTitle>
        <CardDescription>Manage your Profile Info here</CardDescription>
      </CardHeader>
      <CardContent>
        <UserAccountForm user={user} />
      </CardContent>
    </Card>
  );
}
