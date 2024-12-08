# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)
![](./screenshot2.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/time-tracking-dashboard-using-next-js-rNsjdWqzep)
- Live Site URL: [Vercel](https://time-tracking-dashboard-using-next-m9dig7p6k-taufiqmahdi.vercel.app/)
- Github: [Github](https://github.com/taufiqmahdi/Time-Tracking-Dashboard-Using-Next-JS)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Chakra UI](https://chakra-ui.com/) - For styles

### What I learned

- Learned how to share state between child, parents and sibling. Moved the state and its function to set the state to the parents, so the state in the parent become the only source of truth.

```js
const Parent = () => {
    const [timeCategory, setTimeCategory] = useState("daily");
    const handleTimeCategoryChange = (timeCategory) => {
        setTimeCategory(timeCategory);
    };

    return (
        <Child1 timeCategory={timeCategory} onTimeCategoryChange={handleTimeCategoryChange} />
        <Child2 timeCategory={timeCategory} />
    )
}

const Child1 = ({ timeCategory, onTimeCategoryChange }) => {
    const handleChange = (timeCategory) => {
        onTimeCategoryChange(timeCategory);
  };
}

const Child2 = ({ data, timeCategory }) => {}
```

- Learned how to map a component, so we can only work on one componenet and then map each of the needed component and pass props to change the component state or style

```js
Const Parent = () => {
    return (
        <>
        {data.map((data) => (
            <Child data={data} />
        ))}
        </>
    )
}

const Child = ({ data }) => {}
```

- Learned how to add another instance of object in one object notation

```js
const thisOneObject = data.timeframes[thisAnotherObject].current
```

### Continued development

Can try to develop another same function application and maybe use a backend and a database and add a authentication of users.

## Author

- Frontend Mentor - [@taufiqmahdi](https://www.frontendmentor.io/profile/taufiqmahdi)
- Twitter - [@taufiqmhdi](https://www.twitter.com/taufiqmhdi)