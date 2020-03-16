// TODO Add a couple lines about each project
const data = [
  {
    title: 'Image Captioning Bot',
    // subtitle: '2015 BVP Hackathon',
    link: '/projects/CaptioningBot/',
    image: '/images/projects/CaptioningBot.jpg',
    date: '2019-09-20',
    desc: 'A deep learning generative model for image to text(caption) generation.'
      + ' Given an image it generates a text that describes the image.'
      + ' Used flicker32k dataset to train the model'
      
  },
  {
    title: 'Reddit Flair Detector',
    // subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    link: 'https://reddit-flair-detector-flask.herokuapp.com/',
    image: '/images/projects/RedditFlairDetector.jpg',
    date: '2019-09-10',
    desc: 'Scrapped the data from india subreddit using pushshift api and praw reddit api wrapper. '
      + 'trained machine/deep learning models on the dataset that predicts the flair of the reddit post given a reddit post url , '
      + 'deployed the machine learning into web app and hosted it on heroku.',
  }, 
  {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc: 'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
  }, {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    link: '/project/catdetector/',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    desc: 'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
     + 'Over 60,000 cats were classified before server bills made the project too expensive '
     + 'to continue hosting.',
  },
];

export default data;
