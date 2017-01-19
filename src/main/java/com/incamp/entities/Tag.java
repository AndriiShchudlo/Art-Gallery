package com.incamp.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @Column(name = "tag_name")
    private String name;
    private long searches;
    @ManyToMany
    private List<Art> arts;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getSearches() {
        return searches;
    }

    public void setSearches(long searches) {
        this.searches = searches;
    }

    public List<Art> getArts() {
        return arts;
    }

    public void setArts(List<Art> arts) {
        this.arts = arts;
    }


}
