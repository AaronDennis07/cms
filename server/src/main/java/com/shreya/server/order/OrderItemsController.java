package com.shreya.server.order;

import com.shreya.server.product.Product;
import com.shreya.server.product.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@AllArgsConstructor

class AddOrderRequest{
    Integer userId; String name; List<Integer> quantities; Float total; String address; String roomNo;
    List<Integer> productsIds;
}

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/orders")
public class OrderItemsController {
    private final OrderRepository repository;
    private final ProductRepository productRepository;
    @GetMapping("")
    public ResponseEntity<List<OrderItems>> findAll(){
        return ResponseEntity.ok(repository.findAll());
    }


    @PostMapping("")
    public ResponseEntity<OrderItems> addOrder(@RequestBody AddOrderRequest request){
        OrderItems orderItems = new OrderItems(request.getUserId(), request.getName(), request.getQuantities(), request.getTotal(), request.getAddress());


        List<Product> products = productRepository.findAllById(request.getProductsIds());


        for (Product product : products) {
            product.getOrderItems().add(orderItems);
            orderItems.getProducts().add(product);
        }

        repository.save(orderItems);

        return ResponseEntity.ok(orderItems);
    }

//    @GetMapping("/test")
//    public ResponseEntity<List<OrderItems>> findAllWithProducts(){
//        return ResponseEntity.ok(repository.findAllWithProducts());
//    }
//    @GetMapping("/user/{id}")
//    public ResponseEntity<List<OrderItems>> findByUsername(@PathVariable Integer id){
//        return ResponseEntity.ok(repository.findAllByUserId(id));
//    }
//    @PostMapping("/test/orders")
//    public ResponseEntity<OrderItems> findByUsername(@PathVariable Integer id){
//        OrderItems items= repository.findById((id)).orElseThrow();
//        List<Product> products = productRepository.findAllByOrderItems(items);
//        System.out.println(products);
//        return ResponseEntity.ok(items);
//    }
    
    @GetMapping("/{id}")
    public ResponseEntity<OrderItems> findByOne(@PathVariable Integer id){
        OrderItems items= repository.findById((id)).orElseThrow();
        return ResponseEntity.ok(items);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<List<OrderItems>> findByOneByUser(@PathVariable Integer id){
        List<OrderItems> items= repository.findAllByUserId((id));
        return ResponseEntity.ok(items);
    }
}
