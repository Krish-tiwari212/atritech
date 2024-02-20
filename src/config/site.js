export function constructMetadata({
  title = "Atri Techonologies ",
  description = "Your website deserves more than just clicks. We craft digital experiences that captivate, convert, and propel you towards success. What's your story?",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    icons,
    metadataBase: new URL(""),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
