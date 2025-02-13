import React, { useEffect, useState } from 'react';
import { Anchor, Calendar, Clock, Instagram, MapPin, Menu, Trophy, Users, Waves, X } from 'lucide-react';

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
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

      {/* Hero Section */}
      <header id="hero" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-950 leading-tight mb-6">
              Freediving retreat for India
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              An exclusive experience for Indian freedivers including training, guest lectures, official AIDA competition and a lot of fun! Only a 2 hour flight away in Dubai, UAE.
            </p>
            <a
              href="YOUR-CALENDLY-LINK"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-colors"
            >
              <Calendar className="mr-2" /> Book a Call Now
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={images.hero1} 
                alt="Freediving experience in Dubai - Training session"
                className="w-full h-[40vh] md:h-80 object-cover rounded-lg"
              />
              <img 
                src={images.hero2} 
                alt="Advanced freediving techniques - Deep diving practice"
                className="w-full h-[25vh] md:h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={images.hero3} 
                alt="Professional freediving competition in Dubai"
                className="w-full h-[25vh] md:h-48 object-cover rounded-lg"
              />
              <img 
                src={images.hero4} 
                alt="Underwater freediving training session"
                className="w-full h-[40vh] md:h-80 object-cover rounded-lg"
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
              },
              {
                title: "Guest Lectures",
                icon: "👥"
              },
              {
                title: "Equipment Rental",
                icon: "🤿"
              },
              {
                title: "Night Snorkelling Trip",
                icon: "🌙"
              },
              {
                title: "Underwater Photoshoot",
                icon: "📸"
              },
              {
                title: "Yoga & Tai Chi Sessions",
                icon: "🧘‍♂️"
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
                day: "Friday – Arrival in the UAE",
                events: [
                  {
                    icon: "✈️",
                    title: "Arrival & Transfer",
                    time: "Evening",
                    location: "Land in the UAE and transfer to your villa"
                  },
                  {
                    icon: "🥂",
                    title: "Welcome Reception",
                    time: "Evening",
                    location: "Light welcome drink/snack as you settle in"
                  },
                  {
                    icon: "🏠",
                    title: "Check-In & Relax",
                    time: "Night",
                    location: "Unwind from your travels"
                  }
                ]
              },
              {
                day: "Saturday – Explore Dubai",
                events: [
                  {
                    icon: "🍳",
                    title: "Breakfast",
                    time: "Morning",
                    location: "Start the day with a hearty meal"
                  },
                  {
                    icon: "🏛️",
                    title: "Sightseeing Tour",
                    time: "Morning",
                    location: "Burj Khalifa, Dubai Mall, historic souks"
                  },
                  {
                    icon: "🌅",
                    title: "Local Exploration",
                    time: "Afternoon",
                    location: "Cultural excursions"
                  },
                  {
                    icon: "🍽️",
                    title: "Group Dinner",
                    time: "Evening",
                    location: "Local restaurant"
                  }
                ]
              },
              {
                day: "Sunday – Dive Training & Night Snorkelling",
                events: [
                  {
                    icon: "🏊‍♂️",
                    title: "Dive Training Session",
                    time: "Morning",
                    location: "Technique, breath-hold, and safety fundamentals"
                  },
                  {
                    icon: "🏖️",
                    title: "Leisure Time",
                    time: "Afternoon",
                    location: "Beach, local cafes, or rest"
                  },
                  {
                    icon: "🌙",
                    title: "Night Snorkelling",
                    time: "Evening",
                    location: "Guided underwater nocturnal experience"
                  }
                ]
              },
              {
                day: "Monday – Yoga, Learning & Pool Training",
                events: [
                  {
                    icon: "🧘‍♀️",
                    title: "Yoga Session",
                    time: "Morning",
                    location: "Breath control and flexibility focus"
                  },
                  {
                    icon: "📚",
                    title: "Guest Lecture",
                    time: "Mid-Morning",
                    location: "Freediving fundamentals"
                  },
                  {
                    icon: "🏊‍♂️",
                    title: "Pool Training",
                    time: "Afternoon",
                    location: "Guided pool session"
                  }
                ]
              },
              {
                day: "Tuesday – Tai Chi & Advanced Training",
                events: [
                  {
                    icon: "🥋",
                    title: "Tai Chi Session",
                    time: "Morning",
                    location: "Body awareness and controlled movement"
                  },
                  {
                    icon: "📖",
                    title: "Advanced Lecture",
                    time: "Mid-Morning",
                    location: "Advanced techniques and physiology"
                  },
                  {
                    icon: "🏊‍♂️",
                    title: "Pool Training",
                    time: "Afternoon",
                    location: "Skill refinement"
                  }
                ]
              },
              {
                day: "Wednesday – Rest & Deep Dive Dubai",
                events: [
                  {
                    icon: "☀️",
                    title: "Relaxed Morning",
                    time: "Morning",
                    location: "Breakfast and leisure"
                  },
                  {
                    icon: "💆‍♂️",
                    title: "Rest Period",
                    time: "Midday",
                    location: "Spa services or pool time"
                  },
                  {
                    icon: "🌊",
                    title: "Deep Dive Session",
                    time: "Afternoon",
                    location: "Deep Dive Dubai"
                  }
                ]
              },
              {
                day: "Thursday – Learning & Practice",
                events: [
                  {
                    icon: "🧘‍♂️",
                    title: "Light Exercise",
                    time: "Morning",
                    location: "Stretching and meditation"
                  },
                  {
                    icon: "🎓",
                    title: "Technical Lecture",
                    time: "Mid-Morning",
                    location: "Advanced freediving techniques"
                  },
                  {
                    icon: "🏊‍♂️",
                    title: "Pool Session",
                    time: "Afternoon",
                    location: "Practical application"
                  }
                ]
              },
              {
                day: "Friday – Recovery Day",
                events: [
                  {
                    icon: "🧘‍♀️",
                    title: "Meditation Session",
                    time: "Midday",
                    location: "Guided meditation"
                  },
                  {
                    icon: "🧘‍♂️",
                    title: "Yoga Session",
                    time: "Afternoon",
                    location: "Pre-competition preparation"
                  }
                ]
              },
              {
                day: "Saturday – Depth Competition Day",
                events: [
                  {
                    icon: "📋",
                    title: "Pre-Competition Briefing",
                    time: "Morning",
                    location: "Safety and guidelines review"
                  },
                  {
                    icon: "🏊‍♂️",
                    title: "Depth Competition",
                    time: "Daytime",
                    location: "Supervised competition dives"
                  },
                  {
                    icon: "🏆",
                    title: "Awards & Celebration",
                    time: "Evening",
                    location: "Ceremony and group dinner"
                  }
                ]
              },
              {
                day: "Sunday – Yacht Party & Departure",
                events: [
                  {
                    icon: "🍳",
                    title: "Final Breakfast",
                    time: "Morning",
                    location: "Group breakfast"
                  },
                  {
                    icon: "🛥️",
                    title: "Yacht Party",
                    time: "Daytime",
                    location: "Dubai coastline celebration"
                  },
                  {
                    icon: "✈️",
                    title: "Airport Transfer",
                    time: "Late Afternoon/Evening",
                    location: "Departure arrangements"
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
                        <p className="text-sm text-gray-600">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Host Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Meet Your Guides</h2>
          <div className="grid md:grid-cols-2 gap-12">
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
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Investment</h2>
          <div className="bg-gradient-to-br from-blue-50/90 to-blue-100/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-xl mx-auto">
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Regular Price</p>
              <span className="text-2xl font-bold text-gray-500 line-through decoration-red-500">₹2,99,999</span>
            </div>
            
            <div className="mb-4">
              <div className="inline-block bg-blue-600 text-white px-3 py-0.5 rounded-full text-sm mb-2">
                Early Bird Offer
              </div>
              <p className="text-gray-600 text-sm mb-1">Book before March 2025</p>
              <div className="text-4xl font-bold text-blue-900 mb-1">₹2,49,999</div>
              <p className="text-green-600 text-sm font-semibold">Save ₹50,000</p>
            </div>

            <div className="text-gray-600 text-xs mb-6">
              <p>All-inclusive package covering:</p>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div>✓ Accommodation</div>
                <div>✓ Training Sessions</div>
                <div>✓ Competition Entry</div>
                <div>✓ Equipment Rental</div>
                <div>✓ All Activities</div>
                <div>✓ All Events</div>
              </div>
            </div>

            <a
              href="YOUR-CALENDLY-LINK"
              className="inline-flex items-center px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-colors"
            >
              <Calendar className="mr-2 w-4 h-4" /> Book Your Spot Now
            </a>
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
            href="YOUR-CALENDLY-LINK"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
          >
            <Calendar className="mr-2" /> Book a Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-950 text-blue-200 py-6">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">© 2025. All rights reserved.</p>
          <a 
            href="https://www.instagram.com/bux.freediver/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@bux.freediver</span>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;