import { createWebHistory, createRouter } from "vue-router";
import Menu from './components//Menu.vue'
import Aos from './components/Menu/Aos.vue'
import Racing from './components/Menu/Racing.vue'
import Mmorpg from './components/Menu//Mmorpg.vue'
import Rhythm from './components/Menu/Rhythm.vue'
import Shooting from './components/Menu/Shooting.vue'
import Fps from './components/Menu/Fps.vue'
import Detail from './components/Detail/Detail.vue'
import Detail1 from './components/Detail/Detail1.vue'
import Detail2 from './components/Detail/Detail2.vue'
import Detail3 from './components/Detail/Detail3.vue'
import Detail4 from './components/Detail/Detail4.vue'
import Detail5 from './components/Detail/Detail5.vue'
import Home from "./components/Home.vue"


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/",
    component: Menu,
  },
  {
    path: "/mmorpg",
    component: Mmorpg,
  },
  {
    path: "/aos",
    component: Aos,
  },
  {
    path: "/racing",
    component: Racing,
  },
  {
    path: "/rhythm",
    component: Rhythm,
  },
  {
    path: "/shooting",
    component: Shooting,
  },
  {
    path: "/fps",
    component: Fps,
  },
  {
    path: "/Detail/:id",
    component: Detail,
  },
  {
    path: "/Detail1/:id",
    component: Detail1,
  },
  {
    path: "/Detail2/:id",
    component: Detail2,
  },
  {
    path: "/Detail3/:id",
    component: Detail3,
  },
  {
    path: "/Detail4/:id",
    component: Detail4,
  },
  {
    path: "/Detail5/:id",
    component: Detail5,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 