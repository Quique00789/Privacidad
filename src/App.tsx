import React, { useState, useEffect } from 'react';
import { Shield, X, Eye, Leaf, Heart, Globe, Lock, User } from 'lucide-react';

function App() {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const hasAccepted = localStorage.getItem('privacyAccepted');
    if (hasAccepted) {
      setAcceptedPrivacy(true);
      setShowLogin(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setAcceptedPrivacy(true);
    setShowLogin(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate credentials against a backend
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const PrivacyContent = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Política de Privacidad Detallada</h3>
      
      <section className="space-y-2">
        <h4 className="font-medium text-gray-700">1. Marco Legal y Normativo</h4>
        <p className="text-gray-600">
          Este aviso de privacidad se rige por las siguientes leyes y normativas:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Ley General de Protección de Datos Personales de México</li>
          <li>Ley de Propiedad Industrial</li>
          <li>Ley Federal de Derechos de Autor</li>
          <li>Ley Federal de Datos Personales en Posesión de Particulares</li>
          <li>Código Penal Federal</li>
          <li>Ley General de Transparencia y Acceso a la Información</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h4 className="font-medium text-gray-700">2. Recopilación y Uso de Información</h4>
        <p className="text-gray-600">
          Recopilamos información personal limitada que incluye:
          - Datos de uso del sitio web
          - Preferencias de usuario
          - Información técnica de su dispositivo
        </p>
      </section>

      <section className="space-y-2">
        <h4 className="font-medium text-gray-700">3. Deslinde de Responsabilidad Legal</h4>
        <p className="text-gray-600">
          El uso del software y servicios proporcionados está sujeto a las siguientes condiciones:
          - El usuario asume la responsabilidad por el uso del software
          - No nos hacemos responsables por daños directos o indirectos
          - El software se proporciona "tal cual" sin garantías de ningún tipo
        </p>
      </section>

      <section className="space-y-2">
        <h4 className="font-medium text-gray-700">4. Confidencialidad de la Información</h4>
        <p className="text-gray-600">
          Nos comprometemos a mantener la confidencialidad de su información mediante:
          - Protocolos de seguridad avanzados
          - Acceso restringido a datos personales
          - Políticas internas de manejo de información
        </p>
      </section>

      <section className="space-y-2">
        <h4 className="font-medium text-gray-700">5. Normatividad Internacional</h4>
        <p className="text-gray-600">
          Cumplimos con estándares internacionales de seguridad y privacidad, incluyendo:
          - GDPR (Reglamento General de Protección de Datos de la UE)
          - Estándares ISO de seguridad de la información
          - Mejores prácticas internacionales de protección de datos
        </p>
      </section>

      <section className="space-y-2">
        <h4 className="font-medium text-gray-700">6. Derechos ARCO</h4>
        <p className="text-gray-600">
          De acuerdo con la legislación mexicana, usted tiene los siguientes derechos:
          - Acceso a sus datos personales
          - Rectificación de sus datos
          - Cancelación de su información
          - Oposición al tratamiento de sus datos
        </p>
      </section>
    </div>
  );

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Sostenibilidad",
      description: "Comprometidos con el medio ambiente y prácticas sostenibles para un futuro mejor.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compromiso Social",
      description: "Trabajamos por el bienestar de nuestra comunidad y el desarrollo social.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Alcance Global",
      description: "Conectando personas y servicios alrededor del mundo.",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Privacy Policy Modal */}
      {!acceptedPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Aviso de Privacidad</h2>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => window.close()}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Al utilizar nuestro sitio web, usted acepta nuestra política de privacidad 
                y el uso de cookies para mejorar su experiencia de navegación.
              </p>
              
              <p className="text-gray-600">
                Recopilamos información personal limitada para proporcionarle 
                una mejor experiencia de usuario y mejorar nuestros servicios.
              </p>

              <button
                onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
              >
                <Eye className="w-4 h-4" />
                <span>{showPrivacyDetails ? 'Ocultar detalles' : 'Ver política completa'}</span>
              </button>

              {showPrivacyDetails && (
                <div className="mt-4 bg-gray-50 rounded-lg">
                  <div className="max-h-60 overflow-y-auto p-4 custom-scrollbar">
                    <PrivacyContent />
                  </div>
                </div>
              )}

              <div className="border-t pt-4">
                <button
                  onClick={handleAccept}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg 
                           hover:bg-blue-700 transition duration-200"
                >
                  Aceptar y Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && !isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Iniciar Sesión</h2>
              </div>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="pl-10 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="usuario@ejemplo.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="pl-10 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg 
                         hover:bg-blue-700 transition duration-200"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Content - Only visible after logging in */}
      {isLoggedIn && (
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Innovación y Compromiso
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformando el futuro a través de soluciones sostenibles y tecnología innovadora
            </p>
          </header>

          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -skew-y-6"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Hero"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl animate-fade-in"
              />
            </div>
          </div>

          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 animate-fade-in stagger-delay-${index + 1}`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </main>

          <section className="bg-white rounded-lg shadow-lg p-8 animate-slide-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
              Nos dedicamos a crear un impacto positivo en la sociedad a través de la innovación
              tecnológica y el compromiso con la sostenibilidad. Trabajamos incansablemente
              para construir un futuro mejor para las próximas generaciones.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;