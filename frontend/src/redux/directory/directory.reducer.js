const INITIAL_STATE = {
  books: [
    {
      "id": 1,
      "title": "The New Prophets of Capital",
      "author": "Nicole Aschoff",
      "image": "../images/001.pg",
      "highlights": [
        {
          "id": 1,
          "text": "sdldjlfkjdslfkj"
        },
        {
          "id": 2,
          "text": "sdldjlfkjdslfkj"
        }
      ],
      "reviews": [
        {
          "id": 1,
          "text": "“A highly original and fascinating exploration of what we might think of as ‘changeless change’—the kind of innovation that simultaneously upends current practices and studiously protects existing wealth and power inequities. Through four well-chosen and emblematic case studies, Aschoff tackles this slippery subject with confidence and subtlety, providing readers with key intellectual tools to separate fact from fiction.”"
        },
        {
          "id": 2,
          "text": "“Nicole Aschoff expertly dissects the magical thinking behind America’s idolatry of the invisible hand. In a series of lively and closely argued case studies, she lets readers see the threadbare state of our rationales for the market’s uncontested sovereignty. And just as impressively, she urges us not to be daunted by the challenges ahead.”"
        }
      ]
    },
    {
      "id": 2,
      "title": "On Ideology",
      "author": "Louis Althusser",
      "image": "../images/002.jpg",
      "highlights": [
        {
          "id": 1,
          "text": "fgfdgdf"
        },
        {
          "id": 2,
          "text": "dfgdfsg"
        }
      ],
      "reviews": [
        {
          "id": 1,
          "text": "The classic analysis of how particular political and cultural ideas come to dominate society"
        },
        {
          "id": 2,
          "text": "The publication of For Marx and Reading Capital established Louis Althusser as one of the most influential figures in the Western Marxist tradition. On Ideology charts Althusser’s critique of the theoretical system unveiled in his own major works, and his developing practice of philosophy as a “revolutionary weapon.”"
        }
      ]
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;