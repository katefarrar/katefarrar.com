import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
