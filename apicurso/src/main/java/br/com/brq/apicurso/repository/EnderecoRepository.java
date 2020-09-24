package br.com.brq.apicurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.brq.apicurso.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {

}
