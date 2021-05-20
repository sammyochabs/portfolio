import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />

          <script
            src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
            crossorigin="anonymous"
          ></script>

          <link
            href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
            rel="stylesheet"
            type="text/css"
          />

          <link href="css/styles.css" rel="stylesheet" />
        </Head>
        <body id="page-top">
          <Main />
          <NextScript />

          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

          <script src="js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
