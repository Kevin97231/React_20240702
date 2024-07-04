import axios from "axios";
import { useState } from "react";

const api = axios.create();

api.interceptors.request.use((config) => {
  // Cela va créer une nouvelle instance de la classe 'Promise' . Une promesse représenter une valeur
  // qui peut être disponible maintenant, dans le futur ou jamais .
  //   La fonction callback passée en paramètre (resolve) sera appelée lorsque la promesse sera résolue

  return new Promise((resolve) => setTimeout(() => resolve(config), 1500)); // Délai de 1,5secondes
});

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);
    try {
      const response = await requestFunction(...args);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  const get = (endpoint) => handleRequest(api.get, endpoint);
  const post = (endpoint, data) => handleRequest(api.post, endpoint, data);
  const put = (endpoint, id, data) =>
    handleRequest(api.put, `${endpoint}/${id}`, data);
  const remove = (endpoint, id) =>
    handleRequest(api.delete, `${endpoint}/${id}`);

  return {
    loading,
    error,
    get,
    post,
    put,
    remove,
  };
};
