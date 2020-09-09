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
    'prototyping ideas'
  ];

  shuffle(always_down_to_chat_about)
  always_down_to_chat_about.push('')
  const marquee = document.getElementById('marquee');
  const text = always_down_to_chat_about.join(' • ');
  marquee.style = `--tw: ${text.length}ch; --ad: 12s`;

  const marquee_text = document.getElementById('marquee_text');
  marquee_text.innerHTML = text;

})()