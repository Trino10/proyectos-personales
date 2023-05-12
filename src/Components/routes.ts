
import { ContactoPage, MerchanPage, NskPage, SobreNskPage } from "../Pages";

type TSXComponent = () => JSX.Element;


interface Route {
    path: string;
    component: TSXComponent;
    name: string;
    children?:Route[]
}

export const routes: Route[] = [
    {
        path: '/nskshop',
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
        component: SobreNskPage,
        name: 'Sobre Nsk'
    },
    {
        path: '/contacto',
        component: ContactoPage,
        name: 'Contacto'
    },

]

