module.exports = {
  reactStrictMode: true,
  trailingSlash: false,

  async getStaticPaths() {
    return {
      paths: [
        { params: { slug: '/' } }, // Главная страница
        { params: { slug: '/projects' } }, // Страница проектов
      ],
      fallback: false,
    };
  },
};
