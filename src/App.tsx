import React from 'react';
import { Truck, Phone, Clock, Shield, MapPin, Mail, Package, Users, BarChart, Smartphone, Building, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
            alt="Transport logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-white">
            <Truck className="h-8 w-8" />
            <span className="text-2xl font-bold">EcoMove</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#process" className="hover:text-blue-400 transition">Processus</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#users" className="hover:text-blue-400 transition">Utilisateurs</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            La Solution Intelligente pour vos Livraisons
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Connectez-vous avec des transporteurs professionnels et suivez vos livraisons en temps réel
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              Demander un Devis
            </a>
            <a
              href="#process"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Découvrir Comment ça Marche
            </a>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Comment ça Marche</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <Package className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Commande</h3>
              <p className="text-gray-600 text-center">
                Créez votre demande de livraison en quelques clics
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <Users className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Attribution</h3>
              <p className="text-gray-600 text-center">
                Un transporteur professionnel est assigné à votre livraison
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <Smartphone className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Suivi</h3>
              <p className="text-gray-600 text-center">
                Suivez votre livraison en temps réel sur l'application
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Livraison</h3>
              <p className="text-gray-600 text-center">
                Confirmation de livraison et évaluation du service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Users Section */}
      <section id="users" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Une Solution pour Chaque Utilisateur</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Package className="h-16 w-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Expéditeurs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Création rapide de demandes de livraison</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Suivi en temps réel des colis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Historique des livraisons</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Support client intégré</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Truck className="h-16 w-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Transporteurs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Tableau de bord professionnel</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Optimisation des tournées</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Suivi des gains en temps réel</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Assistance technique dédiée</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Building className="h-16 w-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Entreprises</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Gestion multi-comptes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Facturation automatisée</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Rapports détaillés</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>API disponible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Fonctionnalités Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Application Mobile</h3>
              <p className="text-gray-600">
                Gérez vos livraisons depuis votre smartphone avec notre application intuitive
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BarChart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analyses Détaillées</h3>
              <p className="text-gray-600">
                Suivez vos performances et optimisez vos opérations avec nos outils d'analyse
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sécurité Garantie</h3>
              <p className="text-gray-600">
                Vos données et transactions sont protégées par les dernières technologies de sécurité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Envoyer
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">123 Rue du Commerce, 75001 Paris</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@ecomove.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6" />
                <span className="text-xl font-bold">EcoMove</span>
              </div>
              <p className="text-gray-400">
                La solution intelligente pour la gestion de vos livraisons
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#process" className="text-gray-400 hover:text-white transition">Processus</a></li>
                <li><a href="#users" className="text-gray-400 hover:text-white transition">Utilisateurs</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Fonctionnalités</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires</h3>
              <p className="text-gray-400">
                Lundi - Vendredi: 8h00 - 18h00<br />
                Samedi: 9h00 - 12h00<br />
                Dimanche: Fermé
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoMove. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;