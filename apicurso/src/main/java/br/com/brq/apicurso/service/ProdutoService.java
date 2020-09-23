package br.com.brq.apicurso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository; 
	
	public List<Produto> findAll(){
		return this.produtoRepository.findAll();
	}
}
