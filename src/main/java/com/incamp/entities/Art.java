package com.incamp.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "art")
public class Art {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "art_id")
    private int id;
    @ManyToOne()
    @JoinColumn(name = "owner_id")
    private User owner;
    private String artName;
    private int likes;
    private int views;
    private String imagePath;
    private String description;
    @Temporal(TemporalType.DATE)
    private LocalDate creationDate;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "art")
    @JoinColumn(name = "comment_id")
    private List<Comment> comments;
    @ManyToMany(mappedBy = "arts",fetch = FetchType.EAGER)
    private List<Tag> tags;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getArtName() {
        return artName;
    }

    public void setArtName(String name) {
        this.artName = name;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }
}
