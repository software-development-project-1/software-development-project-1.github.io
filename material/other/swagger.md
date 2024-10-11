
The `@ApiResponses` and `@ApiResponse` annotations can be used to document different kind of success and error responses and their corresponding HTTP status codes:

```java
@Operation(
    summary = "Get a message by id",
    description = "Returns the message with the provided id"
)
@ApiResponses(value = {
    // The responseCode property defines the HTTP status code of the response
    @ApiResponse(responseCode = "200", description = "Successful operation"),
    @ApiResponse(responseCode = "404", description = "Message with the provided id does not exist")
})
@GetMapping("/{id}")
public Message getMessageById(@PathVariable Long id) {
    // ...
}
```

{: .highlight }

> We cannot define more than one `@ApiResponse` annotation with the same `responseCode` property (HTTP status code) inside a `@ApiResonses` annotation.

{: .important-title }

> Exercise 19
>
> Generate a Swagger documentation for the project as described above. Add proper name and description for all REST controller classes using the `@Tag` annotation. For each REST controller method add a proper summary and description using the `@Operation` annotation. Also add the `@ApiResponses` annotation with an `@ApiResponse` annotation for each success and error response.
