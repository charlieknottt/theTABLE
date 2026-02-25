export interface Resource {
  title: string
  type: 'article' | 'video' | 'report'
  url: string
  source: string
}

export interface BibleVerse {
  reference: string
  text: string
}

export interface BibleVerseSection {
  heading: string
  verses: BibleVerse[]
}

export interface Story {
  headline: string
  source: string
  date: string
  author: string
  url?: string
  paragraphs: string[]
}

export interface Topic {
  id: string
  title: string
  subtitle: string
  background: string
  whyNow: string
  resources: Resource[]
  bibleVerses: BibleVerseSection[]
  story?: Story
}
