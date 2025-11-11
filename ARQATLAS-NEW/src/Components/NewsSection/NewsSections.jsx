import fundoSection from "../../images/Logo/fundo-section.svg";
const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      date: "9 de julho de 2025",
      title: "lorem ipsum dolor sit amet - lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      image: "",
      link: "/noticias/",
    },
    {
      id: 2,
      date: "9 de julho de 2025",
      title: "lorem ipsum dolor sit amet - lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      image: "",
      link: "/noticias/",
    },
    {
      id: 3,
      date: "9 de julho de 2025",
      title: "lorem ipsum dolor sit amet - lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      image: "",
      link: "/noticias/",
    },
  ];

  return (
    <section className="min-h-screen bg-no-repeat bg-cover relative overflow-hidden  ">
      <div className="relative z-10">
        <div className="flex items-start justify-between p-8">
          <div>
            <h2 className="text-4xl font-bold text-[#C54930]">
              Nossa Ultimas Notícias
            </h2>
            <p className="text-gray-800">
              Fique por dentro das últimas novidades
            </p>
          </div>
          <a
            href="/noticias"
            className="inline-flex items-center px-4 py-2 border-2 border-[#244A67] text-[#244A67] rounded-md hover:bg-[#244A67] hover:text-white transition-colors duration-200 bg-transparent">
            Ver Mais
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white-50  border-2 border-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 text-balance">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {news.description}
                </p>
                <a
                  href={news.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors">
                  Leia mais
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
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
