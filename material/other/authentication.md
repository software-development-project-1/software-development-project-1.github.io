## Authentication

Most of the application have features that need to verify the user's identity before they are allowed to perform certain actions. This process is referred to as _authentication_. User's identity can be verified in different ways, but a quite common process is to associate a password with a certain username or some other unique identifier such as email. The user who knows the password of a username will be identified as that user.

The user's password is not stored to the database as a plain text, instead a [hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function) presentation of the password is stored. Hash is like a secret we put behind a door, lock it with a key and throw the key away. There's no way of getting the original text from a hash. But we can _comprare_ two hashes and see if their value is the same. If the data in the database gets into wrong hands, the password hashes can't be used to authenticate.

In web applications the common authentication flow goes like this:

1. The user sends a request with a username and password to the server
2. The server fetches the password hash with the given username from the database, hashes the provided password and compares it with the password hash in the database
3. If the hashes match, the server provides the user with a _token_ that they can use to authenticate the future requests. The server commonly puts the token to a [cookie](https://en.wikipedia.org/wiki/HTTP_cookie) and it is sent to server in each request by the web browser

[Spring Security](https://spring.io/projects/spring-security) is a popular authentication and access-control framework for Spring applications. Let's start using Spring Security in our application by adding the dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

To use authentication related information in templates, we can use the [Thymeleaf Spring Security dialect](https://github.com/thymeleaf/thymeleaf-extras-springsecurity). Let's also add that dependency to the `<dependencies>` list in the `pom.xml` file:

```xml
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity6</artifactId>
</dependency>
```

Next, we need to configure the Spring Security a bit. Let's add the following `SecurityConfig` configuration class for our project:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((requests) -> requests
            .requestMatchers(
                // The REST API endpoints
                antMatcher("/api/**"),
                // The error page
                antMatcher("/error"),
                // Swagger documentation paths
                antMatcher("/v3/api-docs/**"),
                antMatcher("/configuration/ui"),
                antMatcher("/swagger-resources/**"),
                antMatcher("/configuration/security"),
                antMatcher("/swagger-ui/**"))
                // Rest of the permitted paths
                // ...
            .permitAll()
            .anyRequest()
            .authenticated());

        http.formLogin((form) -> form.permitAll());
        http.logout((logout) -> logout.permitAll());
        http.cors(Customizer.withDefaults());
        http.csrf((csrf) -> csrf.ignoringRequestMatchers(antMatcher("/api/**")));

        return http.build();
    }
}
```

The `passwordEncoder` method returns the password encoder object used to hash passwords. We'll use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) which is the de facto hash algorithm for passwords.

The `securityFilterChain` returns the configuration object for Spring Security. The first piece of configuration determines the access-control for our application. The `permitAll()` method call _will permit anyone to access these paths_. This is follow by `anyRequest().authenticated()` method call, which means that _request to any other path will require authentication_.

On top of the configuration class, we need to have class that implements the `UserDetailsService` interface. This class will determine how to fetch the user's information based on the username:

```java
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // ...
    }
}
```

The `loadUserByUsername` method will need to return a `UserDetails` object based on the username provided by the paramater or throw an `UsernameNotFoundException` exception if no user is found.
