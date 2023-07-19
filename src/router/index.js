import PlacesToGo from "../views/PlacesToGo"
import ThingsToDo from "../views/ThingsToDo"
import News from "../views/News"
import PlanYourTrip from "../views/PlanYourTrip"
import Login from "../views/Login"
import Register from "../views/Register"
import ForgotPassword from "../views/ForgotPassword"
import Profile from "../views/Profile"
import Admin from "../views/Admin"



const routes = [
  
    {
      path: "/places-to-go",
      name: "PlacesToGo",
      component: PlacesToGo,
      meta: {
        title: "Places to go",
        requiresAuth: false,
      },
    },
    
    {
      path: "/things-to-do",
      name: "ThingsToDo",
      component: ThingsToDo,
      meta: {
        title: "ThingsToDo",
        requiresAuth: false,
      },
    },
    {
      path: "/news",
      name: "News",
      component: News,
      meta: {
        title: "News",
        requiresAuth: true,
      },
    },

    {
        path: "/plan-your-trip",
        name: "PlanYourTrip",
        component: PlanYourTrip,
        meta: {
          title: "Plan your trip",
          requiresAuth: false,
        },
      },

    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: "Login",
        requiresAuth: false,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: {
        title: "Register",
        requiresAuth: false,
      },
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: ForgotPassword,
      meta: {
        title: "Forgot Password",
        requiresAuth: false,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        title: "Profile",
        requiresAuth: true,
      },
    },
    
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        title: "Admin",
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
  ];

  const router = new router({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
  });
  
  router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | FireBlog`;
    next();
  });
  
  router.beforeEach(async (to, from, next) => {
    let user = firebase.auth().currentUser;
    let admin = null;
    if (user) {
      let token = await user.getIdTokenResult();
      admin = token.claims.admin; 
    }
    if (to.matched.some((res) => res.meta.requiresAuth)) {
      if (user) {
        if (to.matched.some((res) => res.meta.requiresAdmin)) {
          if (admin) {
            return next();
          }
          return next({ name: "PlacesToGO" });
        }
        return next();
      }
      return next({ name: "PlacesToGo" });
    }
    return next();
  });
  
  export default router;