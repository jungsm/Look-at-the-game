import { createWebHistory, createRouter } from "vue-router";
import Aos from './components/Menu/Aos.vue'
import Racing from './components/Menu/Racing.vue'
import Mmorpg from './components/Menu//Mmorpg.vue'
import Rhythm from './components/Menu/Rhythm.vue'
import Shooting from './components/Menu/Shooting.vue'
import Fps from './components/Menu/Fps.vue'


const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 