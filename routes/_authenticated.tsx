// 🚧 Authenticated route guard — protects private routes + role-based redirect
// Source: ADAM business-fe (partial sample for verification)

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { Layout } from "antd";
import { RoleEnum } from "~shared/model";
import { MainHeader } from "~widgets/header";
import { Sidebar } from "~widgets/sidbar/sidebar";

const OPERATOR_HOME = "/operator/kanban";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
  pendingMs: 0,
  beforeLoad: ({ context: { auth, hasRole }, location }) => {
    if (!auth.isAuthenticated) {
      throw redirect({ to: "/auth/sign-in" });
    }
    // Operators may only reach their own pages (+ own profile) — push them home elsewhere.
    const operatorAllowed =
      location.pathname.startsWith("/operator") ||
      location.pathname.startsWith("/profile") ||
      location.pathname.startsWith("/clinic-map") ||
      location.pathname.startsWith("/services") ||
      location.pathname.startsWith("/debts");
    if (hasRole(RoleEnum.OPERATOR) && !operatorAllowed) {
      throw redirect({ to: OPERATOR_HOME });
    }
  },
});

function RouteComponent() {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="min-w-0">
        <MainHeader />
        <Layout.Content
          className="min-w-0"
          style={{ margin: "24px", overflow: "hidden" }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
