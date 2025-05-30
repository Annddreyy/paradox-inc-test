import React from 'react';
import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/common/Loading/Loading';
import RegistrationForm from './components/pages/Registration/RegistrationForm';
import Tasks from './pages/Tasks/Tasks';
import Page404 from './pages/404/Page404';
const AuthorizationForm = React.lazy(
    () => import('./components/pages/Authorization/AuthorizationForm'),
);

const App: React.FC = () => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Tasks />
                    </React.Suspense>
                }
            ></Route>
            <Route
                path={'/auth'}
                element={
                    <React.Suspense fallback={<Loading />}>
                        <AuthorizationForm />
                    </React.Suspense>
                }
            ></Route>
            <Route
                path={'/registration'}
                element={
                    <React.Suspense fallback={<Loading />}>
                        <RegistrationForm />
                    </React.Suspense>
                }
            ></Route>
            <Route
                path={'/tasks'}
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Tasks />
                    </React.Suspense>
                }
            ></Route>
            <Route
                path={'*'}
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Page404 />
                    </React.Suspense>
                }
            ></Route>
        </Routes>
    );
};

export default App;
