import { createWebHistory,createRouter } from "vue-router";
import ProductsListPage from './pages/ProductsListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserInfoPage from './pages/UserInfoPage';
import EmployeeOfTheMonthPage from './pages/EmployeeOfTheMonthPage';
const routes=[
    {path:'/', component:ProductsListPage},
    {path:'/products/:id',  component:ProductDetailPage},
    {path:'/cart', component: ShoppingCartPage},
    {path:'/user-info', component: UserInfoPage},
    {path:'/employee',component:EmployeeOfTheMonthPage},
];

const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router;