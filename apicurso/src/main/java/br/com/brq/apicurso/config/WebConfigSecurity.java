  
package br.com.brq.apicurso.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.com.brq.apicurso.security.JwtAutenticacaoFiltro;
import br.com.brq.apicurso.security.JwtAutorizacaoFiltro;
import br.com.brq.apicurso.security.JwtUtil;
import br.com.brq.apicurso.service.CredentialDetailsServiceImpl;
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
@EnableWebSecurity
public class WebConfigSecurity extends WebSecurityConfigurerAdapter {
	private static final String[] PUBLIC_ENDPOINT = {
			"/v2/api-docs",
            "/configuration/ui",
            "/swagger-resources/**",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**"
	};

	
	private static final String[] PUBLIC_ENDPOINT_GET = {
			"/produtos", "/csrf", "/"
	};
	
	private static final String[] PUBLIC_ENDPOINT_POST = {
			"/autenticacao"	
	};
		
	@Autowired
	private CredentialDetailsServiceImpl userDetailsService;
		
	@Autowired
	private JwtUtil jwtUtil;
		
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
	    
    @Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	protected void configure( HttpSecurity http ) throws Exception {
		//http.csrf().disable().authorizeRequests().anyRequest().permitAll();
		http.cors().and().csrf().disable().authorizeRequests()
			.antMatchers(HttpMethod.GET, PUBLIC_ENDPOINT_GET).permitAll()
			.antMatchers(HttpMethod.POST, PUBLIC_ENDPOINT_POST).permitAll()
			.antMatchers(PUBLIC_ENDPOINT).permitAll()
			.anyRequest().authenticated()
			.and()
            //gerenciamenteo de sessão STATELESS
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.addFilter( new JwtAutenticacaoFiltro( authenticationManager(), jwtUtil));
		http.addFilter(new JwtAutorizacaoFiltro(authenticationManager() , jwtUtil, userDetailsService));
	}
}