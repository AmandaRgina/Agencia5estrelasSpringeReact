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


import com.Agencia5estrelasSpringtool.crm.model.Destinos;

import com.Agencia5estrelasSpringtool.crm.repository.DestinosRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/destinos")
public class DestinosController {

	
	
	
	@Autowired
	private DestinosRepository destinosRepository;
	
	@GetMapping
	public List<Destinos>lista_destinos(){
		
		return destinosRepository.findAll();
		
	};
	
	@GetMapping("/{id}")
	
	public Destinos encontrardestino (@PathVariable(value="id") long id_destinos) {
		
		return destinosRepository.findById(id_destinos);
	}
	
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Destinos adicionar (@RequestBody Destinos destinos) {
		
		return destinosRepository.save(destinos);
	}
	
	@DeleteMapping("/{id}")
	
	public void deletardestino (Destinos destinos,@PathVariable(value="id") long id_destinos) {
		
		destinosRepository.deleteById(id_destinos);
	}
	
	@PutMapping("/{id}")
	public Destinos atualizardestinos(@RequestBody Destinos destinos ,@PathVariable(value="id") long id_destinos) {
		
		destinos.setId(id_destinos);
		
		return destinosRepository.save(destinos);
		
	}
	
}
