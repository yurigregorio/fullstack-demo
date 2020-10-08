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
	private EnderecoRepository	enderecoRepository;
	
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
				.nome("Geladeira")
				.descricao("Geladeira")
				.preco(2500)
				.build();
			
		
		Imagem img2 = Imagem.builder().url("Testedeimagemdois.com").build();
		img2.setProdutos(Arrays.asList(prod1));
		prod1.setImagens(Arrays.asList(img2));
		this.imagemRepository.save(img2);
		this.produtoRepository.save(prod1);

		
//		System.out.println(this.produtoRepository.findAll());
//		System.out.println(this.categoriaRepository.findAll());
		
		Produto prod2 = Produto.builder()
				.categoria(cat1)
				.nome("Fogão")
				.descricao("Fogão")
				.preco(1000)
				.build();
		
//		List <Produto> arr = new ArrayList<Produto>();
//		arr.add(prod2);
		
		Imagem img = Imagem.builder().url("http://localhost:8080").build();

		//associando os objetos
		img.setProdutos( Arrays.asList(prod2)  );		
		prod2.setImagens( Arrays.asList(img) );

		this.imagemRepository.save(img);
		this.produtoRepository.save(prod2);
				
		//System.out.println(this.imagemRepository.findAll());
		
		
		Endereco end1 = Endereco
						.builder()
						.bairro("Vila Boa")
						.cep("06253-459")
						.cidade("Esperanca")
						.estado("SP")
						.logradouro("Avenida Africa")
						.numero("1")
						.build();
		
		//SELECT * FROM usuario;
				Usuario u = Usuario.builder()
					.nome("Usuário 2")
					.email("usuario@usuario.com")
					.senha("123456")
					.senha( this.bCryptPasswordEncoder.encode("123456") )
					.endereco(end1)
					.build();		
		
				u.addPerfil(Perfil.ADMIN);
				u.addPerfil(Perfil.CLIENTE);
				
				
		this.enderecoRepository.save(end1);
		u = this.usuarioRepository.save(u);

	}

}
