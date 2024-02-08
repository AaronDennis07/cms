package com.shreya.server.order;

import com.shreya.server.product.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class OrderItems {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(
            nullable = false
    )
    private Integer userId;
    @Column(
            nullable = false
    )
    private String name;
    @Column(
            nullable = false
    )
    private List<Integer> quantities;
    @Column(
            nullable = false
    )
    private Float total;
    @Column(
            nullable = false
    )
    private String address;
    @Column(
            nullable = false
    )

    @ManyToMany
    @JoinTable(
            name = "product_order_items",
            joinColumns = @JoinColumn(name = "order_items_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products = new ArrayList<>();

    public OrderItems(Integer userId, String name, List<Integer> quantities, Float total, String address) {
        this.userId = userId;
        this.name = name;
        this.quantities = quantities;
        this.total = total;
        this.address = address;

    }

    public OrderItems(Integer userId, String name, List<Integer> quantities, Float total, String address,  List<Product> products) {
        this.userId = userId;
        this.name = name;
        this.quantities = quantities;
        this.total = total;
        this.address = address;
        this.products = products;
    }
}
