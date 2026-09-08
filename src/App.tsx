import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import bio from './data/bio.md?raw';
import content from './data/content';
import type { Theme } from './types';
import { getTheme, setSingleClass } from './helpers.js';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Container from './components/Container';
import Title from './components/Title';
import Button from './components/Button';
import Signature from './components/Signature';
import Footer from './components/Footer.js';

function App() {
  const [theme, setTheme] = useState<Theme>(getTheme);

  function handleSetTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const html = document.documentElement;
    setSingleClass(html, theme, ['light', 'dark']);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const { profile, links } = content;

  return (
    <>
      <Header theme={theme} onSetTheme={handleSetTheme} />

      <Container Tag="main">
        <h1 className="sr-only">Donald Umoru - Application Developer</h1>
        <Container
          Tag="article"
          className="prose prose-p:font-medium prose-p:my-2 prose-p:font-(family-name:--text-body) dark:prose-a:text-(--dark-primary) prose-p:text-(--dark-bg) dark:prose-p:text-(--dark-primary) prose-a:hover:text-(--light-hover) dark:prose-a:hover:text-(--dark-hover) prose-a:transition-colors prose-a:duration-300 mb-6"
        >
          <Greeting />
          <Markdown
            components={{
              a: props => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {bio}
          </Markdown>
        </Container>

        <Container Tag="section">
          <Title title="Connect" />

          <Container Tag="div" className="flex flex-col gap-1">
            {Object.entries(links).map(item => {
              const [label, socialInfo] = item;
              const Icon = socialInfo.icon;

              return (
                <Button
                  key={label}
                  label={label}
                  icon={<Icon />}
                  link={socialInfo.link}
                />
              );
            })}
          </Container>
        </Container>

        <Signature profile={profile} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
