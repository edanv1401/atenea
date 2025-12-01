import { ReactNode, useEffect, useState } from "react";
import { Moon, Sun, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Layout({
  children,
  isDark,
  toggleTheme,
}: {
  children: ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    // Add comprehensive transition classes for smooth theme change
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease';
    
    // Add transitions to all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: background-color 0.5s ease, 
                   color 0.5s ease, 
                   border-color 0.5s ease, 
                   background 0.5s ease,
                   box-shadow 0.5s ease !important;
      }
      .transition-none * {
        transition: none !important;
      }
    `;
    
    // Remove existing theme transition styles if any
    const existingStyle = document.getElementById('theme-transitions');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    style.id = 'theme-transitions';
    document.head.appendChild(style);
    
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Cleanup function
    return () => {
      const styleElement = document.getElementById('theme-transitions');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [isDark]);

  useEffect(() => {
    // Check for active session
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!token && !!user);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative z-20 border-b border-white/10 bg-background/60 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">Atenea</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              🦉 Sabiduría para programadores modernos
            </span>
          </div>
          <nav className="flex flex-1 items-center justify-end gap-4 text-sm text-muted-foreground">
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-foreground ${isActive ? "text-foreground" : ""}`
                  }
                  end
                >
                  🏛️ Inicio
                </NavLink>
                <NavLink
                  to="/cursos"
                  className={({ isActive }) =>
                    `hover:text-foreground ${isActive ? "text-foreground" : ""}`
                  }
                >
                  📚 Cursos
                </NavLink>
                <NavLink
                  to="/retos"
                  className={({ isActive }) =>
                    `hover:text-foreground ${isActive ? "text-foreground" : ""}`
                  }
                >
                  ⚡ Retos
                </NavLink>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                    aria-haspopup="menu"
                    aria-expanded={isProfileMenuOpen}
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Perfil</span>
                  </button>
                  {isProfileMenuOpen ? (
                    <div className="absolute right-0 z-20 mt-2 w-40 rounded-md border bg-popover p-1 text-xs text-popover-foreground shadow-md">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        <span>Configuración</span>
                      </button>
                      <button
                        type="button"
                        className="mt-0.5 flex w-full items-center justify-between rounded px-2 py-1.5 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                        onClick={() => {
                          localStorage.removeItem('token');
                          localStorage.removeItem('user');
                          setIsLoggedIn(false);
                          setIsProfileMenuOpen(false);
                          navigate('/');
                        }}
                      >
                        <span>Cerrar sesión</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90"
                  onClick={() => setIsLoginDialogOpen(true)}
                >
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsRegisterDialogOpen(true)}
                >
                  Registrarse
                </button>
              </div>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden group"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {/* Animated background effect */}
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Icon container with rotation */}
              <span className={`relative transition-all duration-700 ${isDark ? 'rotate-180' : 'rotate-0'} transform-gpu`}>
                <span className={`absolute inset-0 rounded-full ${isDark ? 'bg-yellow-200/20' : 'bg-blue-200/20'} scale-0 transition-all duration-500 ${isDark ? 'scale-150' : 'scale-0'}`}></span>
                {isDark ? (
                  <Sun className="h-4 w-4 relative z-10" />
                ) : (
                  <Moon className="h-4 w-4 relative z-10" />
                )}
              </span>
              
              {/* Pulse effect on theme change */}
              <span className="absolute inset-0 rounded-md border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/30"></span>
            </button>
          </nav>
        </div>
      </header>
      <main className="relative z-10 container py-10">{children}</main>
      
      {/* Login Dialog */}
      {isLoginDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsLoginDialogOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-xl border bg-background p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
            
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Simulate login validation
                if (loginForm.email && loginForm.password) {
                  localStorage.setItem('token', 'demo-token');
                  localStorage.setItem('user', JSON.stringify({ 
                    name: 'Usuario', 
                    email: loginForm.email 
                  }));
                  setIsLoggedIn(true);
                  setIsLoginDialogOpen(false);
                  setLoginForm({ email: '', password: '' });
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-md border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsLoginDialogOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-center text-xs text-muted-foreground">
              ¿No tienes cuenta?{" "}
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => {
                  setIsLoginDialogOpen(false);
                  setIsRegisterDialogOpen(true);
                }}
              >
                Regístrate
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Register Dialog */}
      {isRegisterDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsRegisterDialogOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-xl border bg-background p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Crear cuenta</h2>
            
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Validate passwords match
                if (registerForm.password !== registerForm.confirmPassword) {
                  alert('Las contraseñas no coinciden');
                  return;
                }
                
                // Simulate registration
                if (registerForm.name && registerForm.email && registerForm.password) {
                  localStorage.setItem('token', 'demo-token');
                  localStorage.setItem('user', JSON.stringify({ 
                    name: registerForm.name,
                    email: registerForm.email 
                  }));
                  setIsLoggedIn(true);
                  setIsRegisterDialogOpen(false);
                  setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Confirmar contraseña</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={registerForm.confirmPassword}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                />
              </div>
              
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Crear cuenta
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-md border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsRegisterDialogOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-center text-xs text-muted-foreground">
              ¿Ya tienes cuenta?{" "}
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => {
                  setIsRegisterDialogOpen(false);
                  setIsLoginDialogOpen(true);
                }}
              >
                Inicia sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
