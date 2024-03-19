const generateMarginSnippet = ({
  brand,
  values
}: {
  brand: string;
  values: (string | number)[];
}) => {
  const snippets = {
    [`${brand}-margin custom style`]: values.map((value) => ({
      prefix: `${brand}-m-${value}`,
      body: `${brand}-m-${value}`,
      description: `margin: ${value}${isNaN(Number(value)) ? "" : "px"};`
    }))
  };

  const snippetJSON = JSON.stringify(snippets, null, 2);

  return snippetJSON;
};

export default generateMarginSnippet;
