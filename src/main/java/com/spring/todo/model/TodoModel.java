package com.spring.todo.model;

public class TodoModel {
	public static int autoID = 0;

	private int id;
	private String value;
	private boolean isCompleted;

	public TodoModel() {
		super();
		this.id = getUniqueID();
		this.value = "";
		this.isCompleted = false;
	}

	public TodoModel(String value) {
		super();
		this.id = getUniqueID();
		this.value = value;
		this.isCompleted = false;
	}

	public TodoModel(String value, boolean isCompleted) {
		super();
		this.id = getUniqueID();
		this.value = value;
		this.isCompleted = isCompleted;
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

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
}
