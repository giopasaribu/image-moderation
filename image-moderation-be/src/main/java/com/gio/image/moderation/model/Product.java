package com.gio.image.moderation.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.gio.image.moderation.dto.ProductDto;

@Entity
public class Product implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8757650129655644026L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Long id;

	protected String productName;

	protected String status;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	@OrderBy("seq asc")
	@JsonDeserialize
	protected List<ProductAttachment> productAttachment;
	
	protected String reason;
	
	public Product(ProductDto productDto) {
		this.id = productDto.getId();
		this.productName = productDto.getProductName();
		this.status = productDto.getStatus();
		this.productAttachment = productDto.getProductAttachment();
		this.reason = productDto.getReason();
	}
	
	public Product() {}

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
