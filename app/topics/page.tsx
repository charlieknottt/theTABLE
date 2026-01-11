'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Resource {
  title: string
  type: 'article' | 'video'
  url: string
  source: string
}

interface Topic {
  id: string
  title: string
  subtitle: string
  background: string
  whyNow: string
  resources: Resource[]
}

const topics: Topic[] = [
  {
    id: 'loneliness',
    title: 'The Crisis of Loneliness',
    subtitle: 'Epidemic of Isolation in a Hyper-Connected Age',
    background: 'Despite unprecedented technological connectivity, Americans report record levels of loneliness and social isolation. The Surgeon General has declared loneliness a public health epidemic, with effects on mortality equivalent to smoking 15 cigarettes per day. This isn\'t merely emotional discomfort—it\'s a societal crisis affecting mental health, physical well-being, and civic engagement. Christians have historically understood community as essential to human flourishing, yet the modern church often mirrors society\'s isolation rather than offering an alternative.',
    whyNow: 'The COVID-19 pandemic accelerated existing trends of isolation, remote work has reduced casual social interaction, and social media has created the illusion of connection while deepening actual loneliness. Young adults, particularly Gen Z, report the highest rates of loneliness despite being digital natives. This crisis undermines the very fabric of society—people who are isolated are less likely to marry, have children, engage civically, or find meaning in life. The church has both the theological framework and communal practice to address this, but we must be intentional.',
    resources: [
      {
        title: 'The Loneliness Epidemic: Why So Many of Us Feel Alone',
        type: 'article',
        url: 'https://www.theatlantic.com/magazine/archive/2022/04/america-loneliness-epidemic-living-alone/622896/',
        source: 'The Atlantic',
      },
      {
        title: 'Surgeon General Vivek Murthy on the Loneliness Epidemic',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=zUMD_TXZWYo',
        source: 'YouTube - CBS Mornings',
      },
      {
        title: 'Our Epidemic of Loneliness and Isolation (Official Report)',
        type: 'article',
        url: 'https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf',
        source: 'U.S. Surgeon General',
      },
    ],
  },
  {
    id: 'pornography',
    title: 'Pornography & Sexual Brokenness',
    subtitle: 'The Hidden Crisis Destroying Lives and Families',
    background: 'Pornography has become a normalized yet devastating force in American life. Studies show that the average age of first exposure is now 11 years old, and the content has become increasingly violent and dehumanizing. This isn\'t merely a "men\'s issue"—women and adolescents are increasingly affected. The impact extends far beyond individual morality: porn addiction correlates with increased rates of divorce, sexual dysfunction, trafficking demand, and the objectification of women. From a Christian perspective, this represents a fundamental distortion of God\'s design for sexuality, intimacy, and human dignity.',
    whyNow: 'Ubiquitous smartphones and high-speed internet have made hardcore pornography available to anyone, anywhere, at any time. The pandemic saw a 50% increase in porn consumption. Meanwhile, emerging technologies like AI-generated content and deepfakes threaten to make the problem exponentially worse. The church has often responded with shame and silence rather than grace and truth. We need honest conversations that acknowledge the scope of the problem, offer paths to healing, and equip parents to protect their children—all while extending compassion to those struggling.',
    resources: [
      {
        title: 'The Science of Pornography Addiction',
        type: 'article',
        url: 'https://fightthenewdrug.org/how-porn-can-become-addictive/',
        source: 'Fight the New Drug',
      },
      {
        title: 'Your Brain on Porn | Animated Series',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=wSF82AwSDiU',
        source: 'YouTube - Fight the New Drug',
      },
      {
        title: 'The Porn Phenomenon: The Impact of Pornography in the Digital Age',
        type: 'article',
        url: 'https://www.barna.com/the-porn-phenomenon/',
        source: 'Barna Group',
      },
    ],
  },
  {
    id: 'immigration',
    title: 'Immigration & the Stranger',
    subtitle: 'Balancing Border Security with Biblical Hospitality',
    background: 'Immigration sits at the intersection of law, economics, national security, and human compassion. The United States faces challenges related to border security, asylum processes, undocumented immigrants, and refugee resettlement. Yet behind every policy debate are real people—families fleeing violence, workers seeking opportunity, children who had no choice in coming here. Scripture speaks extensively about how God\'s people should treat the stranger and sojourner, yet Christians are divided on how biblical principles apply to modern immigration policy. This is not a simple issue, but it demands thoughtful, compassionate engagement.',
    whyNow: 'Record numbers of migrants at the southern border, political polarization around immigration policy, and the humanitarian crisis in countries like Venezuela and Haiti make this an urgent issue. Meanwhile, anti-immigrant rhetoric and family separations have created moral crises that demand Christian response. At the same time, concerns about rule of law, national sovereignty, and community impact are legitimate. Christians need spaces to think carefully about how to hold together biblical commands to welcome the stranger with practical wisdom about sustainable immigration policy.',
    resources: [
      {
        title: 'What Does the Bible Say About Immigration?',
        type: 'article',
        url: 'https://www.christianitytoday.com/ct/2018/june-web-only/what-does-bible-say-about-immigration.html',
        source: 'Christianity Today',
      },
      {
        title: 'Immigration: A Christian Perspective on a Complicated Issue',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=CYN-SqSh_zE',
        source: 'YouTube - The Gospel Coalition',
      },
      {
        title: 'Seeking Refuge: On the Shores of the Global Refugee Crisis',
        type: 'article',
        url: 'https://www.worldrelief.org/refugee-crisis-statistics/',
        source: 'World Relief',
      },
    ],
  },
  {
    id: 'polarization',
    title: 'Political Polarization & Social Cohesion',
    subtitle: 'Can We Still Talk Across the Divide?',
    background: 'America is more politically polarized than at any point since the Civil War. Democrats and Republicans don\'t just disagree on policy—they increasingly view each other as threats to the nation\'s survival. This polarization extends beyond politics into geography (urban vs. rural), media consumption, and even friendship choices. Studies show Americans are less willing to let their children marry someone from the other political party than they were decades ago. This tribalism undermines democratic governance, civil discourse, and social trust. For Christians, it tempts us to find our primary identity in political tribe rather than in Christ.',
    whyNow: 'The 2024 election cycle, January 6th aftermath, Supreme Court battles, and media fragmentation have intensified division. Social media algorithms amplify extreme voices and punish nuance. Meanwhile, communities and even churches are fracturing along political lines. If Christians cannot model how to maintain unity amid difference, who will? The gospel transcends political categories, but we must practice embodying that truth in how we relate to those who vote differently, consume different news, and hold different political convictions.',
    resources: [
      {
        title: 'The True Cost of Political Polarization',
        type: 'article',
        url: 'https://www.pewresearch.org/politics/2022/08/09/as-partisan-hostility-grows-signs-of-frustration-with-the-two-party-system/',
        source: 'Pew Research Center',
      },
      {
        title: 'How to Have Conversations Across the Political Divide',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=quVlQC2jwJk',
        source: 'YouTube - TED',
      },
      {
        title: 'Before You Vote: A Christian Approach to Political Engagement',
        type: 'article',
        url: 'https://www.thegospelcoalition.org/article/before-you-vote/',
        source: 'The Gospel Coalition',
      },
    ],
  },
  {
    id: 'mental-health',
    title: 'Youth Mental Health Crisis',
    subtitle: 'Anxiety, Depression, and a Generation in Pain',
    background: 'Rates of anxiety, depression, self-harm, and suicide among adolescents and young adults have skyrocketed in the past 15 years. Emergency room visits for teen suicide attempts doubled from 2007 to 2019, and the pandemic made it worse. The causes are complex: social media comparison, academic pressure, family breakdown, loss of community, and the absence of meaning and purpose. For Christian families, this crisis often intersects with questions about faith, doubt, and where to find help when prayer alone doesn\'t seem enough. The church must learn to address mental health with both spiritual depth and clinical wisdom.',
    whyNow: 'Gen Z is the most anxious and depressed generation on record, despite having access to unprecedented resources. Social media—particularly platforms like Instagram and TikTok—has been directly linked to increased depression in teenage girls. Suicide is now the second leading cause of death for ages 10-34. The church has often stigmatized mental health struggles, leaving families isolated in their pain. We need to create spaces where young people can name their struggles, where parents can find support, and where the body of Christ offers both truth and compassion.',
    resources: [
      {
        title: 'The Mental Health Crisis Among America\'s Youth',
        type: 'article',
        url: 'https://www.nami.org/Advocacy/Policy-Priorities/Improving-Health/Mental-Health-Crisis-in-Youth',
        source: 'National Alliance on Mental Illness',
      },
      {
        title: 'Jonathan Haidt: The Teen Mental Health Crisis and Social Media',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=aV50N2vkkYo',
        source: 'YouTube - After Babel',
      },
      {
        title: 'Teen Depression and Anxiety: Why the Kids Are Not Alright',
        type: 'article',
        url: 'https://time.com/6252240/teen-depression-anxiety-social-media/',
        source: 'TIME Magazine',
      },
    ],
  },
  {
    id: 'truth-crisis',
    title: 'The Crisis of Truth in a World of Disinformation',
    subtitle: 'Can We Still Agree on What\'s Real?',
    background: 'We live in an age where deepfakes can make anyone appear to say anything, where conspiracy theories spread faster than corrections, and where "my truth" has replaced "the truth." This isn\'t just about politics—it\'s epistemological chaos. When we can\'t agree on basic facts, democratic deliberation becomes impossible. For Christians who believe in capital-T Truth embodied in Christ, this is both a cultural crisis and a missional opportunity. But first, we must grapple with how technology, media fragmentation, and postmodern philosophy have eroded shared epistemological foundations.',
    whyNow: 'Artificial intelligence is making disinformation easier and more convincing. Generative AI can create fake images, videos, and articles that are indistinguishable from reality. Meanwhile, institutional trust in media, science, and government is at all-time lows. People retreat into information silos that confirm their biases. Christians are not immune—we\'ve sometimes been gullible consumers of conspiracy theories or resistant to verifiable facts. We need to recover a biblical understanding of truth-telling, discernment, and intellectual honesty.',
    resources: [
      {
        title: 'The Age of Disinformation',
        type: 'article',
        url: 'https://www.brookings.edu/articles/how-to-deal-with-disinformation/',
        source: 'Brookings Institution',
      },
      {
        title: 'How Deepfakes Are Changing Reality',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=gLoI9hAX9dw',
        source: 'YouTube - Wall Street Journal',
      },
      {
        title: 'Truth Decay: What It Is and What We Can Do About It',
        type: 'article',
        url: 'https://www.rand.org/pubs/research_reports/RR2314.html',
        source: 'RAND Corporation',
      },
    ],
  },
  {
    id: 'future-of-work',
    title: 'Technological Changes & Future of Work',
    subtitle: 'AI, Automation, and Human Flourishing',
    background: 'Artificial intelligence and automation are transforming the economy at an unprecedented pace. Jobs that existed for generations are disappearing, while entirely new careers emerge. This creates both opportunity and disruption: economic displacement, retraining challenges, questions about universal basic income, and deeper philosophical questions about the meaning of work and human purpose. From a Christian perspective, work is not merely economic—it\'s part of how we bear God\'s image. What happens to human dignity when machines can do most tasks better than us?',
    whyNow: 'ChatGPT and similar AI tools have brought these questions from theoretical to immediate. White-collar jobs once considered safe are now at risk. Truck drivers, paralegals, customer service reps, and even radiologists face uncertain futures. Meanwhile, wealth inequality grows as tech companies capture enormous value while workers face stagnant wages. Christians need to think about economic justice, the purpose of work, how to care for those displaced, and how to steward these technologies for human flourishing rather than profit alone.',
    resources: [
      {
        title: 'AI and the Future of Work: What Jobs Will Survive?',
        type: 'article',
        url: 'https://www.mckinsey.com/featured-insights/future-of-work/ai-automation-and-the-future-of-work-ten-things-to-solve-for',
        source: 'McKinsey & Company',
      },
      {
        title: 'How AI Could Change Work Forever',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=Sqa8Zo2XWc4',
        source: 'YouTube - CNBC',
      },
      {
        title: 'Technology and the Christian Understanding of Work',
        type: 'article',
        url: 'https://www.thegospelcoalition.org/article/technology-work/',
        source: 'The Gospel Coalition',
      },
    ],
  },
  {
    id: 'marriage-birth-rates',
    title: 'Delayed Marriage & Declining Birth Rates',
    subtitle: 'The Future of Family Formation',
    background: 'Americans are marrying later, having fewer children, and increasingly opting out of marriage and parenthood altogether. The median age of first marriage has risen from 21 (women) and 23 (men) in 1970 to 28 and 30 today. The birth rate has fallen below replacement level. The causes are complex: economic anxiety, student debt, changing gender roles, access to contraception, and shifting cultural values around family. For Christians who believe marriage and family are fundamental to human flourishing and God\'s design, these trends raise profound questions.',
    whyNow: 'South Korea, Japan, and Italy are already experiencing demographic collapse. The United States is heading in the same direction. This has massive economic implications (who will support an aging population?), social implications (community decline), and spiritual implications (what does it mean that fewer people are experiencing the covenant of marriage and the gift of children?). Meanwhile, Christian marriage rates are also declining, and young believers face real barriers: cost of living, cultural hostility to traditional family structures, and uncertainty about the future.',
    resources: [
      {
        title: 'The U.S. Birth Rate is Falling. Here\'s Why.',
        type: 'article',
        url: 'https://www.nytimes.com/2021/05/05/us/us-birthrate-falls-covid.html',
        source: 'The New York Times',
      },
      {
        title: 'Why Birthrates Are Declining Worldwide',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=FfYfBSw1L_0',
        source: 'YouTube - Vox',
      },
      {
        title: 'The Case for Marriage in the Modern Age',
        type: 'article',
        url: 'https://www.thegospelcoalition.org/article/case-for-marriage/',
        source: 'The Gospel Coalition',
      },
    ],
  },
  {
    id: 'economic-challenges',
    title: 'Economic/Affordability Challenges for Young Families',
    subtitle: 'Housing, Debt, and the Squeeze on the Next Generation',
    background: 'Young adults face an economic reality drastically different from their parents\' generation. Housing costs have far outpaced wage growth, making homeownership increasingly unattainable. Student loan debt has exploded, with the average borrower owing over $30,000. Childcare costs rival college tuition. Meanwhile, the gig economy offers flexibility but often lacks stability and benefits. For Christian families seeking to live out biblical values—hospitality, generosity, raising children—these economic pressures create real obstacles.',
    whyNow: 'Inflation, rising interest rates, and post-pandemic economic uncertainty have made the situation worse. Young families are delaying homeownership, children, and other life milestones not by choice but by necessity. This affects church life too: fewer young families means fewer volunteers, smaller youth groups, and declining giving. The church must address these economic realities with both practical support and prophetic critique of systems that make flourishing unnecessarily difficult.',
    resources: [
      {
        title: 'Why It\'s So Hard for Young People to Buy a Home',
        type: 'article',
        url: 'https://www.theatlantic.com/ideas/archive/2023/06/housing-market-affordability-crisis-america/674387/',
        source: 'The Atlantic',
      },
      {
        title: 'The Student Debt Crisis Explained',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=WCWdOzDlrTk',
        source: 'YouTube - CNBC',
      },
      {
        title: 'Economic Anxiety and the American Family',
        type: 'article',
        url: 'https://ifstudies.org/blog/economic-insecurity-and-family-instability',
        source: 'Institute for Family Studies',
      },
    ],
  },
  {
    id: 'american-identity',
    title: 'The Meaning of America: Is Shared Meaning Still Possible?',
    subtitle: 'National Identity in a Fragmenting Culture',
    background: 'What does it mean to be American? Is there a shared national story, or are we simply competing tribes sharing geography? Questions about American history (how should we remember the Founders?), values (individualism vs. community), and future (melting pot vs. multiculturalism) reveal deep divisions. The symbols that once united us—flag, anthem, national holidays—are now contested. Christians have often conflated American identity with Christian identity, but younger generations reject that conflation. Can we recover a healthy patriotism that neither idolizes nor abandons our national identity?',
    whyNow: 'Debates over Critical Race Theory, the 1619 Project, and how to teach American history in schools have made this urgent. Immigration is changing demographics. Political polarization makes shared national identity feel impossible. Meanwhile, global challenges (climate change, pandemics, authoritarianism) require some degree of national cohesion and trust. Christians can offer a vision of national identity rooted in ideals (equality, liberty, justice) while acknowledging historical failures and pointing to a higher citizenship in the Kingdom of God.',
    resources: [
      {
        title: 'Can America Still Be a Nation of Shared Values?',
        type: 'article',
        url: 'https://www.pewresearch.org/politics/2021/10/13/beyond-red-vs-blue-the-political-typology-2/',
        source: 'Pew Research Center',
      },
      {
        title: 'The Battle Over American History',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=hsxukOPEdgg',
        source: 'YouTube - PBS',
      },
      {
        title: 'Christian Citizenship in a Divided Nation',
        type: 'article',
        url: 'https://www.christianitytoday.com/ct/2020/september-web-only/christian-citizenship-divided-nation-election.html',
        source: 'Christianity Today',
      },
    ],
  },
]

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-800 to-warm-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Discussion Topics
            </h1>
            <p className="text-xl md:text-2xl text-warm-100 max-w-3xl mx-auto leading-relaxed">
              Ten critical issues facing our nation—thoughtfully examined through
              a Christian lens with curated resources for deeper engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Selector */}
      <section className="py-12 bg-white border-b-2 border-warm-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <label htmlFor="topic-select" className="block text-sm font-semibold text-warm-700 mb-3">
            Select a Topic:
          </label>
          <select
            id="topic-select"
            value={selectedTopic.id}
            onChange={(e) => setSelectedTopic(topics.find(t => t.id === e.target.value) || topics[0])}
            className="w-full md:w-auto md:min-w-[500px] px-4 py-3 text-lg border-2 border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-warm-900"
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Topic Content */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-3">
              {selectedTopic.title}
            </h2>
            <p className="text-xl text-primary-600 italic mb-8">
              {selectedTopic.subtitle}
            </p>

            <div className="space-y-8">
              {/* Background */}
              <div>
                <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center">
                  <span className="mr-3 text-3xl">📚</span>
                  Background
                </h3>
                <p className="text-lg text-warm-700 leading-relaxed">
                  {selectedTopic.background}
                </p>
              </div>

              {/* Why Now */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4 flex items-center">
                  <span className="mr-3 text-3xl">⏰</span>
                  Why This Matters Now
                </h3>
                <p className="text-lg text-warm-700 leading-relaxed">
                  {selectedTopic.whyNow}
                </p>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">🔗</span>
                  Recommended Resources
                </h3>
                <div className="space-y-4">
                  {selectedTopic.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-warm-50 hover:bg-warm-100 p-5 rounded-lg border-l-4 border-primary-500 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">
                              {resource.type === 'video' ? '🎥' : '📄'}
                            </span>
                            <span className="text-xs uppercase tracking-wide font-semibold text-primary-600">
                              {resource.type}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-warm-900 group-hover:text-primary-700 transition-colors mb-1">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-warm-600">{resource.source}</p>
                        </div>
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0 ml-4 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === selectedTopic.id)
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : topics.length - 1
                setSelectedTopic(topics[prevIndex])
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-warm-200 hover:bg-warm-300 text-warm-800 font-semibold rounded-lg transition-colors"
            >
              ← Previous Topic
            </button>
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === selectedTopic.id)
                const nextIndex = currentIndex < topics.length - 1 ? currentIndex + 1 : 0
                setSelectedTopic(topics[nextIndex])
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-warm-200 hover:bg-warm-300 text-warm-800 font-semibold rounded-lg transition-colors"
            >
              Next Topic →
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-800 to-warm-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Host a Discussion?
          </h2>
          <p className="text-xl mb-8 text-warm-100 leading-relaxed">
            These topics are designed to spark meaningful conversation around your table.
            Sign up to host and receive full discussion guides and resources.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Become a Host
          </Link>
        </div>
      </section>
    </div>
  )
}
