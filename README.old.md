# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Router is coming

<img src="https://media.giphy.com/media/3ohzdIk6GgMh1T6ldC/giphy.gif" alt="winter is coming"/>

## Getting started

-    Fork and clone this repository
-    cd into `react-router-is-coming`
-    create a new react app
-    install react router dom

## Introduction

Using all you've learned about React Router, you should create an application that allows users
-    to view data about their favorite Game of Thrones houses and characters
-    to navigate between pages, rendering only the data pertinent to their current page

## Step 0a: Get the Code

* Replace `App.css` with the following:

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.app {
  width: 100vw;
  height: 100vh;
  font-family: 'Cinzel', cursive;
}
.page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
} 

.desc {
  margin-top: 5rem;
  width: 50%;
  text-align: center;
}
.header {
  width: 100vw;
  height: 10vh;
  text-align: center;
}
.list {
  width: 30%;
  text-align: center;
}
```

* Replace `index.css` with the following:

```css

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
```

* touch `src/gameOfThrones.js` and add the following:

```javascript

const gameOfThrones = [
    {
        name: 'Starks',
        wikiSuffix: 'House_Stark',
        people: [
        {
            name: 'Eddard "Ned" Stark',
            description:
            'Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark',
            wikiSuffix: 'Eddard_Stark',
            id: 1
        },
        {
            name: 'Benjen Stark',
            description: 'Brother of Eddard Stark - First ranger of the Nights Watch',
            wikiSuffix: 'Benjen_Stark',
            id: 2
        },
        {
            name: 'Robb Stark',
            description: 'Son of Eddard and Catelyn Stark - Direwolf: Grey Wind',
            wikiSuffix: 'Robb_Stark',
            id: 3
        },
        {
            name: 'Sansa Stark',
            description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Lady',
            wikiSuffix: 'Sansa_Stark',
            id: 4
        },
        {
            name: 'Arya Stark',
            description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria',
            wikiSuffix: 'Arya_Stark',
            id: 5
        },
        {
            name: 'Brandon "Bran" Stark',
            description: 'Son of Eddard and Catelyn Stark - Direwolf: Summer',
            wikiSuffix: 'Brandon_Stark',
            id: 6
        },
        {
            name: 'Rickon Stark',
            description: 'Son of Eddard and Catelyn Stark - Direwolf: Shaggydog',
            wikiSuffix: 'Rickon_Stark',
            id: 7
        },
        {
            name: 'Jon Snow',
            description:
            'Bastard son of Eddard Stark - Steward in the Nights Watch - Direwolf: Ghost',
            wikiSuffix: 'Jon_Snow',
            id: 8
        }
        ],
        id: 1
    },
    {
        name: 'Lannisters',
        wikiSuffix: 'House_Lannister',
        people: [
        {
            name: 'Tywin Lannister',
            description: 'Lord of Casterly Rock - Warden of the West',
            wikiSuffix: 'Tywin_Lannister',
            id: 9
        },
        {
            name: 'Tyrion Lannister',
            description: 'Son of Tywin Lannister - The Imp',
            wikiSuffix: 'Tyrion_Lannister',
            id: 10
        },
        {
            name: 'Jaime Lannister',
            description:
            'The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister',
            wikiSuffix: 'Jaime_Lannister',
            id: 11
        },
        {
            name: 'Queen Cersei (Lannister) Baratheon',
            description:
            'Married to King Robert Baratheon - Daughter of Tywin Lannister',
            wikiSuffix: 'Cersei_Lannister',
            id: 12
        }
        ],
        id: 2
    },
    {
        name: 'Baratheons',
        wikiSuffix: 'House_Baratheon',
        people: [
        {
            name: 'King Robert Baratheon',
            description: 'The first of his name - Lord of the Seven Kingdoms',
            wikiSuffix: 'Robert_Baratheon',
            id: 13
        },
        {
            name: 'Stannis Baratheon',
            description:
            'Lord of Dragonstone - Master of Ships - Brother of Robert Baratheon',
            wikiSuffix: 'Stannis_Baratheon',
            id: 14
        },
        {
            name: 'Renly Baratheon',
            description:
            'Lord of Storms End - Master of Laws - Brother of Robert Baratheon',
            wikiSuffix: 'Renly_Baratheon',
            id: 15
        },
        {
            name: 'Joffrey Baratheon',
            description:
            'Heir to the Iron Throne - Son of Robert and Cersei Baratheon',
            wikiSuffix: 'Joffrey_Baratheon',
            id: 16
        },
        {
            name: 'Tommen Baratheon',
            description: 'Son of Robert and Cersei Baratheon',
            wikiSuffix: 'Tommen_Baratheon',
            id: 17
        },
        {
            name: 'Myrcella Baratheon',
            description: 'Daughter of Robert and Cersei Baratheon',
            wikiSuffix: 'Myrcella_Baratheon',
            id: 18
        }
        ],
        id: 3
    },
    {
        name: 'Targaryens',
        wikiSuffix: 'House_Targaryen',
        people: [
        {
            name: 'Daenerys Targaryen',
            description:
            'Stormborn - Khaleesi of the Dothraki - The Unburnt - Mother of Dragons - Daughter of Aerys II Targaryen "The Mad King"',
            wikiSuffix: 'Daenerys_Targaryen',
            id: 19
        },
        {
            name: 'Viserys Targaryen',
            description: 'The Beggar King - Son of Aerys II Targaryen "The Mad King"',
            wikiSuffix: 'Viserys_Targaryen',
            id: 20
        }
        ],
        id: 4
    },
    {
        name: 'Greyjoys',
        wikiSuffix: 'House_Greyjoy',
        people: [
        {
            name: 'Balon Greyjoy',
            description: 'Lord Reaper of Pyke - Head of House Greyjoy',
            wikiSuffix: 'Balon_Greyjoy',
            id: 21
        },
        {
            name: 'Theon Greyjoy',
            description:
            'Ward of the Starks - Heir to the Iron Islands - Son of Balon Greyjoy',
            wikiSuffix: 'Theon_Greyjoy',
            id: 22
        },
        {
            name: 'Yara Greyjoy',
            description: 'Ironborn - Son of Balon Greyjoy',
            wikiSuffix: 'Yara_Greyjoy',
            id: 23
        }
        ],
        id: 5
    },
    {
        name: 'Tyrells',
        wikiSuffix: 'House_Tyrell',
        people: [
        {
            name: 'Margaery (Tyrell) Baratheon',
            description:
            'Wife of Renly Baratheon - Sister of Loras Tyrell - Granddaughter of Olenna Tyrell',
            wikiSuffix: 'Margaery_Tyrell',
            id: 24
        },
        {
            name: 'Loras Tyrell',
            description:
            'Heir to Highgarden - Commander of the Kings Gaurd - Brother of Margaery Baratheon',
            wikiSuffix: 'Loras_Tyrell',
            id: 25
        }
        ],
        id: 6
    },
    {
        name: 'Tullys',
        wikiSuffix: 'House_Tully',
        people: [
        {
            name: 'Catelyn (Tully) Stark',
            description: 'Married to Eddard Stark - Daughter of Hoster Tully',
            wikiSuffix: 'Catelyn_Tully',
            id: 26
        },
        {
            name: 'Lysa (Tully) Arryn',
            description: 'Widow of Jon Arryn - Daughter of Hoster Tully',
            wikiSuffix: 'Lysa_Tully',
            id: 27
        },
        {
            name: 'Edmure Tully',
            description: 'Heir to Riverrun - Son of Hoster Tully',
            wikiSuffix: 'Edmure_Tully',
            id: 28
        },
        {
            name: 'Brynden Tully',
            description:
            'Lord of Riverrun - Head of House Tully - Brother of Hoster Tully',
            wikiSuffix: 'Brynden_Tully',
            id: 29
        }
        ],
        id: 7
    },
    {
        name: 'Redwyne',
        wikiSuffix: 'House_Redwyne',
        people: [
        {
            name: 'Olenna (Redwyne) Tyrell',
            description: 'Matriarch of House Tyrell - Queen of Thorns',
            wikiSuffix: 'Olenna_Tyrell',
            id: 30
        }
        ],
        id: 8
    },
    {
        name: 'Freys',
        wikiSuffix: 'House_Freys',
        people: [
        {
            name: 'Walder Frey',
            description: 'Lord of the Crossing - Head of House Frey',
            wikiSuffix: 'Walder_Frey',
            id: 31
        }
        ],
        id: 9
    },
    {
        name: 'Arryns',
        wikiSuffix: 'House_Arryns',
        people: [
        {
            name: 'Jon Arryn',
            description:
            'Lord of the Eyrie - Head of House Arryn - Warden of the East - Defender of the Vale',
            wikiSuffix: 'Jon_Arryn',
            id: 32
        }
        ],
        id: 10
    },
    {
        name: 'Dothrakis',
        wikiSuffix: 'House_Dothrakis',
        people: [
        {
            name: 'Khal Drogo',
            description:
            'Leader of the Dothraki people - Dothraki Warlord - Married to Daenerys Targaryen',
            wikiSuffix: 'Drogo',
            id: 33
        }
        ],
        id: 11
    }
]

