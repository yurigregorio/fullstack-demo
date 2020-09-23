package br.com.brq.apicurso.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Produto {

	@Id
	@GeneratedValue (strategy = GenerationType.SEQUENCE, generator = "produto_id_seq")
	@SequenceGenerator( name = "produto_id_seq", sequenceName = "produto_id_seq",allocationSize = 1)
	private int id;
	
	private String nome;
	private String descricao;
	private float preco;
	
	@ManyToOne
	@JoinColumn (name = "categoria_id")
	private Categoria categoria_id;
}
