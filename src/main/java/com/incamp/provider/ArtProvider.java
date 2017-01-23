package com.incamp.provider;

import com.incamp.entity.Art;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtProvider extends JpaRepository<Art, Integer> {

    @Query("Select c from Art c join fetch c.tags a join fetch c.owner q ")
    List<Art> findForHomePage();

    @Query("Select c from Art c join fetch c.owner u  where u.userName = ?1 or u.lastName = ?1 or u.firstName = ?1 ")
    List<Art> findByOwner(String search);

}
