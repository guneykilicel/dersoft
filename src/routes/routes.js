import Home from "../pages/home";
import Login from "../pages/auth/login";
import MainLayout from "../pages/layout";
import AuthLayout from "../pages/auth";
import Register from "../pages/auth/register";

const routes = [
  {
    path: "/turp",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />
      }
    ],
  },
  {
    path: '/turp/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register /> 
        }
    ]
}
];

// const authCheck = routes => routes.map((route) => {
//     if(route?.auth) {
//         route.element = <PrivateRoute>{route.element}</PrivateRoute>
//     }
//     if(route?.children) {
//         route.children = authCheck(route.children)
//     }
//     return route
// })

export default routes;
