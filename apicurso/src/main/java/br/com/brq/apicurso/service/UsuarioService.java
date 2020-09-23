package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

 	public List<Usuario> findAll(){
 		 		
 		return this.usuarioRepository.findAll();
 	}
 	
 	public Usuario findOne( int id ){
	 		
 		return this.usuarioRepository.findById(id).get();
 	}
 	
 	public Usuario save(Usuario usuario) {
 		return this.usuarioRepository.save(usuario);
 	}
 	
 	public Usuario update(int id,Usuario usuario) {
 		Optional<Usuario> obj = this.usuarioRepository.findById(id);
 		
 		Usuario update = null;
 		
 		if (obj.isPresent()) {
 			update = obj.get();
 			update.setEmail(usuario.getEmail());
 			update.setNome(usuario.getNome());
 			update.setSenha(usuario.getSenha()); 	
 			
 			update = this.usuarioRepository.save(update);
 		}
 		
 		return update;
 	}
 	
 	public void delete(int id) {
 		this.usuarioRepository.deleteById(id);
 	}
}
