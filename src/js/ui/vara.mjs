export default async function (fn, path) {
  const data = await fn(path);

  const landingPageData = data?.landing_page;

  const introTextContainer = document.querySelector('.intro-text');
  const codeBlock = document.querySelector('.code-block');
  codeBlock.textContent = data.landing_page.humor_code;

  const code = data.landing_page.humor_code;
  const node = document.querySelector('#code');

  function typeText(node, text, cps = 60) {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      node.textContent = text;
      return;
    }

    const chars = Array.from(text);
    node.textContent = '';
    let i = 0,
      acc = 0,
      last = performance.now();

    const msPerChar = 1000 / cps;

    function frame(now) {
      acc += now - last;
      last = now;
      while (acc >= msPerChar && i < chars.length) {
        node.textContent += chars[i++];
        acc -= msPerChar;
      }
      node.parentElement?.scrollTo?.(0, node.scrollHeight);

      // if (i < chars.length) requestAnimationFrame(frame);

      if (i < chars.length) {
        requestAnimationFrame(frame);
      } else {
        console.log(Prism);
        Prism.highlightElement(node);

        //////// SET TO SESSION STORAGE TO AVOID RUNNING THIS EVERY TIME USER GOES HOME
      }
    }
    requestAnimationFrame(frame);
  }

  typeText(node, code, 8);

  const openingText = landingPageData?.opening_text;
  // const introText = landingPageData?.welcome_text;
  // introTextContainer.textContent = introText;

  let fontSize = 64;

  const w = window.innerWidth;

  if (w < 600) {
    fontSize = 28;
  } else if (w < 900) {
    fontSize = 32;
  } else if (w < 1200) {
    fontSize = 40;
  } else if (w < 2000) {
    fontSize = 50;
  }

  const vara = new Vara(
    '.welcome-text',
    'https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json',
    [
      {
        text: openingText,
        color: '#e4e2dd',
        textAlign: 'center',
        duration: 4000,
        strokeWidth: 1,
        fontSize: fontSize,
      },
    ]
  );

  vara.ready(function () {
    vara.animationEnd(function (i, o) {
      // introTextContainer.classList.add('opacity-1');
    });
  });
}
