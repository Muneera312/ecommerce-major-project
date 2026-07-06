package com.example.ecommerce.controller;
import com.example.ecommerce.dto.LoginResponse;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;
import com.example.ecommerce.dto.AuthRequest;
import com.example.ecommerce.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody AuthRequest request) {


            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );
            User user = userRepository
                    .findByUsername(request.getUsername())
                    .orElseThrow();
            String token = jwtUtil.generateToken(user.getUsername());

        return new  LoginResponse(
                token,
                user.getUsername(),
                user.getRole(),
                user.getId());
    }
}