package com.cmf.spring.security.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cmf.spring.security.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

	Optional<User> findByUserCredentialsUsername(String username);

}