import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-900 to-primary-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/fireside-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              THE TABLE
            </h1>
            <p className="text-2xl md:text-3xl text-primary-200 font-serif italic mb-8">
              Where Hospitality Meets Mission
            </p>
            <p className="text-lg md:text-xl text-warm-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Rooted in history. Built for transformation.
            </p>
            <Link
              href="/why-now"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded font-semibold text-lg transition-colors border border-primary-500"
            >
              Explore the Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-900 mb-6">
              The Power of the Table
            </h2>
            <p className="text-xl text-warm-800 leading-relaxed">
              History's greatest movements didn't start in grand halls or public squares. They started around dinner tables, where ideas were shared, relationships forged, and courage kindled.
            </p>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            A Biblical Pattern
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                Jesus at the Table
              </h3>
              <p className="text-warm-800 leading-relaxed">
                From wedding feasts to the Last Supper, Jesus used meals as sacred spaces for teaching and modeling the Kingdom. The table was His classroom.
              </p>
            </div>
            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                The Early Church
              </h3>
              <p className="text-warm-800 leading-relaxed">
                "They broke bread in their homes and ate together with glad and sincere hearts" (Acts 2:46). They didn't just meet. They ate together, and transformed the Roman world.
              </p>
            </div>
            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                The Family Table
              </h3>
              <p className="text-warm-800 leading-relaxed">
                For generations, families gathered around dinner tables to share meals, values, and wisdom. The table is where identity gets passed down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wilberforce Section - The Historical Model */}
      <section className="py-16 md:py-24 bg-warm-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-900 mb-6">
              The Clapham Circle: A Proven Model
            </h2>
            <p className="text-xl text-warm-800 italic">
              "One man with courage makes a majority." William Wilberforce
            </p>
          </div>

          <div className="bg-white border border-warm-300 shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-6">
                Late 18th Century England: A Nation in Need
              </h3>

              <p className="text-lg text-warm-800 leading-relaxed mb-6">
                In the late 1700s, Great Britain was wealthy and powerful, but morally broken. The slave trade was a cornerstone of the economy. Child labor was rampant. Public morality was in decline. The challenges seemed impossible, and few believed change could happen.
              </p>

              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-6 mt-10">
                The Dinner Table as a War Room
              </h3>

              <p className="text-lg text-warm-800 leading-relaxed mb-6">
                William Wilberforce and a small group of committed Christians began gathering around dinner tables in Clapham, a village outside London. This wasn't socializing. These were strategic gatherings that brought together:
              </p>

              <ul className="list-disc list-inside space-y-2 text-warm-800 mb-6 ml-6">
                <li>Politicians and lawyers</li>
                <li>Business leaders and merchants</li>
                <li>Clergy and theologians</li>
                <li>Educators and writers</li>
                <li>Artists and cultural influencers</li>
              </ul>

              <p className="text-lg text-warm-800 leading-relaxed mb-6">
                Around these tables, they didn't just discuss problems. They developed strategies, forged alliances, mobilized resources, and encouraged one another through decades of opposition.
              </p>

              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-6 mt-10">
                Results That Changed the World
              </h3>

              <div className="bg-warm-100 p-6 border border-warm-300 mb-6">
                <p className="text-lg text-warm-900 leading-relaxed font-semibold mb-4">
                  The impact of these dinner table conversations:
                </p>
                <ul className="space-y-3 text-warm-800">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span><strong>1807:</strong> Abolition of the British slave trade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span><strong>1833:</strong> Complete emancipation of slaves throughout the British Empire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span><strong>70+ organizations founded,</strong> including the Royal Society for the Prevention of Cruelty to Animals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span><strong>Prison reform</strong> and humane treatment of the mentally ill</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span><strong>Child labor laws</strong> that protected the vulnerable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span><strong>Educational reform</strong> making literacy accessible to the poor</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl text-warm-900 font-bold leading-relaxed mt-8 text-center">
                All of this began not with political power, but with Christian hospitality, intentional conversation, and biblical truth applied to real challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Model Explained */}
      <section className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            What Made It Work?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Intentional Hospitality
              </h3>
              <p className="text-warm-800">
                Not casual gatherings, but purposeful dinners designed to bring diverse perspectives together around shared concerns.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Biblical Framework
              </h3>
              <p className="text-warm-800">
                Scripture wasn't just quoted. It was the lens through which every issue was examined, debated, and addressed.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Diverse Unity
              </h3>
              <p className="text-warm-800">
                People from different sectors and skills, united by faith and purpose, created networks of influence far greater than any individual.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Sustained Commitment
              </h3>
              <p className="text-warm-800">
                Change didn't happen overnight. It took decades of persistent conversation, collaboration, and courage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-900 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            What Worked Then Can Work Now
          </h2>
          <p className="text-xl mb-8 text-warm-100 leading-relaxed">
            The Table revives this historic model. Ordinary Christians hosting guests for intentional dinners that lead to extraordinary impact in your neighborhood and beyond.
          </p>
          <Link
            href="/why-now"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-primary-700 transition-colors border border-primary-500 mr-4"
          >
            Why Now?
          </Link>
          <Link
            href="/topics"
            className="inline-block bg-white text-warm-900 px-8 py-4 rounded font-semibold text-lg hover:bg-warm-100 transition-colors border border-warm-300"
          >
            Explore Topics
          </Link>
        </div>
      </section>
    </div>
  )
}
