package com.example.ecommerce.model;
import jakarta.persistence.*;
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;

    private String name;
    private String description;
    private double price;
    private int quantity;
    private double rating;
    private String imageUrl;
    @Column(nullable = false)
    private String category;

    public Product (){}

    public Product(String name, String description, double price, int quantity, double rating, String imageUrl){
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
