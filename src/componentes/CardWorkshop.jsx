
function CardWorkshop({workshop}) {
    const {titulo, master, img, horario, lugar, href} = workshop;

  return (
    <div class="max-w-sm rounded-xl">
      <a href="#">
        <img class="rounded-t-lg object-cover h-48 w-96" src={img} alt="" />
      </a>
      <div class="p-5 bg-gray-600 rounded-b-xl">
        <a href="#">
          <h5 class=" mb-2 text-2xl font-bold tracking-tight text-white">
            {titulo}
          </h5>
        </a>
        <p class="mb-3 font-normal text-blue-700 ">
          {master}
        </p>
        <p class="mb-3 font-normal text-white ">
          Lugar: {lugar}
        </p>
        <p class="mb-3 font-normal text-white ">
          Hora: {horario}
        </p>
        <a
          href={href}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Inscribirse
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default CardWorkshop;

CardWorkshop.defaultProps = {
  work: {
    titulo: "Titulo",
    master: " - ",
    img: " - ",
    href: "#",
  },
};
