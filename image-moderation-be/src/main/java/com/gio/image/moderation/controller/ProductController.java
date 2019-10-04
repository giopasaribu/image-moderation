package com.gio.image.moderation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gio.image.moderation.dto.ProductDto;
import com.gio.image.moderation.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService productService;

	@RequestMapping(value = "/product", method = RequestMethod.GET)
	public List<ProductDto> getProduct(@RequestParam String status) {
		return productService.getProductByStatus(status);
	}

	@RequestMapping(value = "/product", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateProduct(@RequestBody ProductDto productDto) {
		productService.updateProduct(productDto);
	}

}
