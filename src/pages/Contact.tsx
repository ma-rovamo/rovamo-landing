import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Rovamo";
    window.scrollTo(0, 0);

    // Load Cal.com script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://cal.com"});
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "murtaza-akbar/15min",
      });
      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <main>
        <section className="bg-[#030303]">
          <div className="container-section">
            <div className="relative rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 shadow-sm backdrop-blur-sm">
                <div className="p-8 md:p-12">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Schedule a Call</h1>
                  <p className="text-gray-300 mb-8 max-w-2xl">
                    Book a free discovery call to discuss your project and explore how we can help bring your ideas to life.
                  </p>
                  <div className="w-full h-[600px] bg-black/20 rounded-lg overflow-hidden">
                    <div id="my-cal-inline" className="w-full h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 