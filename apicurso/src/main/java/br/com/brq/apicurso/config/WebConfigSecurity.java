package br.com.brq.apicurso.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebConfigSecurity extends WebSecurityConfigurerAdapter {

	protected void configure( HttpSecurity http ) throws Exception {
		
		http.csrf().disable().authorizeRequests().anyRequest().permitAll();
//		http.csrf().disable().authorizeRequests()
//			.antMatchers(HttpMethod.GET).permitAll()
//			.anyRequest().authenticated();	
	}
}