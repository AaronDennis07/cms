package com.shreya.server.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
class LoginRequest{
    private String username;
    private String password;
}

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository repository;
    @GetMapping("")
    public ResponseEntity<List<User>> findAll(){
        return ResponseEntity.ok(repository.findAll());
    }
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest request){
        User user = repository.findByUsernameAndPassword(request.getUsername(),request.getPassword()).orElseThrow();
        return ResponseEntity.ok(user);
    }

    @PostMapping("/admin/register")
    public ResponseEntity<String> registerAdmin(@RequestBody LoginRequest request){
        User user = User.builder()
                .password(request.getPassword())
                .username(request.getUsername())
                .role(Role.ADMIN)
                .build();
        repository.save(user);
        return ResponseEntity.ok("Registration Successfull");
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody LoginRequest request){
        User user = User.builder()
                .password(request.getPassword())
                .username(request.getUsername())
                .role(Role.USER)
                .build();
        repository.save(user);
        return ResponseEntity.ok("Registration Successfull");
    }
}
