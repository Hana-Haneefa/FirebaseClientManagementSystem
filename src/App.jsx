import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { onAuthStateChanged, signOut } from 'firebase/auth'

import {auth} from './firebase'
import Login from './pages/LoginPage'
import Dashboard from './pages/DashboardPage'

const ADMIN_UID = import.meta.env.VITE_ADMIN_UID;

function ProtectedRoute({children}){
  const [status, setStatus] = useState("checking");

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      if (!currentUser){
        setStatus("unauthenticated");
        return;
      }

      if(!ADMIN_UID || currentUser.uid !== ADMIN_UID){
        signOut(auth).catch(console.error).finally(()=> setStatus("unauthenticated"));
        return;
      }

      setStatus("authenticated")
    });
    return unsubscribe;
  }, []);

  if(status === 'checking'){
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        Checking login...
      </div>
    );
  }

  if (status !== 'authenticated'){
    return <Navigate to='/login' replace />
  }

  return children;
}

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>

      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
    </Routes>
  </BrowserRouter>
 )
}

export default App
