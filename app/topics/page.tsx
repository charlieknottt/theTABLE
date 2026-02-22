'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Resource {
  title: string
  type: 'article' | 'video' | 'report'
  url: string
  source: string
}

interface BibleVerse {
  reference: string
  text: string
  application: string
}

interface BibleVerseSection {
  heading: string
  verses: BibleVerse[]
}

interface Topic {
  id: string
  title: string
  subtitle: string
  background: string
  whyNow: string
  resources: Resource[]
  bibleVerses: BibleVerseSection[]
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
        title: 'Why Does Loneliness Hurt So Much?',
        type: 'video',
        url: 'https://youtu.be/25dJDij-TFU?si=07N1Q4sprZofsoTm',
        source: 'Scott Sauls',
      },
      {
        title: 'Our Epidemic of Loneliness and Isolation (Report Summary)',
        type: 'report',
        url: 'https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf',
        source: 'US Surgeon General',
      },
      {
        title: 'Communities Rebuilding Connection Block-by-Block',
        type: 'article',
        url: 'https://apnews.com/article/fd824e3daa93594e5f0d448afac45aa2',
        source: 'Associated Press',
      },
    ],
    bibleVerses: [
      {
        heading: 'God Is With You',
        verses: [
          {
            reference: 'Isaiah 41:10',
            text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
            application: 'You are never abandoned even when you feel alone.',
          },
          {
            reference: 'Psalm 23:4',
            text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
            application: 'God\'s presence continues in dark seasons.',
          },
          {
            reference: 'Hebrews 13:5',
            text: 'Keep your lives free from the love of money and be content with what you have, because God has said, "Never will I leave you; never will I forsake you."',
            application: 'Loneliness is real but not ultimate.',
          },
        ],
      },
      {
        heading: 'Belonging',
        verses: [
          {
            reference: 'Psalm 68:6',
            text: 'God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.',
            application: 'Seek community God provides.',
          },
          {
            reference: 'Romans 8:15',
            text: 'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, "Abba, Father."',
            application: 'Your identity includes belonging.',
          },
        ],
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
        title: 'Jonathan Haidt on Prevalence and Danger of Porn on Young People',
        type: 'video',
        url: 'https://youtu.be/CeRmxUGRgVc',
        source: 'Jonathan Haidt',
      },
      {
        title: 'The Impact of Pornography on Children',
        type: 'article',
        url: 'https://acpeds.org/the-impact-of-pornography-on-children/',
        source: 'American College of Pediatrics',
      },
    ],
    bibleVerses: [
      {
        heading: 'Freedom in Christ',
        verses: [
          {
            reference: 'John 8:36',
            text: 'If the Son sets you free, you will be free indeed.',
            application: 'True freedom comes through Christ.',
          },
          {
            reference: 'Galatians 5:1',
            text: 'It is for freedom that Christ has set us free.',
            application: 'Guard your freedom; do not return to slavery.',
          },
          {
            reference: 'Romans 6:12\u201314',
            text: 'Therefore, do not offer the parts of your body to sin, as instruments of wickedness, but rather offer yourselves to God, as those who have been brought from death to life; and offer the parts of your body to him as instruments of righteousness. For sin shall not be your master, because you are not under law, but under grace.',
            application: 'Addiction is not your ruler under grace.',
          },
          {
            reference: '1 Corinthians 6:12\u201315',
            text: '\u2018Everything is permissible for me\u2019 \u2013 but not everything is beneficial. \u2018Everything is permissible for me\u2019 \u2013 but I will not be mastered by anything. \u2018Food for the stomach and the stomach for food\u2019 \u2013 but God will destroy them both. The body is not meant for sexual immorality, but for the Lord, and the Lord for the body. By his power God raised the Lord from the dead, and he will raise us also. Do you not know that your bodies are members of Christ himself? Shall I then take the members of Christ and unite them with a prostitute? Never!',
            application: 'Refuse to be controlled by anything but Christ.',
          },
        ],
      },
      {
        heading: 'Resisting Temptation',
        verses: [
          {
            reference: '1 Corinthians 10:13',
            text: 'No temptation has seized you except what is common to man. And God is faithful, he will not let you be tempted beyond what you can bear, but when you are tempted, he will also provide a way out so that you can stand up under it.',
            application: 'There is always an escape path.',
          },
          {
            reference: 'James 4:7',
            text: 'Submit yourselves, then, to God. Resist the devil, and he will flee from you.',
            application: 'Resistance weakens temptation.',
          },
          {
            reference: '1 Peter 5:8',
            text: 'Be self-controlled and alert. Your enemy the devil prowls around like a roaring lion looking for someone to devour.',
            application: 'Stay vigilant against the power of darkness.',
          },
          {
            reference: '2 Timothy 1:7',
            text: 'For God did not give us a spirit of timidity but a spirit of power, of love and of self-discipline.',
            application: 'The Spirit empowers self-control.',
          },
        ],
      },
      {
        heading: 'Fleeing Sinful Desires',
        verses: [
          {
            reference: '1 Corinthians 6:18',
            text: 'Flee from sexual immorality. All other sins a man commits are outside his body, but he who sins sexually sins against his own body.',
            application: 'Sometimes victory means leaving.',
          },
          {
            reference: 'Matthew 5:28',
            text: 'But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart.',
            application: 'Guard your thoughts carefully.',
          },
          {
            reference: '1 Thessalonians 4:3\u20135',
            text: 'It is God\u2019s will that you should be sanctified; that you should avoid sexual immorality; that each of you should learn to control his own body in a way that is holy and honorable, not in passionate lust like the heathen, who do not know God.',
            application: 'Discipline restores dignity and pleases God.',
          },
          {
            reference: '1 Peter 2:11',
            text: 'Dear friends, I urge you, as aliens and strangers in the world, to abstain from sinful desires, which war against your soul.',
            application: 'Sinful desires wage harm against your very soul.',
          },
        ],
      },
      {
        heading: 'Living by the Spirit',
        verses: [
          {
            reference: 'Galatians 5:16',
            text: 'So I say, live by the Spirit, and you will not gratify the desires of the sinful nature.',
            application: 'Replace old habits with Spirit-led living.',
          },
          {
            reference: 'Romans 12:1\u20132',
            text: 'Therefore, I urge you, brothers, in view of God\u2019s mercy, to offer your bodies as living sacrifices, holy and pleasing to God \u2014 this is your spiritual act of worship. Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is \u2014 his good, pleasing and perfect will.',
            application: 'Recovery requires renewed thinking.',
          },
          {
            reference: 'Titus 2:11\u201312',
            text: 'For the grace of God that brings salvation has appeared to all men. It teaches us to say \u2018No\u2019 to ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in this present age\u2026',
            application: 'Grace empowers you to resist.',
          },
          {
            reference: '1 Peter 4:1\u20132',
            text: 'Therefore, since Christ suffered in his body, arm yourselves also with the same attitude, because he who has suffered in his body is done with sin. As a result, he does not live the rest of his earthly life for evil human desires, but rather for the will of God.',
            application: 'A new purpose weakens old cravings.',
          },
        ],
      },
      {
        heading: 'Growth and Endurance',
        verses: [
          {
            reference: 'Romans 5:3\u20135',
            text: 'Not only so, but we also rejoice in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not disappoint us, because God has poured out his love into our hearts by the Holy Spirit, whom he has given us.',
            application: 'Struggle can produce strength.',
          },
          {
            reference: '2 Peter 1:5\u20137',
            text: 'For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge; and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness, brotherly kindness; and to brotherly kindness, love.',
            application: 'Recovery is daily growth.',
          },
        ],
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
        title: 'Evangelicals Say They Care About Immigrants. They Also Distrust Them.',
        type: 'article',
        url: 'https://religionnews.com/2026/01/30/evangelicals-say-they-care-about-immigrants-they-also-distrust-them-immigration-table-erlc-sbc-cities-church/',
        source: 'Religion News Service',
      },
      {
        title: 'How Americans View the Border',
        type: 'report',
        url: '/resources/pew-how-americans-view-the-border.pdf',
        source: 'Pew Research Center',
      },
    ],
    bibleVerses: [
      {
        heading: 'Welcome the Foreigner',
        verses: [
          {
            reference: 'Leviticus 19:33\u201334',
            text: 'When a foreigner resides among you in your land, do not mistreat them. The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt. I am the Lord your God.',
            application: 'Treat outsiders as neighbors.',
          },
          {
            reference: 'Deuteronomy 10:19',
            text: 'And you are to love those who are foreigners, for you yourselves were foreigners in Egypt.',
            application: 'Remember shared humanity.',
          },
          {
            reference: 'Exodus 22:21',
            text: 'Do not mistreat or oppress a foreigner, for you were foreigners in Egypt.',
            application: 'Reject prejudice.',
          },
        ],
      },
      {
        heading: 'Hospitality',
        verses: [
          {
            reference: 'Hebrews 13:1\u20132',
            text: 'Keep on loving one another as brothers and sisters. Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.',
            application: 'Open your life outward.',
          },
          {
            reference: 'Matthew 25:34\u201340',
            text: 'Then the King will say to those on his right, \u2018Come, you who are blessed by my Father; take your inheritance, the kingdom prepared for you since the creation of the world. For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me.\u2019 Then the righteous will answer him, \u2018Lord, when did we see you hungry and feed you, or thirsty and give you something to drink? When did we see you a stranger and invite you in, or needing clothes and clothe you? When did we see you sick or in prison and go to visit you?\u2019 The King will reply, \u2018Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.\u2019',
            application: 'The Lord cares about those who are hurting.',
          },
          {
            reference: 'Romans 12:13',
            text: 'Share with the Lord\u2019s people who are in need. Practice hospitality.',
            application: 'Make welcome intentional.',
          },
        ],
      },
      {
        heading: 'Importance of Borders',
        verses: [
          {
            reference: 'Numbers 34:1\u201312',
            text: 'The Lord said to Moses, \u201cCommand the Israelites and say to them: \u2018When you enter Canaan, the land that will be allotted to you as an inheritance is to have these boundaries\u2026\u2019\u201d God then described in detail the southern, western, northern, and eastern boundaries of the land.',
            application: 'God set clear boundaries for his people.',
          },
          {
            reference: 'Numbers 32:17',
            text: 'But we will arm ourselves for battle and go ahead of the Israelites until we have brought them to their place. Meanwhile our women and children will live in fortified cities, for protection from the inhabitants of the land.',
            application: 'Walls were seen as protection from others.',
          },
          {
            reference: 'Nehemiah 2:17\u201318',
            text: 'Then I said to them, \u201cYou see the trouble we are in: Jerusalem lies in ruins, and its gates have been burned with fire. Come, let us rebuild the wall of Jerusalem, and we will no longer be in disgrace.\u201d I also told them about the gracious hand of my God on me and what the king had said to me. They replied, \u201cLet us start rebuilding.\u201d So they began this good work.',
            application: 'God called his people to build a wall for protection.',
          },
        ],
      },
      {
        heading: 'Foreigners Are to Obey the Law',
        verses: [
          {
            reference: 'Leviticus 24:22',
            text: 'You are to have the same law for the foreigner and the native-born. I am the Lord your God.',
            application: 'One standard of law for all.',
          },
        ],
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
        title: 'Dissecting the Last Decade in America',
        type: 'video',
        url: 'https://youtu.be/RKRuvKtFvqo?si=28iWaNMkxLkwkNR1',
        source: 'Jonathan Haidt',
      },
      {
        title: 'The Trust Crisis',
        type: 'article',
        url: 'https://www.commentary.org/articles/abe-greenwald/trust-crisis-in-america/',
        source: 'Abe Greenwald, Commentary Magazine',
      },
      {
        title: 'Americans\u2019 Dismal Views of the Nation\u2019s Politics',
        type: 'report',
        url: '/resources/pew-americans-dismal-view-of-politics.pdf',
        source: 'Pew Research Center',
      },
    ],
    bibleVerses: [
      {
        heading: 'Church Unity',
        verses: [
          {
            reference: '1 Corinthians 1:10',
            text: 'I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought.',
            application: 'Seek agreement within your church where possible.',
          },
          {
            reference: 'Ephesians 4:1\u20136',
            text: 'As a prisoner for the Lord, then, I urge you to live a life worthy of the calling you have received. Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace. There is one body and one Spirit, just as you were called to one hope when you were called; one Lord, one faith, one baptism; one God and Father of all, who is over all and through all and in all.',
            application: 'Prioritize relationship.',
          },
        ],
      },
      {
        heading: 'Live by Love',
        verses: [
          {
            reference: 'Colossians 3:1\u201314',
            text: 'Since, then, you have been raised with Christ, set your hearts on things above, where Christ is, seated at the right hand of God. Set your minds on things above, not on earthly things. For you died, and your life is now hidden with Christ in God\u2026 But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips. Do not lie to each other, since you have taken off your old self with its practices and have put on the new self\u2026 Therefore, as God\u2019s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. And over all these virtues put on love, which binds them all together in perfect unity.',
            application: 'As Christians, show that we are different.',
          },
        ],
      },
      {
        heading: 'How We Speak to One Another',
        verses: [
          {
            reference: 'James 1:19\u201321',
            text: 'My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires. Therefore, get rid of all moral filth and the evil that is so prevalent and humbly accept the word planted in you, which can save you.',
            application: 'Pause before reacting.',
          },
          {
            reference: 'Proverbs 15:1\u20134',
            text: 'A gentle answer turns away wrath, but a harsh word stirs up anger. The tongue of the wise adorns knowledge, but the mouth of the fool gushes folly. The eyes of the Lord are everywhere, keeping watch on the wicked and the good. The soothing tongue is a tree of life, but a perverse tongue crushes the spirit.',
            application: 'Tone matters.',
          },
          {
            reference: 'Matthew 5:11\u201316',
            text: 'Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. Rejoice and be glad, because great is your reward in heaven\u2026 You are the salt of the earth\u2026 You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.',
            application: 'Be salt and light and be an example for others.',
          },
        ],
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
        title: 'The Truth about Social Media and Society',
        type: 'video',
        url: 'https://youtu.be/25dJDij-TFU?si=07N1Q4sprZofsoTm',
        source: 'Jonathan Haidt',
      },
      {
        title: 'Social Media and Youth Mental Health',
        type: 'report',
        url: '/resources/surgeon-general-youth-mental-health.pdf',
        source: 'U.S. Surgeon General',
      },
    ],
    bibleVerses: [
      {
        heading: 'Anxiety',
        verses: [
          {
            reference: 'Philippians 4:6\u20137',
            text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
            application: 'Pray instead of spiraling.',
          },
          {
            reference: '1 Peter 5:7',
            text: 'Cast all your anxiety on him because he cares for you.',
            application: 'Release burdens regularly.',
          },
          {
            reference: 'Matthew 6:30\u201334',
            text: 'If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you\u2014you of little faith? So do not worry, saying, \u2018What shall we eat?\u2019 or \u2018What shall we drink?\u2019 or \u2018What shall we wear?\u2019 For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first his kingdom and his righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.',
            application: 'Focus on today only.',
          },
          {
            reference: 'Isaiah 26:2\u20134',
            text: 'Open the gates that the righteous nation may enter, the nation that keeps faith. You will keep in perfect peace those whose minds are steadfast, because they trust in you. Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal.',
            application: 'Fix your mind on God.',
          },
        ],
      },
      {
        heading: 'Identity',
        verses: [
          {
            reference: 'Psalm 139:13\u201316',
            text: 'For you created my inmost being; you knit me together in my mother\u2019s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. My frame was not hidden from you when I was made in the secret place, when I was woven together in the depths of the earth. Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be.',
            application: 'Your worth is intrinsic.',
          },
          {
            reference: 'Ephesians 2:1\u201310',
            text: 'As for you, you were dead in your transgressions and sins\u2026 But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions\u2014it is by grace you have been saved\u2026 For it is by grace you have been saved, through faith\u2014and this is not from yourselves, it is the gift of God\u2014not by works, so that no one can boast. For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
            application: 'You have purpose.',
          },
          {
            reference: 'Romans 8:14\u201315',
            text: 'For those who are led by the Spirit of God are the children of God. The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship.',
            application: 'You belong already.',
          },
        ],
      },
      {
        heading: 'Hope',
        verses: [
          {
            reference: 'Lamentations 3:19\u201326',
            text: 'I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me. Yet this I call to mind and therefore I have hope: Because of the Lord\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. I say to myself, \u201cThe Lord is my portion; therefore I will wait for him.\u201d The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord.',
            application: 'Each day resets hope.',
          },
          {
            reference: 'Jeremiah 29:11\u201314',
            text: 'For I know the plans I have for you,\u201d declares the Lord, \u201cplans to prosper you and not to harm you, plans to give you hope and a future. Then you will call on me and come and pray to me, and I will listen to you. You will seek me and find me when you seek me with all your heart. I will be found by you,\u201d declares the Lord.',
            application: 'Your story continues.',
          },
        ],
      },
    ],
  },
  {
    id: 'truth-crisis',
    title: 'The Crisis of Truth in a World of Disinformation',
    subtitle: 'Can We Still Agree on What\'s Real?',
    background: 'We live in an age where deepfakes can make anyone appear to say anything, where conspiracy theories spread faster than corrections, and where "my truth" has replaced "the truth." This isn\'t just about politics—it\'s epistemological chaos. When we can\'t agree on basic facts, democratic deliberation becomes impossible. For Christians who believe in capital-T Truth embodied in Christ, this is both a cultural crisis and a missional opportunity. But first, we must grapple with how technology, media fragmentation, and postmodern philosophy have eroded shared epistemological foundations.',
    whyNow: 'Artificial intelligence is making disinformation easier and more convincing. Generative AI can create fake images, videos, and articles that are indistinguishable from reality. Meanwhile, institutional trust in media, science, and government is at all-time lows. People retreat into information silos that confirm their biases. Christians are not immune—we\'ve sometimes been gullible consumers of conspiracy theories or resistant to verifiable facts. We need to recover a biblical understanding of truth-telling, discernment, and intellectual honesty.',
    resources: [],
    bibleVerses: [
      {
        heading: 'Truth',
        verses: [
          {
            reference: '1 Peter 2:1\u20133',
            text: 'Therefore, rid yourselves of all malice and all deceit, hypocrisy, envy, and slander of every kind. Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation, now that you have tasted that the Lord is good.',
            application: 'Get rid of evil influences.',
          },
          {
            reference: 'John 8:31\u201332',
            text: 'To the Jews who had believed him, Jesus said, \u201cIf you hold to my teaching, you are really my disciples. Then you will know the truth, and the truth will set you free.\u201d',
            application: 'Freedom comes from aligning life with truth.',
          },
          {
            reference: 'John 8:42\u201347',
            text: 'Jesus said to them, \u201cIf God were your Father, you would love me, for I have come here from God\u2026 You belong to your father, the devil, and you want to carry out your father\u2019s desires. He was a murderer from the beginning, not holding to the truth, for there is no truth in him. When he lies, he speaks his native language, for he is a liar and the father of lies.\u201d',
            application: 'Satan is the father of lies.',
          },
          {
            reference: 'Psalm 119:159\u2013163',
            text: 'See how I love your precepts; preserve my life, Lord, in accordance with your love. All your words are true; all your righteous laws are eternal. Rulers persecute me without cause, but my heart trembles at your word. I rejoice in your promise like one who finds great spoil. I hate and detest falsehood but I love your law.',
            application: 'Scripture is the standard.',
          },
        ],
      },
      {
        heading: 'Discernment',
        verses: [
          {
            reference: '1 Thessalonians 5:19\u201322',
            text: 'Do not quench the Spirit. Do not treat prophecies with contempt but test them all; hold on to what is good, reject every kind of evil.',
            application: 'Verify before believing.',
          },
          {
            reference: 'Proverbs 12:22',
            text: 'Lying lips are an abomination to the Lord, but those who act faithfully are his delight.',
            application: 'God loves truth.',
          },
          {
            reference: '2 Corinthians 11:13\u201315',
            text: 'For such people are false apostles, deceitful workers, masquerading as apostles of Christ. And no wonder, for Satan himself masquerades as an angel of light. It is not surprising, then, if his servants also masquerade as servants of righteousness. Their end will be what their actions deserve.',
            application: 'There are those who seek to deceive.',
          },
          {
            reference: 'Colossians 3:7\u201312',
            text: 'You used to walk in these ways, in the life you once lived. But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips. Do not lie to each other, since you have taken off your old self with its practices and have put on the new self, which is being renewed in knowledge in the image of its Creator\u2026 Therefore, as God\u2019s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience.',
            application: 'Live like Jesus.',
          },
        ],
      },
    ],
  },
  {
    id: 'future-of-work',
    title: 'Technological Changes & Future of Work',
    subtitle: 'AI, Automation, and Human Flourishing',
    background: 'Artificial intelligence and automation are transforming the economy at an unprecedented pace. Jobs that existed for generations are disappearing, while entirely new careers emerge. This creates both opportunity and disruption: economic displacement, retraining challenges, questions about universal basic income, and deeper philosophical questions about the meaning of work and human purpose. From a Christian perspective, work is not merely economic—it\'s part of how we bear God\'s image. What happens to human dignity when machines can do most tasks better than us?',
    whyNow: 'ChatGPT and similar AI tools have brought these questions from theoretical to immediate. White-collar jobs once considered safe are now at risk. Truck drivers, paralegals, customer service reps, and even radiologists face uncertain futures. Meanwhile, wealth inequality grows as tech companies capture enormous value while workers face stagnant wages. Christians need to think about economic justice, the purpose of work, how to care for those displaced, and how to steward these technologies for human flourishing rather than profit alone.',
    resources: [],
    bibleVerses: [],
  },
  {
    id: 'marriage-birth-rates',
    title: 'Delayed Marriage & Declining Birth Rates',
    subtitle: 'The Future of Family Formation',
    background: 'Americans are marrying later, having fewer children, and increasingly opting out of marriage and parenthood altogether. The median age of first marriage has risen from 21 (women) and 23 (men) in 1970 to 28 and 30 today. The birth rate has fallen below replacement level. The causes are complex: economic anxiety, student debt, changing gender roles, access to contraception, and shifting cultural values around family. For Christians who believe marriage and family are fundamental to human flourishing and God\'s design, these trends raise profound questions.',
    whyNow: 'South Korea, Japan, and Italy are already experiencing demographic collapse. The United States is heading in the same direction. This has massive economic implications (who will support an aging population?), social implications (community decline), and spiritual implications (what does it mean that fewer people are experiencing the covenant of marriage and the gift of children?). Meanwhile, Christian marriage rates are also declining, and young believers face real barriers: cost of living, cultural hostility to traditional family structures, and uncertainty about the future.',
    resources: [],
    bibleVerses: [],
  },
  {
    id: 'economic-challenges',
    title: 'Economic/Affordability Challenges for Young Families',
    subtitle: 'Housing, Debt, and the Squeeze on the Next Generation',
    background: 'Young adults face an economic reality drastically different from their parents\' generation. Housing costs have far outpaced wage growth, making homeownership increasingly unattainable. Student loan debt has exploded, with the average borrower owing over $30,000. Childcare costs rival college tuition. Meanwhile, the gig economy offers flexibility but often lacks stability and benefits. For Christian families seeking to live out biblical values—hospitality, generosity, raising children—these economic pressures create real obstacles.',
    whyNow: 'Inflation, rising interest rates, and post-pandemic economic uncertainty have made the situation worse. Young families are delaying homeownership, children, and other life milestones not by choice but by necessity. This affects church life too: fewer young families means fewer volunteers, smaller youth groups, and declining giving. The church must address these economic realities with both practical support and prophetic critique of systems that make flourishing unnecessarily difficult.',
    resources: [],
    bibleVerses: [],
  },
  {
    id: 'american-identity',
    title: 'The Meaning of America: Is Shared Meaning Still Possible?',
    subtitle: 'National Identity in a Fragmenting Culture',
    background: 'What does it mean to be American? Is there a shared national story, or are we simply competing tribes sharing geography? Questions about American history (how should we remember the Founders?), values (individualism vs. community), and future (melting pot vs. multiculturalism) reveal deep divisions. The symbols that once united us—flag, anthem, national holidays—are now contested. Christians have often conflated American identity with Christian identity, but younger generations reject that conflation. Can we recover a healthy patriotism that neither idolizes nor abandons our national identity?',
    whyNow: 'Debates over Critical Race Theory, the 1619 Project, and how to teach American history in schools have made this urgent. Immigration is changing demographics. Political polarization makes shared national identity feel impossible. Meanwhile, global challenges (climate change, pandemics, authoritarianism) require some degree of national cohesion and trust. Christians can offer a vision of national identity rooted in ideals (equality, liberty, justice) while acknowledging historical failures and pointing to a higher citizenship in the Kingdom of God.',
    resources: [],
    bibleVerses: [],
  },
]

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0])
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionHeading: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionHeading]: !prev[sectionHeading],
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-900 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Discussion Topics
            </h1>
            <p className="text-xl md:text-2xl text-warm-100 max-w-3xl mx-auto leading-relaxed">
              Ten critical issues facing our nation, thoughtfully examined through a Christian lens with curated resources for deeper engagement.
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
            onChange={(e) => {
              setSelectedTopic(topics.find(t => t.id === e.target.value) || topics[0])
              setExpandedSections({})
            }}
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
      <section className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-warm-300 shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-3">
              {selectedTopic.title}
            </h2>
            <p className="text-xl text-warm-700 italic mb-8">
              {selectedTopic.subtitle}
            </p>

            <div className="space-y-8">
              {/* Background */}
              <div>
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                  Background
                </h3>
                <p className="text-lg text-warm-800 leading-relaxed">
                  {selectedTopic.background}
                </p>
              </div>

              {/* Why Now */}
              <div className="bg-warm-100 p-6 border border-warm-300">
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                  Why This Matters Now
                </h3>
                <p className="text-lg text-warm-800 leading-relaxed">
                  {selectedTopic.whyNow}
                </p>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                  Recommended Resources
                </h3>
                <p className="text-warm-700 italic mb-6">
                  Please review these resources before the dinner but feel free to do additional research on your own.
                </p>
                {selectedTopic.resources.length > 0 ? (
                  <div className="space-y-4">
                    {selectedTopic.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-warm-50 hover:bg-warm-100 p-5 border border-warm-300 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="text-xs uppercase tracking-wide font-semibold text-warm-700 mr-3">
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
                ) : (
                  <p className="text-warm-600 italic bg-warm-50 p-5 border border-warm-300">
                    Resources coming soon.
                  </p>
                )}
              </div>

              {/* Bible Verses */}
              {selectedTopic.bibleVerses.length > 0 && (
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-6">
                    Bible Verses
                  </h3>
                  <div className="space-y-4">
                    {selectedTopic.bibleVerses.map((section) => (
                      <div key={section.heading} className="border border-warm-300">
                        <button
                          onClick={() => toggleSection(section.heading)}
                          className="w-full flex items-center justify-between p-5 bg-warm-50 hover:bg-warm-100 transition-colors text-left"
                        >
                          <h4 className="text-lg font-semibold text-warm-900">
                            {section.heading}
                          </h4>
                          <svg
                            className={`w-5 h-5 text-warm-600 transform transition-transform ${expandedSections[section.heading] ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {expandedSections[section.heading] && (
                          <div className="p-5 space-y-6">
                            {section.verses.map((verse) => (
                              <div key={verse.reference}>
                                <p className="font-semibold text-primary-800 mb-2">
                                  {verse.reference}
                                </p>
                                <p className="text-warm-800 leading-relaxed italic mb-2">
                                  {verse.text}
                                </p>
                                <p className="text-sm text-warm-600 font-medium">
                                  {verse.application}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                setExpandedSections({})
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
                setExpandedSections({})
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-900 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Host a Discussion?
          </h2>
          <p className="text-xl mb-8 text-warm-100 leading-relaxed">
            These topics are designed to spark meaningful conversation around your table. Sign up to host and receive full discussion guides and resources.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-primary-700 transition-colors border border-primary-500"
          >
            Become a Host
          </Link>
        </div>
      </section>
    </div>
  )
}
