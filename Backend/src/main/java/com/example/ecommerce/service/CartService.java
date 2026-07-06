package com.example.ecommerce.service;
import com.example.ecommerce.model.*;
import com.example.ecommerce.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    //get or Create cart
    public Cart getOrCreateCart(Integer userId){
        return cartRepository.findByUserId(userId).orElseGet(()-> {
            Cart cart = new Cart();
            cart.setUserId(userId);
            return cartRepository.save(cart);
        });
    }

    //Add to Cart
    public Cart addToCart(Integer userId, Integer productId , int quantity){
        Cart cart = getOrCreateCart(userId);
        //validate product
        Product product = productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("Product Not Found "));
        //check existing item
        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(item -> item.getProduct().getId().equals(productId))
                .findFirst();
        if (existingItem.isPresent()){
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity()+ quantity);
            cartItemRepository.save(item);
        }else {
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            newItem.setCart(cart);
            cartItemRepository.save(newItem);
            cart.getItems().add(newItem);
        }
        return cartRepository.save(cart);
    }

    //view cart
    public Cart viewCart(Integer userId){
        return cartRepository.findByUserId(userId)
                .orElseThrow(()-> new RuntimeException("Cart not Found"));
    }

    //update quantity
    public Cart updateQuantity(Integer itemId, int quantity) {

        CartItem item = cartItemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item Not Found"));

        item.setQuantity(quantity);

        cartItemRepository.save(item);

        return item.getCart();
    }

    //remove item
    public String removeItem(Integer itemId ){
        cartItemRepository.deleteById(itemId);
        return "Item Removed From the Cart";
    }

}
