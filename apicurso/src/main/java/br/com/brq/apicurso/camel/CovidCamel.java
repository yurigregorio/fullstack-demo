package br.com.brq.apicurso.camel;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CovidCamel extends RouteBuilder {
	
	@Value("${server.port}")
	private int port;

	@Override
	public void configure() throws Exception {
		
		restConfiguration().host("localhost").port(port);
		
		from("timer:covid?period={{timer.period}}")
			.to("https://covid19-brazil-api.now.sh/api/report/v1")
			.process(new CovidProcessor())
			.log("${body}");
		
	}

}

