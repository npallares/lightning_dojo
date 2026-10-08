import Blits from '@lightningjs/blits'

import Home from './pages/Home'
import Details from './pages/Details';

export default Blits.Application({
  template: `
    <Element>
      <RouterView />
    </Element>`,
  routes: [
    {
      path: "/",
      component: Home,
      options: {
        keepAlive: true,
      },
    },
    {
      path: "/movie/:id",
      component: Details,
    },
  ],
});
