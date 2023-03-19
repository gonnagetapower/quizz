import axios from 'axios';

// Создаём инстанс axios.
const http = axios.create({
  headers: {
    // Прикрепляем заголовок, отвечающий за параметры запуска.
    Authorization: `Bearer ${window.location.search.slice(1)}`,
  }
});

export default http;