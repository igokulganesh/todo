import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/todo";

export const fetchTodo = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchTodoById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createTodo = async (value: string) => {
  try {
    const response = await axios.post(API_BASE_URL, { value });
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
  }
};

export const updateTodoApi = async ({ id, value, completed }) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, {
      id,
      value,
      completed,
    });
    return response.data;
  } catch (error) {
    console.error("Error Updating item:", id, error);
  }
};

export const toggleTodoById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/toggle/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteTodoApi = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteCompletedTodoApi = async () => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/clearCompleted`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
