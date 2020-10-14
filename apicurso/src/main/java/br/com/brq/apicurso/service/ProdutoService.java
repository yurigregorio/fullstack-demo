package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.CategoriaRepository;
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
		return this.produtoRepository.findById(id).get();
	}
	
	//save
	public Produto save(Produto produto) {
		
		if(produto.getCategoria() != null) {
			Categoria c = this.categoriaRepository
					.findById( produto.getCategoria().getId() )
					.orElse( this.categoriaRepository.save( produto.getCategoria() ) );
			
			produto.setCategoria(c);
		}
		return this.produtoRepository.save(produto);
	}
	
	//update
	public Produto update(int id, Produto produto) {
	Optional<Produto> obj = this.produtoRepository.findById(id);
 		
 		Produto update = null;
 		
 		if (obj.isPresent()) {
 			update = obj.get();
 			update.setNome(produto.getNome());
 			update.setPreco(produto.getPreco());
 			update.setDescricao(produto.getDescricao());
 			update.setCategoria(produto.getCategoria()); 	
 			
 			update = this.produtoRepository.save(update);
 		}
 		
 		return update;
 	}
 	
	
	//delete
	public void delete(int id) {
		this.produtoRepository.deleteById(id);
	}
	
	public Page<Produto> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		
		return this.produtoRepository.findAll(pageRequest);
	}
	
	
}


