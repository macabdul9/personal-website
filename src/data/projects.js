// TODO Add a couple lines about each project
const data = [
  {
    title: 'Burger Builder',
    subtitle: 'A react app for building burgers',
    link: 'https://burger-builder-35898.web.app/',
    date: '2020-02-15',
    visit:'Live Demo',
    desc: 'A full-stack react app for building burgers. '
     + 'Firebase is used as backed and authenticated using Firebase Authentication, '
     + 'and hosted on Firebase.',
    
  },
  {
    title: 'Attention OCR',
    subtitle: 'An attention based OCR model',
    link: 'https://attention-ocr-6cb01.web.app/',
    date: '2019-12-25',
    visit:'Live Demo',
    desc: 'An attention based OCR(Optical Character Recognition for recognizing the text from the images'
     + 'Used synthetic as well as non-synthetic to train the model. '
     +'Finally exposed the model in a Flask REST API and deployed in prduction. '
    +'Develope a React app to call the rest api on image input'
  },
  {
    title: 'Sentiment Analysis',
    subtitle: 'Sentiment Analysis using BERT',
    link: 'https://github.com/macabdul9/bert-sentiment-analysis',
    date: '2020-03-1',
    visit:'Source Code',
    desc: 'Sentiment Analysis using BERT. '
  },
  {
    title: 'Face Segmentation',
    subtitle: 'Semantic Segmentation of the human face',
    link: 'https://github.com/macabdul9/face-segmentation',
    date: '2019-11-25',
    visit:'Source Code',
    desc: 'Trained a cusomized U-Net model for human face segmentation'
     + 'CelebMask-HQ used for training the model. '
  },
  {
    title: 'Caption Generator',
    subtitle: 'A deep learning model(CNN+LSTM) for predicting house price',
    link: 'https://github.com/macabdul9/caption-generator',
    date: '2019-09-20',
    visit:'Source Code',
    desc: 'A deep learning model(CNN+LSTM) for predicting house price. '
    + 'CNN extracts the feature map from the image and feed it to the LSTM with captions which generates next word in caption. '
     + 'Trained the model on flicker32k dataset'
  },
  {
    title: 'Multimodal House Price Prediciton',
    subtitle: 'A deep learning model for predicting house price',
    link: 'https://github.com/macabdul9/multimodal-house-price-prediction',
    visit:'Source Code',    
    date: '2019-12-10',
    desc: 'A deep learning model(CNN+DNN) for predicting house price '
     + 'Image and Tabular is used to train the CNN+DNN model'
  },
  {
    title: 'Reddit Flair Detector',
    subtitle: 'Reddit Flair Detector',
    link: 'https://reddit-flair-detector-flask.herokuapp.com/',
    visit:'Live Demo',
    date: '2019-09-10',
    desc: 'Scrapped the data from india subreddit using pushshift api and praw reddit api wrapper. '
      + 'trained machine/deep learning models on the dataset that predicts the flair of the reddit post given a reddit post url , '
      + 'deployed the machine learning into web app and hosted it on heroku.',
  }, 
  {
    title: 'Painting Generator',
    subtitle: 'DCGAN for painting generation',
    link: 'https://github.com/macabdul9/generative-adversarial-network/blob/master/DCGAN-generating-paintings.ipynb',
    visit:'Source Code',
    date: '2019-08-10',
    desc: 'A DCGAN(I love GANs) model for generating paintings. '
      + 'Trained the model on paintings-91 dataset, results were quite good '
  },
  {
    title: 'Image Segmentation using KMeans',
    subtitle: 'Segmentationg with KMeans',
    link: 'https://github.com/macabdul9/image-segmentation/',
    image: '/images/projects/RedditFlairDetector.jpg',
    visit:'Source Code',
    date: '2019-06-10',
    desc: 'Implement KMeans clustering for data segmention '
      + 'Used KMeans++ initialization for quicker covergance'
  },
  {
    title: 'Chatbot Application',
    subtitle: 'Chatbot application in Python.',
    link: 'https://github.com/macabdul9/chatbot-macfi',
    visit:'Source Code',
    date: '2018-12-10',
    desc: 'A GUI based standlone chatbot application in python.'
      + 'Used wolframalpha as knowledge engine, '
      + 'and NTLK for Natural Language Processing',
  },
];

export default data;
