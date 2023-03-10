import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('.root'));
router.setRoutes([
    { path: '/', redirect: '/login' },
    { path: '/login', component: 'login-page' },
    { path: '/signup', component: 'signup-page' },
    { path: '/select', component: 'select-page' },
    { path: '/chat', component: 'chat-page' }
]);