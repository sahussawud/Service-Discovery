package com.microservices.servicediscovery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.microservices.servicediscovery.bean.Course;

@Component
public class ServiceDiscoveryClient {
	@Autowired
	private DiscoveryClient discoveryClient;

    public Course getCourse(String courseId) {
        RestTemplate restTemplate = new RestTemplate();
        List<ServiceInstance> instances = discoveryClient.getInstances("courseservice");

        if (instances.size()==0) return null;
        String serviceUri = String.format("%s/v1/course/%s",instances.get(0).getUri().toString(), courseId);
    
        ResponseEntity< Course > restExchange =
                restTemplate.exchange(
                        serviceUri,
                        HttpMethod.GET,
                        null, Course.class, courseId);

        return restExchange.getBody();
    }
}
