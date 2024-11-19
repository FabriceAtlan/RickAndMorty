import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';

const router = createBrowserRouter([
	{
		element: <App/>,
		children : [
			{
				path: '/',
				element: <Home/>
			},
			{
				path: '/about',
				element: <About/>
			}
		]
	}
]);

export default router;
