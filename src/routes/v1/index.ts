import express from "express";
import userRoute from "./user";

const router = express.Router();
//http://localhost:3000/v1/user/all
const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
