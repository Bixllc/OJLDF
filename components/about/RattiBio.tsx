import Image from 'next/image';

export default function RattiBio() {
  return (
    <section id="founder" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
            Meet our Founder and President
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
           Fearless Leader of the OJLDF
         </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: sticky image */}
          <div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl sticky top-28 relative">
              <Image
                src="/ratti.png"
                alt="Wilfred S. Rattigan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
                Wilfred S. Rattigan
              </h3>
              <p className="text-gray-600 text-[1.0625rem] leading-[1.8]">
                Wilfred S. Rattigan leads the One Jamaica Legal Defense Foundation (OJLDF) with a mandate to ensure government accountability and transparency for the Jamaican people.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
                Professional Background 
              </h3>
              <p className="text-gray-600 text-[1.0625rem] leading-[1.8]">
                Wilfred S. Rattigan is a distinguished attorney and former high-ranking FBI official with extensive experience in government investigations, national security, and international law.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
                FBI Career
              </h3>
              <p className="text-gray-600 mb-4 text-[1.0625rem] leading-[1.8]">
                Special Agent Rattigan served the FBI in several high-profile roles, including:
              </p>

              <ul className="space-y-2 text-gray-600 text-[1.0625rem] leading-[1.8]">
                {[
                  'Unit Chief of the FBI Criminal Investigative Division in Washington D.C.',
                  "Unit Chief at the FBI's Executive Office",
                  'Acting Section Chief of the Transnational Organized Crime Section',
                  'Acting Assistant Special Agent in Charge (A/ASAC) and Supervisory Special Agent (SSA) of the New York FBI office, managing over 500 employees from 42 federal, state, and local enforcement agencies',
                  'Legal Attaché at the U.S. Embassies in South Africa and Saudi Arabia',
                  'Assistant Special Agent in Charge at the FBI office in Jackson, Mississippi',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-[#00843D] mr-3 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
                Client Services
              </h3>
              <p className="text-gray-600 text-[1.0625rem] leading-[1.8]">
                Few understand federal law enforcement operations like Mr. Rattigan. His extensive law enforcement experience, coupled with his background as a licensed attorney, uniquely positions him to offer strategic solutions for clients facing government investigations related to white-collar offenses, public integrity, national security, and international law. Clients under investigation or accused of federal law violations will find in Mr. Rattigan a dedicated, passionate, and highly skilled defense attorney.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
                Education and Legal Practice
              </h3>
              <p className="text-gray-600 text-[1.0625rem] leading-[1.8]">
                Mr. Rattigan is licensed to practice law in New York and Connecticut. He earned his Juris Doctor from Howard University School of Law in 1984 and a Bachelor of Science degree from John Jay College of Criminal Justice in New York. In March 1988, he graduated from the FBI Training Academy at Quantico, Virginia.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#00843D] to-[#009B3A] text-white p-6 shadow-lg">
            <h3 className="mb-3 text-white font-bold">OJLDF IS ON A MISSION</h3>
            <p className="text-[1.0625rem] leading-[1.8]">
                Our mission is to bring relief from the historical injustices of slavery and current corruption, empowering Jamaica to reach its full potential as the &apos;Gem of the Caribbean.&apos; Join us in this critical mission to create a better future for all Jamaicans.
            </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
