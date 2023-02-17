package com.QuestLog.QuestLog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class QuestLogApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestLogApplication.class, args);
	}

}
