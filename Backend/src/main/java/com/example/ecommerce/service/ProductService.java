package com.example.ecommerce.service;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ecommerce.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    //CREATE
    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    //READ ALL
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    //READ One product
    public Product getProductById(Integer id){
        return productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not found with id :  " +id));
    }

    //UPDATE
    public Product updateProduct(Integer id, Product newProduct){
        Product existing = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not found with given id : " +id));
        existing.setName(newProduct.getName());
        existing.setDescription(newProduct.getDescription());
        existing.setPrice(newProduct.getPrice());
        existing.setQuantity(newProduct.getQuantity());
        existing.setRating(newProduct.getRating());
        existing.setImageUrl(newProduct.getImageUrl());
        return productRepository.save(existing);
    }

    //DELETE
    public void deleteProduct(Integer id ){
       Product product= productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product Not found with id: " +id));
       productRepository.delete(product);

    }
}
