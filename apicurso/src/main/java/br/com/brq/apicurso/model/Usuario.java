package br.com.brq.apicurso.model;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import br.com.brq.apicurso.model.enums.Perfil;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Usuario {
	
	@Id
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "usuario_seq_id" )
	@SequenceGenerator ( sequenceName = "usuario_seq_id", name = "usuario_seq_id", allocationSize = 1 )
	private int id;
		
	private String nome;	
	private String senha;
	private String email;
	
	@OneToOne
	@JoinColumn ( name = "endereco_id" )
	private Endereco endereco;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name = "PERFIS")
	private Set<Integer> perfis = new HashSet<>();
	
	
	public Set<Perfil> getPerfis() {
		return perfis.stream().map(x -> Perfil.toEnum(x)).collect(Collectors.toSet());
	}
	
	public void addPerfil(Perfil perfil) {
		if (perfis == null) {
			perfis = new HashSet<>();
		}
		
		perfis.add( perfil.getCodigo() );
	}
	
}