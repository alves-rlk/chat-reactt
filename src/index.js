import { createRoot } from 'react-dom/client'
import App from './App'
import Global from './style/global.style';

const root = createRoot(document.querySelector('#root'))

root.render(
<>
    <Global />
    <App/>
</>);