export default gameOfThrones;
```

## Step 0b: Preparation

Before we begin, it's important for us to look at the data we have been given to complete the task.

`gameOfThrones.js` is a large array containing data pertaining to Westeros Houses and a select number of their family members.

Each item, has a unique identifier in `id`, meaning we can access specific data relatively easily using the tools at our disposal.

## Step One: Build out Components

We need to create components for our application, starting with `Houses.js`, `House.js` and `Member.js`. These will be the components we will use to display our data.

- `Houses.js` should provide users with a list of all houses in gameOfThrones.js, as well as a link to each
- `House.js` should provide users with a list of all house members, as well as a link to each
- `Member.js` should provide users with individual house member data

We don't have the data flowing yet, so include a temporary tag indicating what data will be in each component in the future, as well as a bold header indicating which component it is. 

We'll come back to these shortly.

```jsx
// in Houses.js
return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            A list of houses
        </ul>
    </div>
)
```

```jsx 
// in House.js
return (
    <div className="page">
        <div className="header">
            <h2>Members of a GoT House</h2>
        </div>
        <ul className="list">
            A list of members
        </ul>
    </div>
)
```

```jsx
// in Member.js
return (
    <div className="page">
        <div className="header">
            <h2>Specific Member Name</h2>
        </div>
        <div className="desc">
            A description
        </div>
    </div>
)
```

## Step Two: Implement Router

At the top of your `App.js`, be sure to import `BrowserRouter` and `Route` from `react-router-dom`.

You now need to set up your routes, specifically:

| **URL Route** | **Component**  | **Content Description**                                                   |
| :------------ | :------------- | :------------------------------------------------------------------------ |
| /houses             | `<Houses />`     | List all family houses                                             |
| /houses/:id     | `<House />` | Show a specific house, including members                        |
| /houses/:houseId/members/:memberId      | `<Member />`  | Show a specific member from a house                          |


Once you have completed these, make sure to test them out and check if you're hitting the right component.

## Step Three: Render Content

If you haven't already, import your data using `import gameOfThrones from gameOfThrones` and log the data inside your render method to ensure you can access it.

Once your data is available to you, begin rendering by displaying all houses as links in your `Houses.js` component.

**Remember to import and use `Link` when routing in React.**

Once you have completed this, move onto `House.js` and `Member.js`. Each of these requires params matching, so make sure you take this into account passing props into your components.

## Hints 

* use the array `.find()` method to when rendering compound routes you can use the `useParams()` hook to match data ids with route parameters. 

<details>

  <summary> Stuck on how to render your /houses/:id?</summary>

  <p>

  ```jsx
    // in App
    <Route 
        exact path="/houses/:id" 
        element={<House />} 
    />
    // in House 
    ...
    const { id } = useParams()
    const house = houses.find(house => house.id.toString() === id)
    ...
  ```

  </p>
</details>

* Since `/houses/:houseId/members/:memberId` has two route parameters, you will have access to get them both from `useParams()`

<details>

  <summary> Stuck on how to render your `/houses/:houseId/members/:memberId` ?</summary>

  <p>

  ```jsx
        // in App
        <Route 
          path="/houses/:houseId/member/:memberId" 
          element={<Member />}
        />
        // in Member
        ...
          const { houseId, memberId } = useParams()
          const house = houses.find(house => house.id.toString() === houseId)
          const member = house.people.find(person => person.id.toString() === memberId)
        ...
  ```

  </p>
</details>

## Bonuses

- Using the `wikiSuffix` value of the data object, create a link using `https://awoiaf.westeros.org/index.php/:suffix`.
-  Style it out, have some fun and add a bit of your own flair.
- Add the ability for users to favorite characters and houses and render these favorites alongisde the primary list

## Licensing

1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
