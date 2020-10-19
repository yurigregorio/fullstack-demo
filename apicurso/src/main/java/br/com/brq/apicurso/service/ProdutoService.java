  
package br.com.brq.apicurso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.repository.CategoriaRepository;
import br.com.brq.apicurso.repository.ImagemRepository;
import br.com.brq.apicurso.repository.ProdutoRepository;

@Service
public class ProdutoService {
	

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
		
	public List<Produto> findAll(){
		return this.produtoRepository.findAll();
	}
	
	public Produto getOne(int id) {
		return this.produtoRepository.findById(id).orElse( new Produto() );
	}
	
	public Produto save(Produto produto) {
		
		if (produto.getCategoria() != null) {
			
			Categoria c = this.categoriaRepository
					.findById( produto.getCategoria().getId() )
					.orElse( this.categoriaRepository.save( produto.getCategoria() )  );
											
			produto.setCategoria(c);
		}
		
		return this.produtoRepository.save(produto);	
	}
	
	public Page<Produto> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		
		return this.produtoRepository.findAll(pageRequest);
	}


}