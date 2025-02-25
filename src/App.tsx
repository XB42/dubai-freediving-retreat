import React, { useEffect, useState } from 'react';
import { Anchor, Calendar, Clock, Instagram, MapPin, Menu, Phone, Trophy, Users, Waves, X } from 'lucide-react';

const images = {
  hero1: 'https://i.imgur.com/c0GvcYj.jpeg',
  hero2: 'https://i.imgur.com/4aflP0A.jpeg',
  hero3: 'https://i.imgur.com/4hH6GQr.jpeg',
  hero4: 'https://i.imgur.com/nLlx55m.png',
  host: 'https://i.imgur.com/8qqAsIK.jpeg',
  instructor: 'https://i.imgur.com/gtvTuJN.jpeg',
  smruti: 'https://i.imgur.com/Dv8PT8s.png'
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Navbar */}
      <div className="fixed w-full z-50">
        {/* Competition Banner */}
        <div className="bg-blue-600 text-white py-1.5 px-4 text-center text-sm font-semibold">
          AIDA INDIA OPEN FREEDIVING COMPETITION: May 16, 17 2025
        </div>
        <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}
              >
                freediving.in
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {[
                  ['Schedule', 'itinerary'],
                  ['Host', 'about'],
                  ['Book Now', 'contact']
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'} transition-colors`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden ${isScrolled ? 'text-blue-900' : 'text-white'}`}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden bg-white absolute left-0 right-0 shadow-lg">
                <div className="px-4 py-2 space-y-2">
                  {[
                    ['Schedule', 'itinerary'],
                    ['Host', 'about'],
                    ['Book Now', 'contact']
                  ].map(([label, id]) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <header id="hero" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-950 leading-tight mb-6">
              Compete in the first AIDA INDIA OPEN FREEDIVING COMPETITION
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              An exclusive experience for Indian freedivers to participate in an official AIDA competition! Only a 2 hour flight away in Dubai, UAE. On May 15-18 2025
            </p>
            <a
              href="https://wa.me/917738846334?text=Im%20interested%20to%20compete%20in%20Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 rounded-full transition-colors"
            >
              <Phone className="mr-2" /> Book on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={images.hero1} 
                alt="Freediving experience in Dubai - Training session"
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
              <img 
                src={images.hero2} 
                alt="Advanced freediving techniques - Deep diving practice"
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={images.hero3} 
                alt="Professional freediving competition in Dubai"
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
              <img 
                src={images.hero4} 
                alt="Underwater freediving training session"
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Inclusions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-blue-900">What's Included</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6">
            {[
              {
                title: "Visa & Flights Assistance",
                icon: "✈️"
              },
              {
                title: "AIDA UAE Membership",
                icon: "🏅"
              },
              {
                title: "Stay, Meals & Training",
                icon: "🏠"
              },
              {
                title: "Competition Fees",
                icon: "🏆"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700 text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Itinerary</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {[
              {
                day: "Thursday, May 15 – Arrival",
                events: [
                  {
                    icon: "✈️",
                    title: "Arrival in Dubai",
                    time: "Night",
                    location: "Dubai International Airport"
                  },
                  {
                    icon: "🚗",
                    title: "Transfer to Accommodation",
                    time: "Night",
                    location: "Hotel/Villa check-in"
                  }
                ]
              },
              {
                day: "Friday, May 16 – Pool Competition",
                events: [
                  {
                    icon: "🏊‍♂️",
                    title: "Pool Disciplines",
                    time: "All Day",
                    location: "Pool competition area",
                    details: [
                      "Static Apnea (STA)",
                      "Dynamic Apnea (DYN)",
                      "Dynamic No Fins (DNF)",
                      "Dynamic Bi-Fins (DYNB)"
                    ]
                  },
                  {
                    icon: "🏆",
                    title: "Pool Disciplines Awards",
                    time: "Evening",
                    location: (
                      <a 
                        href="http://www.hamdansc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Hamdan Sports Complex
                      </a>
                    )
                  }
                ]
              },
              {
                day: "Saturday, May 17 – Depth Competition",
                events: [
                  {
                    icon: "🌊",
                    title: "Depth Disciplines",
                    time: "All Day",
                    location: (
                      <a 
                        href="https://deepdivedubai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Deep Dive Dubai
                      </a>
                    ),
                    details: [
                      "Constant Weight No Fins (CNF)",
                      "Constant Weight (CWT)",
                      "Constant Weight Bi-Fins (CWTB)",
                      "Free Immersion (FIM)"
                    ]
                  },
                  {
                    icon: "🏆",
                    title: "Trophy and Medal Ceremony",
                    time: "Evening",
                    location: (
                      <a 
                        href="https://deepdivedubai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Deep Dive Dubai
                      </a>
                    )
                  }
                ]
              },
              {
                day: "Sunday, May 18 – Departure",
                events: [
                  {
                    icon: "✈️",
                    title: "Check-out & Departure",
                    time: "Morning",
                    location: "Dubai International Airport"
                  }
                ]
              }
            ].map((day, dayIndex) => (
              <div key={dayIndex} className="mb-12">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">{day.day}</h3>
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="relative flex items-start ml-16">
                      <div className="absolute -left-12 w-8 h-8 bg-white rounded-full border-2 border-blue-400 flex items-center justify-center">
                        <span>{event.icon}</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium text-blue-900">{event.title}</h4>
                          <span className="text-sm text-blue-600">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                        {event.details && (
                          <div className="mt-2 border-t pt-2">
                            <p className="text-sm text-gray-600 mb-1">Available Disciplines:</p>
                            <ul className="grid grid-cols-2 gap-1">
                              {event.details.map((detail, index) => (
                                <li key={index} className="text-sm text-gray-700">• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Participation Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 rounded-r">
            <p className="text-yellow-700">
              <strong>Important Note:</strong> Each participant can only compete in a maximum of 2 disciplines per day to ensure optimal performance and safety.
            </p>
          </div>
        </div>
      </section>

      {/* About Host Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Meet Your Guides</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Bux Khurana */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src={images.host}
                  alt="Bux Khurana - Freediving Champion"
                  className="rounded-lg shadow-xl object-cover aspect-[3/4] w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Bux Khurana</h3>
                <p className="text-gray-700 mb-6">
                  India's current National Record holder with a 77m CWT Personal Best, 
                  Bux Khurana is passionate about sharing his expertise and helping fellow 
                  freedivers push their limits safely and confidently.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>🏆 National Record Holder</li>
                  <li>🌊 77m CWT Personal Best</li>
                  <li>📚 Certified Freediving Instructor</li>
                  <li>🌏 International Competition Experience</li>
                </ul>
                <a 
                  href="https://www.instagram.com/bux.freediver/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@bux.freediver</span>
                </a>
              </div>
            </div>

            {/* Smruti Mirani */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src={images.smruti}
                  alt="Smruti Mirani - Freediving Instructor"
                  className="rounded-lg shadow-xl object-cover aspect-[3/4] w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Smruti Mirani</h3>
                <p className="text-gray-700 mb-6">
                  Breaking barriers and setting new standards, Smruti is a pioneering figure in Indian freediving. 
                  As the first Indian woman to dive deeper than 40m, she brings both expertise and inspiration 
                  to the freediving community.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>🎯 First Indian woman to dive beyond 40m</li>
                  <li>📚 Certified Freediving Instructor</li>
                  <li>🏅 Featured on TheBetterIndia</li>
                  <li>💫 Inspiring next generation of freedivers</li>
                </ul>
                <a 
                  href="https://www.instagram.com/deepdivewithsmruti/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@deepdivewithsmruti</span>
                </a>
              </div>
            </div>

            {/* Shubham Pandey */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  src="https://i.imgur.com/35QtwOc.png"
                  alt="Shubham Pandey - Competition Safety"
                  className="rounded-lg shadow-xl object-cover aspect-[3/4] w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Shubham Pandey</h3>
                <p className="text-gray-700 mb-6">
                  As the official Safety of the competition, Shubham brings extensive experience 
                  and expertise to ensure all athletes perform at their best under the safest conditions. 
                  His track record of training top Indian athletes speaks to his exceptional skills.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>🛡️ Official Competition Safety</li>
                  <li>📚 Certified Freediving Instructor</li>
                  <li>🎓 Instructor to top Indian athletes</li>
                  <li>🌏 International Competition Experience</li>
                </ul>
                <a 
                  href="https://www.instagram.com/unobreath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@unobreath</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        className="py-12 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.93)), url(${images.hero2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">Investment</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* All-Inclusive Package */}
            <div className="bg-gradient-to-br from-blue-50/90 to-blue-100/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">All-Inclusive Package</h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">Regular Price</p>
                  <span className="text-2xl font-bold text-gray-500 line-through decoration-red-500">₹1,00,000</span>
                </div>
                
                <div className="mb-4">
                  <div className="inline-block bg-blue-600 text-white px-3 py-0.5 rounded-full text-sm mb-2">
                    Early Bird Offer
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Book before April 1, 2025</p>
                  <div className="text-4xl font-bold text-blue-900 mb-1">₹69,999</div>
                  <p className="text-green-600 text-sm font-semibold">Save ₹30,001</p>
                </div>

                <div className="text-gray-600 text-sm mb-6">
                  <p className="font-semibold mb-2">Includes:</p>
                  <div className="space-y-1 text-left">
                    <div>✓ Accommodation</div>
                    <div>✓ All Meals</div>
                    <div>✓ Training Sessions</div>
                    <div>✓ Competition Entry</div>
                    <div>✓ AIDA UAE Membership</div>
                    <div>✓ Visa Assistance</div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917738846334?text=Im%20interested%20in%20the%20all-inclusive%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold bg-green-600 text-white hover:bg-green-700 rounded-full transition-colors"
              >
                <Phone className="mr-2 w-4 h-4" /> Book All-Inclusive
              </a>
            </div>

            {/* Competition Only Package */}
            <div className="bg-gradient-to-br from-blue-50/90 to-blue-100/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Competition Only</h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">Regular Price</p>
                  <span className="text-2xl font-bold text-gray-500 line-through decoration-red-500">₹60,000</span>
                </div>
                
                <div className="mb-4">
                  <div className="inline-block bg-blue-600 text-white px-3 py-0.5 rounded-full text-sm mb-2">
                    Early Bird Offer
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Book before April 1, 2025</p>
                  <div className="text-4xl font-bold text-blue-900 mb-1">₹45,999</div>
                  <p className="text-green-600 text-sm font-semibold">Save ₹14,001</p>
                </div>

                <div className="text-gray-600 text-sm mb-6">
                  <p className="font-semibold mb-2">Includes:</p>
                  <div className="space-y-1 text-left">
                    <div>✓ Competition Entry</div>
                    <div>✓ AIDA UAE Membership</div>
                    <div>✓ Competition Support</div>
                    <div>✓ Visa Assistance</div>
                    <div className="text-gray-400">✗ Accommodation</div>
                    <div className="text-gray-400">✗ Meals</div>
                    <div className="text-gray-400">✗ Training Sessions</div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917738846334?text=Im%20interested%20in%20the%20competition-only%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold bg-green-600 text-white hover:bg-green-700 rounded-full transition-colors"
              >
                <Phone className="mr-2 w-4 h-4" /> Book Competition Only
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images.hero3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Dive Deeper?</h2>
          <p className="text-xl mb-8">
            Secure your spot and join an elite group of Indian freedivers for an unforgettable underwater adventure!
          </p>
          <a
            href="https://wa.me/917738846334?text=Im%20interested%20to%20compete%20in%20Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 rounded-full transition-colors"
          >
            <Phone className="mr-2" /> Book on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-950 text-blue-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="https://www.instagram.com/bux.freediver/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@bux.freediver</span>
              </a>
              <a 
                href="https://www.instagram.com/deepdivewithsmruti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@deepdivewithsmruti</span>
              </a>
              <a 
                href="https://www.instagram.com/unobreath/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@unobreath</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;