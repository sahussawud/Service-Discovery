package com.microservices.servicediscovery.controller;

import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.microservices.servicediscovery.bean.Course;

@RestController
public class CourseService {
	private String jsonString = "{'C0001':'SOP', 'C0002':'Requirement Engineering', 'C0003':'Mobile Programming'}";
	private JsonObject jsonObject = (JsonObject) JsonParser.parseString(jsonString);

	@Autowired
	private DiscoveryClient discoveryClient;
	
//	@RequestMapping("/service-instances/{applicationName}")
//	public List<ServiceInstance> serviceInstancesByApplicationName(
//			@PathVariable String applicationName) {
//		return this.discoveryClient.getInstances(applicationName);
//	}
	
	@RequestMapping("/v1/course/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		Course s = new Course();
		s.setId(courseId);
		s.setName(jsonObject.get(courseId).getAsString());
		return s;
	}
}
