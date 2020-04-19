package com.makco.hoteldemo.config;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableJpaRepositories("com.makco.hoteldemo.repository")
@EnableTransactionManagement
public class DatabaseConfig {

}
