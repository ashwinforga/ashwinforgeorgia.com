[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=18F/federalist-uswds-gatsby)](https://dependabot.com)

# cloud.gov Pages + U.S. Web Design System + Gatsby

This site is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for cloud.gov Pages websites. You can view the [preview](uswds-gatsby.pages.cloud.gov) deployed on cloud.gov Pages.

This code uses the [Gatsby](https://www.gatsbyjs.org/) framework and built with Javascript and [React](https://reactjs.org/).

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Features

✅ [USWDS v2](https://v2.designsystem.digital.gov) javascript, styles, images, and fonts are included by default. Styles can be customized with either SASS or CSS in `src/styles/index.scss`.

✅ Publish blog posts using Markdown. Any markdown files in the `src/blog-posts` directory will be turned into pages at `/blog/<path>` in the application using the `src/templates/blog-post.js` template, where `<path>` is specified in the frontmatter of the file. An index of all posts will be displayed at `/blog` using the `src/templates/blog.js` template.

✅ Publish documentation pages using Markdown. Any markdown files in the `src/documentation-pages` directory will be turned into pages at `/<path>` in the application using the `src/templates/documentation-page.js` template, where `<path>` is specified in the frontmatter of the file. Side navigation for documentation pages can be controlled by setting `sidenav: true` or `sidenav: false` to your page front matter.

✅ Publish custom pages using React. Any javascript files in the `src/pages` directory will be turned into pages at `/<filename>.html`, where `<filename>` is the actualy name of the file.

✅ Customize SEO information for each page by adding the `src/components/seo.js` component to any page or template and providing the desired information. Ex. [Home page](https://github.com/18F/federalist-uswds-gatsby/blob/main/src/pages/index.js#L11).

✅ [Search.gov](https://search.gov) integration - Once you have registered and configured Search.gov for your site by following [these instructions](https://cloud.gov/pages/documentation/search/), add your "affiliate" and "access key" to `gatsby-config.js`. Ex.

```
searchgov: {

  // You should not change this.
  endpoint: 'https://search.usa.gov',

  // replace this with your search.gov account
  affiliate: 'affiliate-agency-account',

  // replace this with your search.gov account access key
  access_key: 'affiliate-agency-account-access-key',
}
```

The logic for using Search.gov can be found in the `src/components/search-form.js` component and supports sending the user to Search.gov to view the results.

✅ [Digital Analytics Program (DAP)](https://digital.gov/services/dap/) integration - Once you have registered your site with DAP add your "agency" and optionally, `subagency` to `gatsby-config.js` and uncomment the appropriate lines. Ex.

```
dap: {
    // agency: 'your-agency',

    // Optional
    // subagency: 'your-subagency',
},
```

✅ [Google Analytics](https://analytics.google.com/analytics/web/) integration - If you have a Google Analytics account to use, add your "ua" to `gatsby-config.js` and uncomment the appropriate lines. Ex.

```
ga: {
    // ua: 'your-ua',
},
```

✅ Out-of-the-box performant caching strategy following [Gatsby recommended practices](https://www.gatsbyjs.org/docs/caching/) via `pages.json`. See [cloud.gov Pages Documentation](https://cloud.gov/documentation/) for more information on `pages.json`.

## Getting Started

### Easy mode

#### From cloud.gov Pages

This will create a copy of this repo in a Github repository of your choice and add it to your cloud.gov Pages dashboard.

- From [cloud.gov Pages](https://pages.cloud.gov/sites) click the "+ Add Site" button.
- Click the "Use this template" button for the appropriate template
- Follow the instructions

#### From Github

This will create a copy of this repo in a Github repository of your choice but you will need to add it your [cloud.gov Pages dashboard](https://pages.cloud.gov/sites/new).

- Click the "Use this template" button above or [here](https://github.com/cloud-gov/pages-uswds-gatsby/generate).
- Follow the instructions
- Return to [cloud.gov Pages](https://pages.cloud.gov/sites/new) and add the repository.

### Installation for development

    $ git clone https://github.com/cloud-gov/pages-uswds-gatsby
    $ cd pages-uswds-gatsby

### Running the application

#### With locally installed `node`

    $ npm install
    $ npm run develop

To build but not serve the site, run `npm run build`.

#### With Docker

    $ docker-compose run node npm install
    $ docker-compose up

To build but not serve the site, run:

```
docker-compose run node npm run build
```

.

Note that when built by cloud.gov Pages, `npm run pages` is used instead of
`npm run build`.

Open your web browser to [localhost:8000](http://localhost:8000/) to view your
site.

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Note that when built by cloud.gov Pages, `npm run pages` is used instead of the
`build` script.

## Technologies you should be familiarize yourself with

- [Gatsby](https://www.gatsbyjs.org/) - The framework that does all the magic
- [React](https://reactjs.org/) - The view library
- [GraphQL](https://graphql.org/) - The data layer used by Gatsby
- [node](https://nodejs.org/en/) - Javascript runtime
- [npm](https://www.npmjs.com/) - Javascript dependency manager
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Things to Note

- The cloud.gov Pages script runs the Gatsby build with the `--prefix-paths` flag. This is necessary to make sure all internal internal links point to the correct path for preview deployments.
- Always use the `Link` component provided by Gatsby for internal links, see previous note.
- Importing USWDS images can be done straight from their local location in `node_modules`. See [Banner.js](https://github.com/18F/federalist-uswds-gatsby/blob/main/src/components/banner.js) for an example.
- This is built from the default [Gatsby default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/), you can view the documentation there to see more of what is included.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.


### notes

npm install
npm run develop
npm run deploy

: North Fulton, South Forsyth, and Northwest Gwinnett.

But when you give a banquet, invite the poor, the crippled, the lame, the blind, 14 and you will be blessed. Although they cannot repay you, you will be repaid at the resurrection of the righteous.”