package com.gio.image.moderation.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gio.image.moderation.model.Product;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findByStatus(String status);
}
