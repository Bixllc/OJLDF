'use client';

import Image from 'next/image';

export default function HurricaneRelief() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Jamaica Heart */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-[#00843D] text-3xl md:text-4xl font-bold">
              OJLDF stands with Jamaica
            </h2>

            <Image
              src="/ja-heart.png"
              alt="Jamaica Heart"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-[1.7]">
            Our hearts are with those most affected by Hurricane Melissa. Together we will rebuild
            stronger &amp; better!
          </p>
        </div>

        {/* Before/After Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hurricanemel-1.png"
              alt="Hurricane Melissa impact - Black River, Jamaica"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hurricanemel-2.png"
              alt="Hurricane Melissa impact - Montego Bay"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-gradient-to-br from-[#00843D] to-[#009B3A] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-center mb-8 text-white text-2xl md:text-3xl font-semibold">
            Ways to Help
          </h3>

          {/* DONATING CASH/CHEQUE */}
          <div className="mb-8">
            <h4 className="text-[#FCD116] text-center mb-6 text-xl font-semibold">
              DONATING CASH/CHEQUE
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Online Payment */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">Online Payment</div>

                <button
                  type="button"
                  onClick={() =>
                    window.open('https://www.zeffy.com/en-US/donation-form/ojldf', '_blank')
                  }
                  className="w-full rounded-lg bg-[#FCD116] px-4 py-3 font-semibold text-[#00843D] hover:bg-[#E5BD0F]"
                >
                  Donate Online
                </button>
              </div>

              {/* CashApp */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">CashApp</div>
                <div className="bg-white px-4 py-3 rounded-lg text-center">
                  <span className="text-[#00843D] font-semibold">$OJLDF</span>
                </div>
              </div>

              {/* Zelle */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">Zelle</div>
                <div className="bg-white px-4 py-3 rounded-lg text-center">
                  <span className="text-[#00843D] text-sm font-semibold">give@ojldf.net</span>
                </div>
              </div>

              {/* Mail Cheques */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">Mail Cheques</div>
                <div className="bg-white px-3 py-3 rounded-lg">
                  <p className="text-[#00843D] text-xs font-semibold mb-2">
                    Payable to: One Jamaica Legal Defense Foundation (OJLDF)
                  </p>
                  <p className="text-gray-700 text-xs">
                    11582 SW Village Parkway, #571
                    <br />
                    Port St. Lucie, FL 34987
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DONATING ITEMS */}
          <div className="mb-6">
            <h4 className="text-[#FCD116] text-center mb-6 text-xl font-semibold">
              DONATING ITEMS
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* E&W Shipping */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">E&amp;W Shipping</div>
                <div className="bg-white px-3 py-3 rounded-lg">
                  <p className="text-gray-700 text-xs">
                    4607 Emerson Street
                    <br />
                    Hyattsville, Maryland 20782
                  </p>
                </div>
              </div>

              {/* Highland Park Drop-off */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">Highland Park Drop-off</div>
                <div className="bg-white px-3 py-3 rounded-lg">
                  <p className="text-gray-700 text-xs mb-2">
                    14 South 2nd Avenue
                    <br />
                    Highland Park, NJ 08904
                  </p>
                  <p className="text-[#00843D] text-xs font-semibold">
                    Mon-Sat: 9am-6pm
                    <br />
                    Sunday: 12pm-6pm
                  </p>
                  <p className="text-gray-700 text-xs mt-2">Call: (732) 236-8672</p>
                </div>
              </div>

              {/* Port Saint Lucie */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-3 text-[#FCD116] font-semibold">Port Saint Lucie</div>
                <div className="bg-white px-3 py-3 rounded-lg">
                  <p className="text-gray-700 text-xs">
                    15832 SW Village Parkway, #571
                    <br />
                    Port Saint Lucie, FL 34987
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/90">
            Every contribution directly supports relief and rebuilding efforts for our Jamaican communities.
          </p>
        </div>
      </div>
    </section>
  );
}

