package com.shreya.server.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.shreya.server.order.OrderItems;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(
            nullable = false
    )
    private String name;
    @Column(
            nullable = false
    )
    private String image;

    @Column(
            nullable = false
    )
    private Float price;
    @ManyToMany(mappedBy = "products")
    @JsonIgnore
    private List<OrderItems> orderItems = new ArrayList<>();
    public Product(String name, String image, Float price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}
