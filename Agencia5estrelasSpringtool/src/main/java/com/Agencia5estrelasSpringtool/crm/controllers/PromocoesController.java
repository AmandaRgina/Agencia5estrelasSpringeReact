package com.Agencia5estrelasSpringtool.crm.controllers;


import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.Agencia5estrelasSpringtool.crm.model.Promocoes;

import com.Agencia5estrelasSpringtool.crm.repository.PromocoesRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/promocoes")
public class PromocoesController {

	
	
	
	@Autowired
	private PromocoesRepository promocoesRepository;
	
	@GetMapping
	public List<Promocoes>lista_promocoes(){
		
		return promocoesRepository.findAll();
		
	};
	
	@GetMapping("/{id}")
	
	public Promocoes encontrardestino (@PathVariable(value="id") long id_promocoes) {
		
		return promocoesRepository.findById(id_promocoes);
	}
	
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Promocoes adicionar (@RequestBody Promocoes promocoes) {
		
		return promocoesRepository.save(promocoes);
	}
	
	@DeleteMapping("/{id}")
	
	public void deletardestino ( Promocoes promocoes,@PathVariable(value="id") long id_promocoes) {
		
		promocoesRepository.deleteById(id_promocoes);
	}
	
	@PutMapping("/{id}")
	public Promocoes atualizardestinos(@RequestBody Promocoes promocoes ,@PathVariable(value="id") long id_promocoes) {
		
		promocoes.setId_promocoes(id_promocoes);
		
		return promocoesRepository.save(promocoes);
		
	}
	
}
