
package br.com.brq.apicurso.camel;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class DataCovidModel {

	private List<UfCovidModel> data = new ArrayList<UfCovidModel>();
}
