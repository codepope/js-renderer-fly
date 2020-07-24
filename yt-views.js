const axrio = require('@geshan/axrio');

(async function run() {
  console.log(`Pulling views from youtube, please wait...`);
  try {
    const ytVideoUrl = process.argv[2] ? process.argv[2] : 'https://www.youtube.com/watch?v=kJQP7kiw5Fk';
    const $ = await axrio.getPage(`https://js-renderer-fly.fly.dev/api/render?url=${ytVideoUrl}`, 12000);
    const title = $('h1.title>yt-formatted-string').text();
    const views = $('span.view-count').text();
    console.log(`${title} has ${views}`);
  } catch(e) {
    console.log(`Error while fetching views: `, e);
  }
  process.exit(0);
})();
