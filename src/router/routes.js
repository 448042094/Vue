import Tabbar from '@/components/Tabbar'

const Home = () => import('@/pages/Home')
const Cart = () => import('@/pages/Cart')
const Mall = () => import('@/pages/Mall')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Mine = () => import('@/pages/Mine')
const Details = () => import('@/pages/Details')

const routes = [
  {
    path: '/',
    redirect: '/name'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      tabbar: Tabbar
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      tabbar: Tabbar
    }
  },
  {
    path: '/mall',
    name: 'mall',
    components: {
      default: Mall,
      tabbar: Tabbar
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      default: Register
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      tabbar: Tabbar
    }
  },
  {
    path: '/details',
    name: 'details',
    components: {
      default: Details
    }
  }
]

export default routes
