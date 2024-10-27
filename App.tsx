import React, { useState, useEffect } from 'react';
import { Package, Truck, Globe, BarChart, Activity, Archive, DollarSign } from 'lucide-react';

function App() {
  const [activeService, setActiveService] = useState('warehousing');
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev < 100 ? prev + 1 : 0));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = {
    warehousing: {
      icon: <Archive className="w-8 h-8" />,
      title: "Warehousing",
      priceRange: "$2.25 - $4.00 per sq ft/month",
      description: "Secure storage solutions with advanced inventory management",
      features: ["Climate Control", "24/7 Security", "Inventory Tracking"]
    },
    transportation: {
      icon: <Truck className="w-8 h-8" />,
      title: "Transportation",
      priceRange: "$2.50 - $5.00 per mile",
      description: "Efficient logistics and delivery services",
      features: ["Route Optimization", "Real-time Tracking", "Fleet Management"]
    },
    fulfillment: {
      icon: <Package className="w-8 h-8" />,
      title: "Order Fulfillment",
      priceRange: "$3.00 - $7.50 per order",
      description: "End-to-end order processing and shipping",
      features: ["Pick & Pack", "Same-day Processing", "Returns Management"]
    },
    global: {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Logistics",
      priceRange: "Custom Pricing",
      description: "International shipping and customs management",
      features: ["Customs Clearance", "International Compliance", "Global Tracking"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-[#64ffda]">3PL Services & Pricing</h1>
          <div className="flex items-center gap-4">
            <Activity className="w-6 h-6 text-[#64ffda]" />
            <BarChart className="w-6 h-6 text-[#64ffda]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeService === key 
                  ? 'bg-[#112240] border-2 border-[#64ffda] shadow-lg shadow-[#64ffda]/20' 
                  : 'bg-[#1e293b] hover:bg-[#112240]'
              }`}
              onClick={() => setActiveService(key)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#64ffda]">{service.icon}</div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-[#64ffda]">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-mono">{service.priceRange}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-1 h-1 rounded-full bg-[#64ffda]"
                      style={{
                        transform: `scale(${activeService === key ? 1.5 : 1})`,
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-1 bg-[#1e293b] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#64ffda] transition-all duration-300"
                  style={{ 
                    width: `${activeService === key ? animatedValue : 0}%`,
                    opacity: activeService === key ? 0.7 : 0.3
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
