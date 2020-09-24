package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.repository.EnderecoRepository;

@Service
public class EnderecoService {

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	public List<Endereco> findAll(){
	 		
 		return this.enderecoRepository.findAll();
 	}
 	
 	public Endereco getOne( int id ){
	 		
 		return this.enderecoRepository.findById(id).get();
 	}
 	
 	public Endereco save(Endereco endereco) {
 		return this.enderecoRepository.save(endereco);
 	}
 	
 	public Endereco update(int id,Endereco endereco) {
 		Optional<Endereco> obj = this.enderecoRepository.findById(id);
 		
 		Endereco update = null;
 		
 		if (obj.isPresent()) {
 			update = obj.get();
 			
 			update.setLogradouro(endereco.getLogradouro());
 			update.setNumero(endereco.getNumero());
 			update.setBairro(endereco.getBairro());
 			update.setCidade(endereco.getCidade());
 			update.setEstado(endereco.getEstado());
 			update.setCep(endereco.getCep());
 			
 			update = this.enderecoRepository.save(update);
 		}
 		
 		return update;
 	}
 	
 	public void delete(int id) {
 		this.enderecoRepository.deleteById(id);
 	}
 	
 	public Page<Endereco> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		
		return this.enderecoRepository.findAll(pageRequest);
	}
	
	
}
