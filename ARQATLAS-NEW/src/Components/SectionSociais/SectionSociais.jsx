import fundoSection from "../../images/Logo/fundo-section.svg";

const NewsSection = () => {
  return (
    <section
      className="min-h-screen bg-no-repeat bg-cover relative overflow-hidden  "
      style={{
        backgroundImage: `url(${fundoSection})`,
      }}>
      <div className="relative z-10">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between pl-8 pr-8 pt-8">
          <div>
            <h2 className="text-4xl font-bold text-[#C54930]">
              Acompanhe no Instagrem
            </h2>
            <p className="text-gray-800">
              Fique por dentro das últimas novidades
            </p>
          </div>
        </div>

        {/* Grid dos posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 pr-8 pl-8 pt-4">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DQr62nxifAO/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              margin: "1px auto",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
            }}></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DQmUGSrjTNs/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              margin: "1px auto",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
            }}></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DQevj87CSqr/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              margin: "1px auto",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
            }}></blockquote>
        </div>

        {/* Script do Instagram */}
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
    </section>
  );
};

export default NewsSection;
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
