package br.com.brq.apicurso.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "item_venda")
public class ItemVenda implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ITEM_NAME_SEQ")
	@SequenceGenerator(sequenceName = "item_seq", allocationSize = 1, name = "ITEM_NAME_SEQ")
	private int id;

	@ManyToOne
	@JoinColumn(name = "produto_id")
	//@JsonIgnore
	private Produto produto;

	@ManyToOne
	@JoinColumn(name = "venda_id")
	@JsonIgnore
	private Venda venda;

	@Column(name = "quantidade")
	private int quantidade;
	
}
