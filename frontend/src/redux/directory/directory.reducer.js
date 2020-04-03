const INITIAL_STATE = {
  books: [
    {
      id: 1,
      title: "The New Prophets of Capital",
      author: "Nicole Aschoff",
      image: "https://cdn-ed.versobooks.com/images/000004/655/Jacobin_Series_New_Prophets_of_Capital_300dpi_CMYK-29fb2aa407efec2686bda1921a236988.jpg",
      highlights: [
        {
          "id": 1,
          "text": "sdldjlfkjdslfkj"
        },
        {
          "id": 2,
          "text": "sdldjlfkjdslfkj"
        }
      ],
      reviews: [
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
      id: 2,
      title: "Spaces of Global Capitalism A Theory of Uneven Geographical Development",
      author: "Louis Althusser",
      image: "https://cdn-ed.versobooks.com/images/000014/606/9781788734653-c3262c9eaf3e1dd159cb8ba9dbc07028.jpg",
      highlights: [
        {
          "id": 1,
          "text": "fgfdgdf"
        },
        {
          "id": 2,
          "text": "dfgdfsg"
        }
      ],
      reviews: [
        {
          "id": 1,
          "text": "The classic analysis of how particular political and cultural ideas come to dominate society"
        },
        {
          "id": 2,
          "text": "The publication of For Marx and Reading Capital established Louis Althusser as one of the most influential figures in the Western Marxist tradition. On Ideology charts Althusser’s critique of the theoretical system unveiled in his own major works, and his developing practice of philosophy as a “revolutionary weapon.”"
        }
      ]
    },
    {
      id: 3,
      title: "Quasi Una Fantasia Essays on Modern Music",
      author: "Theodor Adorno",
      image: "https://cdn-ed.versobooks.com/images/000001/385/9781844677924-Quasi-Una-Fantasia-dd49cbf4b4fd66da0539966b4836f258.jpg",
      highlights: [
        {
          "id": 1,
          "text": "fgfdgdf"
        },
        {
          "id": 2,
          "text": "dfgdfsg"
        }
      ],
      reviews: [
        {
          "id": 1,
          "text": "The classic analysis of how particular political and cultural ideas come to dominate society"
        },
        {
          "id": 2,
          "text": "The publication of For Marx and Reading Capital established Louis Althusser as one of the most influential figures in the Western Marxist tradition. On Ideology charts Althusser’s critique of the theoretical system unveiled in his own major works, and his developing practice of philosophy as a “revolutionary weapon.”"
        }
      ]
    },
    {
      id: 3,
      title: "Quasi Una Fantasia Essays on Modern Music",
      author: "Theodor Adorno",
      image: "https://cdn-ed.versobooks.com/images/000001/385/9781844677924-Quasi-Una-Fantasia-dd49cbf4b4fd66da0539966b4836f258.jpg",
      highlights: [
        {
          "id": 1,
          "text": "fgfdgdf"
        },
        {
          "id": 2,
          "text": "dfgdfsg"
        }
      ],
      reviews: [
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