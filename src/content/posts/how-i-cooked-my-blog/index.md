---
title: How I Cooked My Blog - using Gatsby
slug: how-i-cooked-my-blog
date: 2021-09-02
spoiler: "Creating a dish, by boiling water."
published: true
---

Let's discuss about how I built this website using gatsby. First thing first, what was my stack for building this badas\*?

## Building stack

Here are those shits, I used to build my blog. By the way, I faced a lot of version problems, So I suggest you to always stay updated.

- [React](https://reactjs.org/) - After building a real world project, I became that much comfortable that I can work with it in future.
- [Gatsby](https://gatsbyjs.com/) - Gatsby provides development teams an open source frontend framework for creating fast, secure, and scalable websites and a serverless cloud platform to build, deploy, and host them.
- [Styled Component](https://styled-components.com/) - When it comes to styling I chose styled component without any hesitate and write all the styles from scratch.
- [MDX](https://mdxjs.com/) - For content and post I used `mdx` over regular `md`. Though I faced so many problem while settings this up, I learned a lot of things about mdx and `graphql`.

## Which problems I have faced while building this badas\*:

1. As beginner, I wasn't comfortable with neither graphql nor gatsby. So, I faced problems while quering markdown data using graphql,

**Solve**: [`useStaticQuery()`](https://www.gatsbyjs.com/blog/2019-02-20-introducing-use-static-query/) finally saved me from that problem.

2. Matter of sorrow that Gatsby build doesn't find `localStorage` or window while building the production bundle as I need to use `localStorage` for saving the theme.

**Solve**: [`local-storage-fallback`](https://www.npmjs.com/package/fallback-local-storage) package really helped me to solve that problem. I used it like this,

```jsx{5, 7, 13}
import storage from "local-storage-fallback";

function changeTheme() {
  if (theme === "light") {
    setTheme("dark");
    storage.setItem("theme", "dark");
  } else {
    setTheme("light");
    storage.setItem("theme", "light");
  }
}
useEffect(() => {
  const localTheme = storage.getItem("theme");
  if (localTheme === "light") setTheme("light");
  if (localTheme === "dark") setTheme("dark");
}, []);
```

I know it's not the best way for theme switching, but it worked for me. So, no touching if it works :)

3. Let's come to the best tricky and unlucky part for me. While ending the project, I finally trying to add syntax highlighting. I tried seraval solution but alas, failed.

**Solve**: I studied few articles and found that solution. I used `gatsby-remark-prismjs` with `gatsby-plugin-mdx` and it solved my problem.

4. For the syntax theme I used [Dan Abramov](https://mobile.twitter.com/dan_abramov)'s overreacted blog's theme.

## Conclusion
Since, we learn by doing, I learned a lot about them while building it. I faced those problems as I coded this site from scratch, you can use Gatsby's [blog starter](https://github.com/gatsbyjs/gatsby-starter-blog) template.

<!-- ## Why choosing Gatsby over any other platform? -->
