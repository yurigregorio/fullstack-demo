package br.com.brq.apicurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import br.com.brq.apicurso.model.Venda;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Integer> {

}
