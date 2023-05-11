
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
        name: 'nskshop'
    },
    {
        path: '/merchan',
        component: MerchanPage,
        name: 'merchan'
    },
    {
        path: '/sobrensk',
        component: SobreNskPage,
        name: 'sobrensk'
    },
    {
        path: '/contacto',
        component: ContactoPage,
        name: 'contacto'
    },

]

