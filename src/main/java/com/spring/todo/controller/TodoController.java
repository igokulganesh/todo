package com.spring.todo.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.todo.model.TodoModel;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

	private List<TodoModel> todoList = new ArrayList<TodoModel>(Arrays.asList());

	@GetMapping
	public List<TodoModel> getAllTodo() {
		return todoList;
	}

	@PostMapping
	public int addTodo(@RequestBody TodoModel todo) {
		todoList.add(todo);
		return todo.getId();
	}

	@GetMapping("/{id}")
	public TodoModel getTopicById(@PathVariable Integer id) {
		return todoList.stream().filter(todo -> todo.getId() == id).findFirst().get();
	}

	@GetMapping("/toggle/{id}")
	public void toggleTodo(@PathVariable Integer id) {
		for (int i = 0; i < todoList.size(); i++) {
			TodoModel todo = todoList.get(i);
			if (todo.getId() == id) {
				todo.setCompleted(!todo.getCompleted());
				break;
			}
		}
	}

	@PutMapping("/{id}")
	public void updateTodo(@RequestBody TodoModel todo, @PathVariable Integer id) {
		for (int i = 0; i < todoList.size(); i++) {
			TodoModel t = todoList.get(i);
			if (t.getId() == id) {
				todoList.set(i, todo);
				break;
			}
		}
	}

	@DeleteMapping("/{id}")
	public void deleteTodo(@PathVariable Integer id) {
		todoList.removeIf(todo -> todo.getId() == id);
	}

	@GetMapping("/completed")
	public List<TodoModel> getCompletedTodo() {
		return todoList.stream().filter(todo -> todo.getCompleted()).toList();
	}

	@GetMapping("/active")
	public List<TodoModel> getNotCompletedTodo() {
		return todoList.stream().filter(todo -> !todo.getCompleted()).toList();
	}

	@DeleteMapping("/clearCompleted")
	public void clearCompletedTodo() {
		todoList.removeIf(todo -> todo.getCompleted());
	}

	@GetMapping("/getActiveCount")
	public int getActiveCount(@RequestParam String param) {
		return getNotCompletedTodo().size();
	}
}
