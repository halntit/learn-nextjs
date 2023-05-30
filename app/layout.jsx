import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Generated Prompts',
    keywords: 'prompt, writing, generator, ai, machine learning, gpt-3, gpt3, openai, share, discover, community, creative, fiction, nonfiction, poetry, story, stories, writing prompt, writing prompts, promptopia, promptopia.com',
    author: 'Ha Le'
}

const RootLayout = ({children}) => (
    <html>
        <body>
            <Provider>
                <div className='main'>
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
)

export default RootLayout