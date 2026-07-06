package com.example.ecommerce.controller;
import com.example.ecommerce.model.Order;
import com.example.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.ecommerce.service.PaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create-order")
    public String createOrder(@RequestParam double amount) throws Exception {
        return paymentService.createRazorpayOrder(amount).toString();
    }

    //verify payment
    @PostMapping("/verify")
    public String verifyPayment(
            @RequestParam String razorpayOrderId,
            @RequestParam String paymentId
    ){
        Order order = orderRepository.findAll()
                .stream()
                .filter(o-> razorpayOrderId.equals(o.getRazorpayOrderId()))
                .findFirst()
                .orElseThrow(()->new RuntimeException("Order not found"));
        order.setPaymentId(paymentId);
        order.setStatus("PAID");
        orderRepository.save(order);
        return "Payment Successful ";
    }











}


