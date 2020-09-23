package br.com.brq.apicurso.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Categoria {

	@Id
	@GeneratedValue (strategy = GenerationType.SEQUENCE, generator = "categoria_id_seq")
	@SequenceGenerator( name = "categoria_id_seq", sequenceName = "categoria_id_seq",allocationSize = 1)
	private int id;
	
	private String nome;
	private String descricao;
	
	@OneToMany(mappedBy = "categoria")	
	@JsonIgnore
	private List<Produto> produtos;
	
}
