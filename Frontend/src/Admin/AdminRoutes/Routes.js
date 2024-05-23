import { lazy } from "react";

// Lazy loading components
const AdminLogin = lazy(() => import("../AdminPages/AdminLoginpage"));
const AdminDashBoard = lazy(() => import("../AdminPages/AdminDashBoard"));
const AdminProduct = lazy(() => import("../AdminPages/AdminProduts"));
const AdminSeller = lazy(() => import("../AdminPages/AdminSellers"));
const AdminUser = lazy(() => import("../AdminPages/AdminUsers"));

// Route configuration
const MainRoute = [
    { path: "/", element: <AdminLogin /> },
    { path: "/admindashboard", element: <AdminDashBoard /> },
    { path: "/adminproduct", element: <AdminProduct /> },
    { path: "/adminseller", element: <AdminSeller /> },
    { path: "/adminuser", element: <AdminUser /> }
];

export default MainRoute;
