package br.com.brq.apicurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer>{

}
