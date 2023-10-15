import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Index from "./components/index"
import Show from "./components/show"
import Formc from "./components/form"
import {indexLoader, showLoader} from "./loaders"
import { createAction , updateAction, deleteAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="discussions/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction} />
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
            <Route path='/createadiscussion' element={<Formc/>}/>
    </Route>
))

export default router