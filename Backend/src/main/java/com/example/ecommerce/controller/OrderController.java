package com.example.ecommerce.controller;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/checkout")
    public Order placeOrder (@RequestParam Integer userId){
        return orderService.placeOrder(userId);
    }

    @GetMapping("/{userId}")
    public List<Order> getOrders(@PathVariable Integer userId){
        return orderService.getUserOrders(userId);
    }
    @GetMapping("/admin")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
}
