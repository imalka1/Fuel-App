package lk.fuel_app.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class AppUser {

    @Id
    private String email;
    private String password;
    private String userType;
    private String contactNumber;
}