package com.gio.image.moderation.dto;

import java.io.Serializable;
import java.util.List;

import com.gio.image.moderation.model.Product;
import com.gio.image.moderation.model.ProductAttachment;

public class ProductDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5360903214511663674L;

	protected Long id;

	protected String productName;

	protected String status;

	protected List<ProductAttachment> productAttachment;

	protected String reason;

	public ProductDto(Product product) {
		this.id = product.getId();
		this.productName = product.getProductName();
		this.status = product.getStatus();
		this.productAttachment = product.getProductAttachment();
		this.reason = product.getReason();
	}
	
	public ProductDto() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<ProductAttachment> getProductAttachment() {
		return productAttachment;
	}

	public void setProductAttachment(List<ProductAttachment> productAttachment) {
		this.productAttachment = productAttachment;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

}
