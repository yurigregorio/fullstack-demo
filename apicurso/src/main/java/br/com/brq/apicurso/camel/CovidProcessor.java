package br.com.brq.apicurso.camel;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import com.fasterxml.jackson.databind.ObjectMapper;

public class CovidProcessor implements Processor {
	
	@Override
	public void process(Exchange exchange) throws Exception {		
		String input = exchange.getIn().getBody(String.class);
		
		ObjectMapper objectMapper = new ObjectMapper();
		DataCovidModel dataCovidModel = objectMapper.readValue(input, DataCovidModel.class);
		
		System.out.println(dataCovidModel);
	}
}

