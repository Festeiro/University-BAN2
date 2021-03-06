package com.example.myapp.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.dao.impl.ProfessorDAOImpl;
import com.example.myapp.model.Professor;

@RestController
@RequestMapping(path="/professor")
public class ProfessorController {

	public ProfessorController() {
	}

	ProfessorDAOImpl profDAO = new ProfessorDAOImpl();


	@PostMapping(path="/save")
	public boolean save(@RequestBody Professor professor) {
		
		profDAO.save(professor);
		return true;
	}
	
	@DeleteMapping(path="/delete")
	public boolean delete(@RequestParam Long id) {
	
		profDAO.delete(id);
		return false;
	}
	
	@GetMapping(path="/list")
	public ArrayList<Professor> searchById(){
		return profDAO.listAll();
	}

}
