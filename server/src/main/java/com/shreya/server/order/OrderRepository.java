package com.shreya.server.order;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderItems,Integer> {
    public List<OrderItems> findAllByUserId(Integer userId);

    public List<OrderItems> findAllProductsByUserId(Integer id);
}
