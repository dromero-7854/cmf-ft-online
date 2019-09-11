package com.cmf.spring.security.config;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.cmf.spring.security.auth.AuthenticationFilter;
import com.cmf.spring.security.auth.AuthorizationFilter;
import com.cmf.spring.security.auth.CustomUserDetailsService;
import com.cmf.spring.security.auth.TokenProperties;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${cors.enabled:false}")
	private boolean corsEnabled;

	private final TokenProperties tokenProperties;
	private final BCryptPasswordEncoder passwordEncoder;
	private final CustomUserDetailsService userDetailsService;

	public SecurityConfig(TokenProperties tokenProperties, BCryptPasswordEncoder passwordEncoder,
			CustomUserDetailsService userDetailsService) {
		this.tokenProperties = tokenProperties;
		this.passwordEncoder = passwordEncoder;
		this.userDetailsService = userDetailsService;
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		applyCors(httpSecurity)
			.csrf().disable().sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and().exceptionHandling().authenticationEntryPoint(unauthorizedResponse())
			.and()
			.addFilter(new AuthenticationFilter(authenticationManagerBean(), tokenProperties))
			.addFilterAfter(new AuthorizationFilter(tokenProperties), UsernamePasswordAuthenticationFilter.class)
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, tokenProperties.getLoginPath()).permitAll()
			.antMatchers(HttpMethod.POST, "/api/users").permitAll()
			.antMatchers("/api/users/**").hasRole("ADMIN")
			.antMatchers("/api/**").authenticated()
			.anyRequest().permitAll();
	}

	private HttpSecurity applyCors(HttpSecurity httpSecurity) throws Exception {
		if (corsEnabled) {
			return httpSecurity.cors().and();
		} else {
			return httpSecurity;
		}
	}

	private AuthenticationEntryPoint unauthorizedResponse() {
		return (req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED);
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
	}

}
