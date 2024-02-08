package com.shreya.server.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class User {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(
            nullable = false
    )
    private String username;
    @Column(
            nullable = false
    )
    private String password;

    @Column(
            nullable = false
    )
    @Enumerated(value = EnumType.STRING)
    private Role role;

    public User(String username, String password, Role role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
