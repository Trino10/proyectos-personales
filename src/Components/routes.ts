
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
        component: NskPage,
        name: 'Nsk Shop'
    },
    {
        path: '/merchan',
        component: MerchanPage,
        name: 'Merchan'
    },
    {
        path: '/sobrensk',
        component: TablaPage,
        name: 'Tabla'
    },
    {
        path: '/backend',
        component: BackEndPage,
        name: 'Backend'
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'Login'
    }

]

