export default async function (fn, path) {
  const data = await fn(path);

  const landingPageData = data?.landing_page;

  const introTextContainer = document.querySelector('.intro-text');
  const openingText = landingPageData?.opening_text;
  const introText = landingPageData?.welcome_text;
  introTextContainer.textContent = introText;

  let fontSize = 64;

  const w = window.innerWidth;

  if (w < 600) {
    fontSize = fontSize;
  } else if (w < 900) {
    fontSize = 32;
  } else if (w < 1200) {
    fontSize = 40;
  } else if (w < 2000) {
    fontSize = 64;
  }

  const vara = new Vara(
    '.welcome-text',
    'https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json',
    [
      {
        text: openingText,
        color: '#e4e2dd',
        textAlign: 'justify',
        duration: 4000,
        strokeWidth: 1,
        fontSize: fontSize,
      },
    ]
  );

  vara.ready(function () {
    vara.animationEnd(function (i, o) {
      introTextContainer.classList.add('opacity-1');
    });
  });
}
