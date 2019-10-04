package com.gio.image.moderation.service;

import java.util.List;

import com.gio.image.moderation.dto.ProductDto;

public interface ProductService {
	
	public List<ProductDto> getProductByStatus(String status);
	
	public void updateProduct(ProductDto productDto);

}
