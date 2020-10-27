package com.microservices.servicediscovery.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservices.servicediscovery.bean.Course;

@RestController
public class TeacherService {
	
	@Autowired
	private ServiceDiscoveryClient serviceDiscoveryClient;

	@RequestMapping("/v1/enroll/courseReport")
	public List<Course> getStudentReport() {
		List<String> lookups = Arrays.asList("C0001", "C0002");
		List<Course> l = new ArrayList<Course>();
		lookups.forEach(obj -> {
			l.add(serviceDiscoveryClient.getCourse(obj));
		});
		return l;
	}
}
