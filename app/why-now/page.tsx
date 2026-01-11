import Link from 'next/link'

export default function WhyNow() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-900 to-primary-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Why Now?
            </h1>
            <p className="text-xl md:text-2xl text-warm-100 max-w-3xl mx-auto leading-relaxed">
              The Clapham Circle faced a nation in crisis. Two centuries later, we face challenges equally daunting. And the same solution.
            </p>
          </div>
        </div>
      </section>

      {/* The Crisis of Our Time */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            The Crisis of Our Time
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-warm-800 leading-relaxed mb-6">
              England in the 1790s faced moral decay, economic injustice, and widespread hopelessness. America in the 2020s confronts its own defining challenges. The parallels are striking. And so is the opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                Then: The Slave Trade
              </h3>
              <p className="text-warm-800 leading-relaxed mb-4">
                An entrenched economic system built on human exploitation. Most believed
                it was too powerful to change.
              </p>
              <h3 className="text-2xl font-serif font-semibold text-warm-800 mb-4 mt-6">
                Now: Human Trafficking & Exploitation
              </h3>
              <p className="text-warm-800 leading-relaxed">
                Modern slavery persists in pornography, sex trafficking, and exploitative
                labor. The darkness has only changed its disguise.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                Then: Public Fragmentation
              </h3>
              <p className="text-warm-800 leading-relaxed mb-4">
                Class divisions, political factions, and moral decline left society
                fractured and cynical.
              </p>
              <h3 className="text-2xl font-serif font-semibold text-warm-800 mb-4 mt-6">
                Now: Political Polarization & Isolation
              </h3>
              <p className="text-warm-800 leading-relaxed">
                Social media echo chambers, cancel culture, and tribalism have created
                a nation where neighbors can't talk to neighbors.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                Then: Child Labor & Abuse
              </h3>
              <p className="text-warm-800 leading-relaxed mb-4">
                Children as young as five worked in factories and mines, their futures
                stolen.
              </p>
              <h3 className="text-2xl font-serif font-semibold text-warm-800 mb-4 mt-6">
                Now: Youth Mental Health Crisis
              </h3>
              <p className="text-warm-800 leading-relaxed">
                Depression, anxiety, and suicide rates among young people have skyrocketed.
                A generation is suffering in silence.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                Then: Loss of Shared Values
              </h3>
              <p className="text-warm-800 leading-relaxed mb-4">
                Moral relativism and public vice threatened the social fabric.
              </p>
              <h3 className="text-2xl font-serif font-semibold text-warm-800 mb-4 mt-6">
                Now: The Crisis of Truth
              </h3>
              <p className="text-warm-800 leading-relaxed">
                Disinformation, deepfakes, and competing realities make it nearly
                impossible to establish shared truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Worse */}
      <section className="py-16 md:py-24 bg-warm-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            The Modern Challenge: Technology Without Community
          </h2>

          <div className="bg-white border border-warm-300 shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-warm-800 leading-relaxed mb-6">
                Wilberforce and his friends didn't have to contend with the isolating forces of digital life. Today, we do. And it's making everything harder.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-warm-100 p-6 border border-warm-300">
                  <h4 className="font-semibold text-warm-900 mb-3 text-lg">
                    Social Media Division
                  </h4>
                  <p className="text-warm-800">
                    Algorithms prioritize outrage over understanding, turning citizens into combatants.
                  </p>
                </div>

                <div className="bg-warm-100 p-6 border border-warm-300">
                  <h4 className="font-semibold text-warm-900 mb-3 text-lg">
                    Epidemic of Loneliness
                  </h4>
                  <p className="text-warm-800">
                    More connected than ever digitally, yet rates of isolation have never been higher.
                  </p>
                </div>

                <div className="bg-warm-100 p-6 border border-warm-300">
                  <h4 className="font-semibold text-warm-900 mb-3 text-lg">
                    Attention Economy
                  </h4>
                  <p className="text-warm-800">
                    Thoughtful conversation requires focus, but every app is designed to fragment our attention.
                  </p>
                </div>

                <div className="bg-warm-100 p-6 border border-warm-300">
                  <h4 className="font-semibold text-warm-900 mb-3 text-lg">
                    Megaphone Without Meaning
                  </h4>
                  <p className="text-warm-800">
                    Everyone has a platform, but few have relationships. Noise drowns out nuance.
                  </p>
                </div>
              </div>

              <p className="text-xl text-warm-900 font-bold leading-relaxed mt-8 text-center">
                We've traded the dinner table for the digital feed. And we're paying the price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution is Timeless */}
      <section className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            The Antidote: Face-to-Face, Faith-Filled Conversation
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-lg text-warm-900 leading-relaxed mb-8">
                If the problem is isolation, the solution is hospitality.<br/>
                If the problem is division, the solution is dialogue.<br/>
                If the problem is cynicism, the solution is courage rooted in faith.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-300 shadow-sm mb-8">
              <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-6">
                What The Table Offers
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold">1.</span>
                  <div>
                    <strong className="text-warm-900">Real Relationships:</strong>
                    <span className="text-warm-800"> Face-to-face conversations build trust that tweets never can.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold">2.</span>
                  <div>
                    <strong className="text-warm-900">Thoughtful Engagement:</strong>
                    <span className="text-warm-800"> Curated topics and research allow for depth instead of soundbites.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold">3.</span>
                  <div>
                    <strong className="text-warm-900">Biblical Wisdom:</strong>
                    <span className="text-warm-800"> Scripture grounds every conversation in truth that transcends politics.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold">4.</span>
                  <div>
                    <strong className="text-warm-900">Grassroots Action:</strong>
                    <span className="text-warm-800"> National movements begin with neighbors. Change starts locally.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold">5.</span>
                  <div>
                    <strong className="text-warm-900">Unity in Diversity:</strong>
                    <span className="text-warm-800"> Bringing together people from different backgrounds around shared purpose.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-warm-900 text-white p-8 border border-warm-800">
              <p className="text-xl font-serif italic text-center leading-relaxed">
                The Table doesn't replace your church, your political involvement, or your social media. It restores what all of those lack: unhurried, intentional, face-to-face conversation rooted in Christian hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 md:py-24 bg-warm-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            Imagine If...
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                100 Tables This Month
              </h3>
              <p className="text-warm-700">
                That's 600-1,200 people engaging in thoughtful, Christ-centered
                conversation about critical issues.
              </p>
            </div>

            <div className="bg-white p-6 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                1,000 Tables This Year
              </h3>
              <p className="text-warm-700">
                That's 6,000-12,000 people building relationships, developing
                solutions, and creating networks of influence.
              </p>
            </div>

            <div className="bg-white p-6 border border-warm-300 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                10,000 Tables in Five Years
              </h3>
              <p className="text-warm-700">
                That's 60,000-120,000 people united in purpose, equipped with wisdom,
                and mobilized for impact across the nation.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <p className="text-2xl font-serif text-warm-900 leading-relaxed text-center mb-6">
              Wilberforce and a handful of friends changed the world.
            </p>
            <p className="text-xl text-primary-700 font-semibold text-center">
              What could thousands of tables accomplish?
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-900 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            The Time is Now. The Method is Proven.
          </h2>
          <p className="text-xl mb-8 text-warm-100 leading-relaxed">
            History shows us what's possible. The present shows us what's necessary. The Table offers both the model and the momentum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/topics"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-primary-700 transition-colors border border-primary-500"
            >
              Explore Topics
            </Link>
            <Link
              href="/get-involved"
              className="inline-block bg-white text-warm-900 px-8 py-4 rounded font-semibold text-lg hover:bg-warm-100 transition-colors border border-warm-300"
            >
              Host a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
