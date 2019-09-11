package com.cmf.spring.security.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmf.spring.security.model.User;
import com.cmf.spring.security.service.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {

	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping
	public User register(@RequestBody User user) {
		return userService.register(user);
	}
	
}
