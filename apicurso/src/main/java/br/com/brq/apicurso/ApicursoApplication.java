  
package br.com.brq.apicurso;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.model.enums.Perfil;
import br.com.brq.apicurso.repository.CategoriaRepository;
import br.com.brq.apicurso.repository.EnderecoRepository;
import br.com.brq.apicurso.repository.ImagemRepository;
import br.com.brq.apicurso.repository.ProdutoRepository;
import br.com.brq.apicurso.repository.UsuarioRepository;

@SpringBootApplication
public class ApicursoApplication implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository; 
	
	@Autowired
	private ImagemRepository imagemRepository;

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 

	public static void main(String[] args) {
		SpringApplication.run(ApicursoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		//Usuario u = new Usuario(0,"Usuario 1", "123456", "usuario@usuario.com" );
//		Usuario u = Usuario.builder()
//				.nome("Usuário 2")
//				.email("usuario@usuario.com")
//				.senha("123456")
//				.build();		
//		
//		u = this.usuarioRepository.save(u);
//		
		
		//Inserindo primeiro a categoria
		Categoria cat1 = Categoria.builder()
				.nome("Eletrodoméstico")
				.descricao("Eletrodoméstico")				
				.build();
				
		this.categoriaRepository.save(cat1);	
			
		//inserindo o produto
		Produto prod1 = Produto.builder()
				.categoria(cat1)
				.nome("Torradeira")
				.descricao("Torradeira Oster Gourmet")
				.preco(260)
				.build();
			
		Imagem img1 = Imagem.builder().url("https://sipolatti.vteximg.com.br/arquivos/ids/170880-550-570/438278-Torradeira-Eletrica-Em-Aco-Inox-850w-Gift-T850v.jpg?v=636997693125470000").build();
		img1.setProdutos( Arrays.asList(prod1)  );		
		prod1.setImagens( Arrays.asList(img1) );
		this.imagemRepository.save(img1);
		this.produtoRepository.save(prod1);


		Produto prod2 = Produto.builder()
				.categoria(cat1)
				.nome("Fogão")
				.descricao("Fogão")
				.preco(1000)
				.build();
		
		Imagem img = Imagem.builder().url("https://www.havan.com.br/media/catalog/product/cache/55f334c6f9412d6b39cfe195ce4e3943/f/o/fogao-4-bocas-atlas-coliseum-glass-branco_296650_1.jpg").build();
		img.setProdutos( Arrays.asList(prod2)  );		
		prod2.setImagens( Arrays.asList(img) );
		this.imagemRepository.save(img);
		this.produtoRepository.save(prod2);

		
		Produto prod3 = Produto.builder()
				.categoria(cat1)
				.nome("Geladeira")
				.descricao("Geladeira Electrolux")
				.preco(1000)
				.build();
		
		Imagem imgprod3 = Imagem.builder().url("https://a-static.mlcdn.com.br/618x463/geladeira-consul-frost-free-duplex-397-litros-evox-com-freezer-embaixo/consul/326020176/b2af7e290128e3f9ec79cbf097d7ff32.jpg").build();
		imgprod3.setProdutos( Arrays.asList(prod3)  );		
		prod3.setImagens( Arrays.asList(imgprod3) );
		this.imagemRepository.save(imgprod3);
		this.produtoRepository.save(prod3);
		
		Endereco end1 = Endereco
				.builder()
				.bairro("Vila Bela")
				.cep("43454-098")
				.cidade("São Paulo")
				.estado("SP")
				.logradouro("Avenida Brasil")
				.numero("1")
				.build();
		
		
		//SELECT * FROM usuario;
		Usuario u = Usuario.builder()
			.nome("Usuário 2")
			.email("usuario@usuario.com")
			.senha( this.bCryptPasswordEncoder.encode("123456") )
			.endereco(end1)
			.build();	
		
		u.addPerfil(Perfil.ADMIN);
		u.addPerfil(Perfil.CLIENTE);
		
		
		Usuario c = Usuario.builder()
				.nome("Cliente 1")
				.email("cliente@cliente.com")
				.senha( this.bCryptPasswordEncoder.encode("123456") )
				.build();	
			
			c.addPerfil(Perfil.CLIENTE);
			
		this.enderecoRepository.save(end1);
		this.usuarioRepository.save(u);
		this.usuarioRepository.save(c);
	}

}