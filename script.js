(async function() {
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let always_down_to_chat_about = [
    'e-commerce',
    'shopify',
    'memes',
    'javascript',
    'aws',
    'iot',
    'react',
    'conversion rate',
    'marketing pixels',
    'ableton',
    'the ~future~',
    'ios',
    'robinhood',
    'systems design',
    'mvp development',
    'prototyping ideas',
    'automation',
    'data viz',
    'building a tech career',
    'pop culture',
    'startup life',
    'tech interviews',
    'nyc',
    'web development',
    'mobile development',
    'debugging'
  ];

  shuffle(always_down_to_chat_about)
  always_down_to_chat_about.push('')
  const marquee = document.getElementById('marquee');
  const text = always_down_to_chat_about.join(' • ');
  marquee.classList.add('marquee')
  marquee.style = `--tw: ${text.length}ch; --ad: 40s`;

  const marquee_text = document.getElementById('marquee_text');
  marquee_text.innerHTML = text;

})()