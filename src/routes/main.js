import {
  InitialLayout,
  AdminLayout,
  ShopLayout,
  DefaultLayout,
  SettingsLayout
} from 'layouts'

const user = window.localStorage.getItem('userId')

const mainRoutes = [
  { path: `/sellix/${user}/settings`,  name: 'SettingsLayout', component: SettingsLayout },
  { path: `/sellix/${user}`, name: 'AdminLayout', component: AdminLayout },
  { path: '/shop', name: 'ShopLayout', component: ShopLayout },
  { path: '/payment', name: 'PaymentLayout', component: DefaultLayout },
  { path: '/', name: 'InitialLayout', component: InitialLayout }
  
]

export default mainRoutes
