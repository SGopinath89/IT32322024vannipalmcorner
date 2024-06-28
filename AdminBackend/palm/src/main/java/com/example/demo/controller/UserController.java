package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            // Handle empty list case (e.g., return a specific response)
            return Collections.emptyList(); // Return an empty list
        } else {
            // Users found, return the list as usual
            return users;
        }
    }

    @GetMapping("/{Uid}")
    public User getUserById(@PathVariable String Uid) {
        return userService.getUserById(Uid);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{Uid}")
    public User updateUser(@PathVariable String Uid, @RequestBody User user) {
        user.setId(Uid);
        return userService.saveUser(user);
    }

    @DeleteMapping("/{Uid}")
    public void deleteUser(@PathVariable String Uid) {
        userService.deleteUser(Uid);
    }
}
