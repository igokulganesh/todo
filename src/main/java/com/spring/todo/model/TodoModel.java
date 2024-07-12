package com.spring.todo.model;

public class TodoModel {
	public static int autoID = 0;

	private int id;
	private String value;
	private boolean completed;

	public TodoModel() {
		super();
		this.id = getUniqueID();
		this.value = "";
		this.completed = false;
	}

	public TodoModel(String value) {
		super();
		this.id = getUniqueID();
		this.value = value;
		this.completed = false;
	}

	public TodoModel(String value, boolean completed) {
		super();
		this.id = getUniqueID();
		this.value = value;
		this.completed = completed;
	}

	public static int getUniqueID() {
		autoID += 1;
		return autoID;
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

	public boolean getCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
}
