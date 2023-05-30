
import { MerchanPage, NskPage, TablaPage } from "../Pages";
import { BackEndPage } from "../Pages/backend/BackEndPage";
import { LoginPage } from "../Pages/login/LoginPage";


type TSXComponent = () => JSX.Element;


interface Route {
    path: string;
    component: TSXComponent;
    name: string;
    children?:Route[]
}

export const routes: Route[] = [
    
    {
        path: '/',
        component: MerchanPage,
        name: 'Catálogo'
    },
    {
        path: '/tabla',
        component: TablaPage,
        name: 'Tabla'
    },
    {
        path: '/backend',
        component: BackEndPage,
        name: 'Backend'
    },
    {
        path: '/shop',
        component: NskPage,
        name: 'Nsk Shop'
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'Login'
    }

]

