package com.example.ecommerce.controller;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/products")

public class ProductController {
    @Autowired
    private ProductService productService;

    //CREATE
    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }
    //READ All
    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id){
        return productService.getProductById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Integer id , @RequestBody Product product){
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Integer id){
        productService.deleteProduct(id);
        return "Product Deleted Successfully";
    }

}
