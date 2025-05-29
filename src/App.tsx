import React from 'react';
import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/common/Loading/Loading';
import RegistrationForm from './components/pages/registration/RegistrationForm';
const AuthorizationForm = React.lazy(
    () => import('./components/pages/authorization/AuthorizationForm'),
);

const App: React.FC = () => {
    return (
        <Routes>
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
        </Routes>
    );
};

export default App;
