package br.com.brq.apicurso;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.CategoriaRepository;
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
				
	}

}
