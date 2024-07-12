import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/todo";

export const fetchTodo = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const fetchTodoById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createTodo = async (value: string) => {
  try {
    const response = await axios.post(API_BASE_URL, { value });
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};
