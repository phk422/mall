import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装router
Vue.use(VueRouter)

// 懒加载
const Home = () => import('views/home/Home')
const ShopCart = () => import('views/shopcart/ShopCart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')

// 创建对象
const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/shopcart',
		component: ShopCart
	},
	{
		path: '/profile',
		component: Profile
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

// 导出
export default router
