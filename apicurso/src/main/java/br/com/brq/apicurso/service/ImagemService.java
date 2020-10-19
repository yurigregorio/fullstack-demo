package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.ImagemRepository;


@Service
public class ImagemService {

	@Autowired
	private ImagemRepository imagemRepository;

		
	public List<Imagem> findAll(){
		return this.imagemRepository.findAll();
	}
 	
 	public Imagem getOne( int id ){
	 		
 		return this.imagemRepository.findById(id).get();
 	}
 	
 	public Imagem save(Imagem imagem) {
 		return this.imagemRepository.save(imagem);
 	}
 	
 	public Imagem update(int id,Imagem imagem) {
 		Optional<Imagem> obj = this.imagemRepository.findById(id);
 		
 		Imagem update = null;
 		
 		if (obj.isPresent()) {
 			update = obj.get();
 			update.setUrl(imagem.getUrl());
 			
 			update = this.imagemRepository.save(update);
 		}
 		
 		return update;
 	}
 	
 	public void delete(int id) {
 		this.imagemRepository.deleteById(id);
 	}
 	
 	public Page<Imagem> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		
		return this.imagemRepository.findAll(pageRequest);
	}
}
