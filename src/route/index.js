import Index from '../pages/Index'
import NotFound from '../pages/NotFound'
import Article from '../pages/Article'
import Manager from '../pages/Manager'
import Review from '../pages/Review'
import { useRoutes } from 'react-router-dom'

const routes = [{
    path: '/',
    element: <Index />,
    children: [{
        path: 'article',
        element: <Article />
    }, {
        path: 'manager',
        element: <Manager />
    }, {
        index: true,
        element: <Review />
    }]
}, {
    path: '*',
    element: <NotFound />
}]

function RouterWrap() {
    return useRoutes(routes)
}

export default RouterWrap
