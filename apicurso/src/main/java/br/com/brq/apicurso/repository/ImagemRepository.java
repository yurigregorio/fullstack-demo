package br.com.brq.apicurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Imagem;

@Repository
public interface ImagemRepository extends JpaRepository<Imagem, Integer> {

}
