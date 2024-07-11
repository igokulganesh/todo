package com.spring.todo.model;

public class TodoModel {
	private int id;
	private String value;
	private boolean isCompleted;
	
	public TodoModel() {}
		
	public TodoModel(int id, String value) {
		super();
		this.id = id;
		this.value = value;
		this.isCompleted = false;
	}
	
	public TodoModel(int id, String value, boolean isCompleted) {
		this.id = id;
		this.value = value;
		this.isCompleted = isCompleted;
	}
	
	// Getters and Setters
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isCompleted() {
		return isCompleted;
	}
	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
}
