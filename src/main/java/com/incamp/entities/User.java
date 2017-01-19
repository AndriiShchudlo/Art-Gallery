package com.incamp.entities;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "user_id")
    private int id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    @OneToMany(fetch = FetchType.EAGER)
    private List<Art> userArts;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public boolean addArt(Art a) {
//        if(!userArts.contains(a)) {
//            userArts.add(a);
//            return true;
//        }
//
//        return false;
//    }
//
//    public boolean removeArt(Art a) {
//        if(userArts.contains(a)) {
//            userArts.remove(a);
//            return true;
//        }
//
//        return false;
//    }

   /* public List<Art> getArts() {
        return Collections.unmodifiableList(userArts);
    }*/

    public List<Art> getUserArts() {
        return userArts;
    }

    public void setUserArts(List<Art> userArts) {
        this.userArts = userArts;
    }
}
