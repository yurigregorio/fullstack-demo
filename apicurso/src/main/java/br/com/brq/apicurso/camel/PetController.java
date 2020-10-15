package br.com.brq.apicurso.camel;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value = "camel/pets")
public class PetController {

	private static final String[] PETS = new String[] { "Jade", "Bolinha", "Floquinho" };
	
	@GetMapping (value = "{id}")
	/* Nos vamos receber no ID números de 1 a 3*/
	public Map<String, String> getById(@PathVariable int id){
		if (id > 0 && id <= PETS.length) {
			String pet = PETS[id - 1];
			// { "name", pet  }
			// < "name", "Bolinha" > 
			return Collections.singletonMap("name", pet);
		}
		else {
			return Collections.emptyMap();
		}
	}
	
}

