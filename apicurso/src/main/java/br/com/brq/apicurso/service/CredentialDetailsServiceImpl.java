package br.com.brq.apicurso.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.UsuarioRepository;
import br.com.brq.apicurso.security.CredencialSecurityModel;

@Service
public class CredentialDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario usuario = this.usuarioRepository.findByEmail( email );

		if (usuario == null) {
			throw new UsernameNotFoundException(email);
		}

		return new CredencialSecurityModel (usuario.getId(), usuario.getEmail(), usuario.getSenha(), usuario.getNome(), null  );
	}
}