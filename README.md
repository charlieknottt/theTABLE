# THE TABLE

**Where Hospitality Meets Mission**

A website for The Table movement - inspiring face-to-face dinners across the nation to model Christian hospitality and spur meaningful change through warm, vibrant, intentional discussions.

## About

The Table is inspired by William Wilberforce and the Clapham Circle, who gathered regularly around dinner tables in the late 1700s and early 1800s to discuss and address critical cultural issues. Their conversations led to the abolition of the British slave trade, prison reform, child labor laws, and dozens of civic organizations that reshaped British society.

This website serves as the digital hub for The Table movement, providing resources for hosts, information about discussion topics, and ways to get involved.

## Features

- **Historical Overview**: Learn about the Clapham Circle and how dinner table conversations changed the world
- **Why Now**: Understand the modern relevance of this historic model
- **10 Discussion Topics**: Curated topics with background information, modern context, and resources
- **Host Sign-up**: Interest form for those wanting to host Table discussions
- **Contact Form**: Get in touch with questions or feedback

## Tech Stack

- **Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## Project Structure

```
the-table-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage (historical overview)
│   ├── why-now/           # Why Now page
│   ├── topics/            # Topics page with selector
│   ├── get-involved/      # Host interest form
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
└── package.json           # Dependencies

```

## Topics Covered

1. The Crisis of Loneliness
2. Pornography & Sexual Brokenness
3. Immigration & the Stranger
4. Political Polarization & Social Cohesion
5. Youth Mental Health Crisis
6. The Crisis of Truth in a World of Disinformation
7. Technological Changes & Future of Work
8. Delayed Marriage & Declining Birth Rates
9. Economic/Affordability Challenges for Young Families
10. The Meaning of America: Is Shared Meaning Still Possible?

## Design Theme

The website embodies themes of:
- **Wilberforce**: Historical inspiration and proven model
- **Unity**: Bringing diverse people together
- **Collaboration**: Working together for change
- **Fireside Chat**: Warm, intimate conversations
- **Grassroots**: Bottom-up movement building
- **Christian**: Grounded in biblical faith and values

The design is academic yet inviting, serious yet hopeful, rooted in history yet urgently relevant.

## License

Copyright © 2026 The Table. All rights reserved.
