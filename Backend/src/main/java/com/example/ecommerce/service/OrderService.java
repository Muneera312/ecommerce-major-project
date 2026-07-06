package com.example.ecommerce.service;
import com.example.ecommerce.model.*;
import com.example.ecommerce.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private PaymentService paymentService;

    //chechout
    public Order placeOrder(Integer userId){
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(()-> new RuntimeException("Cart Not Found"));
        if (cart.getItems().isEmpty()){
            throw new RuntimeException("Cart is Empty");
        }
        Order order = new Order();
        order.setUserId(userId);
        order.setStatus("PENDING");

        double total=0;
        for (CartItem cartItem : cart.getItems()){
            Product product = productRepository.findById(cartItem.getProduct().getId())
                    .orElseThrow(()-> new RuntimeException("Product Not Found"));
            // stock validation
            if (product.getQuantity()< cartItem.getQuantity()){
                throw new RuntimeException("Insufficient Stock for product " +product.getName());
            }
            //Reduce Stock
            product.setQuantity(product.getQuantity()- cartItem.getQuantity());
            productRepository.save(product);

            //Create Order item
            OrderItem orderItem = new OrderItem();
            orderItem.setProductId(product.getId());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setPrice(product.getPrice());
            orderItem.setOrder(order);

            order.getItems().add(orderItem);
            total += product.getPrice() *cartItem.getQuantity();
        }
        order.setTotalAmount(total);
        Order saveOrder = orderRepository.save(order);

        //Create payment order
        try{
            org.json.JSONObject razorpayOrder = paymentService.createRazorpayOrder(total);
             saveOrder.setRazorpayOrderId(razorpayOrder.getString("id"));
             orderRepository.save(saveOrder);
        }catch (Exception e){
            throw new RuntimeException("Payment Creation Failed");
        }

        //clear cart after order
        cartItemRepository.deleteAll(cart.getItems());
        cart.getItems().clear();
        cartRepository.save(cart);
        return saveOrder;
    }
    //view user order
    public java.util.List<Order> getUserOrders(Integer userId){
        return orderRepository.findByUserId(userId);
    }

    // view admin order
    public java.util.List<Order> getAllOrders(){return orderRepository.findAll();}




}
