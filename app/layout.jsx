import '@styles/globals.css'
import { Children } from 'react'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Generated Prompts',
    keywords: 'prompt, writing, generator, ai, machine learning, gpt-3, gpt3, openai, share, discover, community, creative, fiction, nonfiction, poetry, story, stories, writing prompt, writing prompts, promptopia, promptopia.com',
    author: 'Ha Le'
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout