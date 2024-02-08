package com.shreya.server.product;

import jakarta.transaction.Transactional;
import lombok.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
class AddProductRequest{
    private String name;
    private Float price;
    private String image;
}

@Data
@AllArgsConstructor
@Builder
class UpdateProductRequest{
    private String name;
    private Float price;

}

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/products")
public class ProductController {
    private final ProductRepository repository;
    @GetMapping("")
    public ResponseEntity<List<Product>> findAll(){
        return ResponseEntity.ok(repository.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Product> findOne(@PathVariable Integer id ){
        return ResponseEntity.ok(repository.findById(id).orElseThrow());
    }
    @PostMapping("")
    public ResponseEntity<Product> addProduct(@RequestBody AddProductRequest request){
        Product product = Product.builder()
                .image(request.getImage())
                .price(request.getPrice())
                .name(request.getName())
                .build();
        repository.save(product);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer id,@RequestBody UpdateProductRequest request){
        Product product = repository.findById(id).orElseThrow();
        product.setName(request.getName());
        product.setPrice(request.getPrice());
      
        repository.save(product);
        return ResponseEntity.ok(product);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<List<Product>> deleteProduct(@PathVariable Integer id){
        repository.deleteById(id);
        return ResponseEntity.ok(repository.findAll());
    }
}
