
import { ContactoPage, MerchanPage, NskPage, TablaPage } from "../Pages";
import { BackEndPage } from "../Pages/backend/BackEndPage";


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
        path: '/contacto',
        component: ContactoPage,
        name: 'BackEnd'
    },
    {
        path: '/BackEnd',
        component: BackEndPage,
        name: 'Login'
    }

]

