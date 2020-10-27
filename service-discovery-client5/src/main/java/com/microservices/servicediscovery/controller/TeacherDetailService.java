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
import com.microservices.servicediscovery.bean.TeacherDetail;

@RestController
public class TeacherDetailService {
	private String jsonString = "{'T0001':'Boonprasert Surakratanaskul', 'T0002':'Supannada Chotiphun', 'T0003':'Pattanapong Chantamit-O-Pas'}";
	private JsonObject jsonObject = (JsonObject) JsonParser.parseString(jsonString);

	@Autowired
	private DiscoveryClient discoveryClient;
	
//	@RequestMapping("/service-instances/{applicationName}")
//	public List<ServiceInstance> serviceInstancesByApplicationName(
//			@PathVariable String applicationName) {
//		return this.discoveryClient.getInstances(applicationName);
//	}
	
	@RequestMapping("/v1/teacherDetail/{teacherId}")
	public TeacherDetail getTeacherDetail(@PathVariable String teacherId) {
		TeacherDetail s = new TeacherDetail();
		s.setId(teacherId);
		s.setName(jsonObject.get(teacherId).getAsString());
		return s;
	}
}
