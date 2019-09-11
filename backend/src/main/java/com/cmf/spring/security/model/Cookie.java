package com.cmf.spring.security.model;

import java.util.Objects;

public class Cookie {

	private String flavour;

	public Cookie(String flavour) {
		this.flavour = flavour;
	}

	public String getFlavour() {
		return flavour;
	}

	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		Cookie cookie = (Cookie) o;
		return Objects.equals(flavour, cookie.flavour);
	}

	public int hashCode() {
		return Objects.hash(flavour);
	}

	public String toString() {
		return "Cookie{" + "flavour='" + flavour + '\'' + '}';
	}

}
