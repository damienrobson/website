export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("gardenByMaturity", (collectionApi) => {
    return collectionApi.getFilteredByTag("learning").sort((a, b) => {
      const maturityOrder = { evergreen: 1, sapling: 2, seed: 3 };
      return maturityOrder[a.data.maturity] - maturityOrder[b.data.maturity];
    });
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
      dateObj,
    );
  });

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
  };
}
