import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import './index.css'
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <FluentProvider theme={teamsLightTheme}>
    <RouterProvider router={routes} />
  </FluentProvider>
)
