const MAKE_NAV_AND_FOOTER = async function (fn, path) {
  const data = await fn(path);
  const navData = data?.nav_bar;
  const footerData = data?.footer_links;

  const renderNavBar = function () {
    const name = navData.logo.name;
    const firstName = name.split('umoru')[0];
    const lastName = name.slice(name.indexOf('umoru'));

    return [
      A(
        { href: navData.logo.link },
        DIV(
          firstName,

          SPAN({ class: 'last-name' }, lastName)
        )
      ),

      UL(
        navData?.nav_links.map(link =>
          LI(
            link.name
              ? A(
                  { class: link.class, href: link.link },
                  link.name,
                  IMG({ src: link.image.src, alt: link.image.alt })
                )
              : IMG({
                  class: link.class,
                  src: link.image.src,
                  alt: link.image.alt,
                })
          )
        )
      ),
    ];
  };

  const renderFooterUL = function (group) {
    return UL(
      footerData[group].map(link =>
        LI(
          A({ href: link.link, target: '_blank' }, link.name),
          IMG({ src: link.image.src, alt: link.image.alt })
        )
      )
    );
  };

  const renderFooter = function () {
    return [renderFooterUL('group_one'), renderFooterUL('group_two')];
  };

  'header'.jsl.eof = NAV(renderNavBar());
  'footer'.jsl.eof = renderFooter();
};

const MAKE_WELCOME_TEXT = function () {
  return ('main'.jsl.bof = SECTION(
    { class: 'landing-page' },

    DIV({ class: 'welcome-text' }),
    H1({ class: 'intro-text' })
  ));
};

export { MAKE_NAV_AND_FOOTER, MAKE_WELCOME_TEXT };
