import Markdown from 'react-markdown';
import content from './data/content.js';
import Header from './components/Header';
import Title from './components/Title';
import Button from './components/Button';
import bio from './data/bio.md?raw';
import Footer from './components/Footer.js';

function App() {
  const { profile, links } = content;
  return (
    <div className="flex h-full flex-col md:max-w-[40%]">
      <Header profile={profile} />

      <main>
        <article className="prose prose-p:my-2 mb-6">
          <Markdown
            components={{
              a: props => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {bio}
          </Markdown>
        </article>

        <section>
          <Title title="Connect" />

          <div className="flex gap-2">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
