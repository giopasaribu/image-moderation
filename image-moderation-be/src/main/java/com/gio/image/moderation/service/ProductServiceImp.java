package com.gio.image.moderation.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import com.gio.image.moderation.constant.Constant;
import com.gio.image.moderation.dto.ProductDto;
import com.gio.image.moderation.model.Product;
import com.gio.image.moderation.model.ProductAttachment;
import com.gio.image.moderation.repository.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	protected ProductRepository productRepository;

	@Override
	public List<ProductDto> getProductByStatus(String status) {

		if(StringUtils.isEmpty(status)) {
			status = Constant.STATUS_PENDING;
		}
		
		List<Product> products = productRepository.findByStatus(status);
		List<ProductDto> productDtos = null;
		if (!CollectionUtils.isEmpty(products)) {
			for (Product product : products) {
				ProductDto productDto = new ProductDto(product);
				productDtos = productDtos == null ? new ArrayList<ProductDto>() :productDtos;
				productDtos.add(productDto);
			}
		}

		return productDtos;
	}

	@Override
	public void updateProduct(ProductDto productDto) {
		Product product = new Product(productDto);
		List<ProductAttachment> productAttachments = product.getProductAttachment();
		if (!CollectionUtils.isEmpty(productAttachments)) {
			for (ProductAttachment productAttachment : productAttachments) {
				productAttachment.setProduct(product);
			}
		}
		productRepository.save(product);
	}

}
